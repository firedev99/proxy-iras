import oAuth2Client from "@/lib/google"
import { NextApiRequest, NextApiResponse } from "next"
import cookie, { serialize } from "cookie"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // enable only get method calls
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed!" })
  }

  const cookies = cookie.parse(req.headers.cookie || "")
  const studentID = cookies["_id"]

  const { state, code } = req.query

  if (code) {
    const { tokens } = await oAuth2Client.getToken(code as string)

    // set the credentials in the auth client
    oAuth2Client.setCredentials(tokens)

    // generate the payload to get profile informations
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token as string,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    // flow to allow a student only sign in with their own account
    const google_email = payload?.email?.split("@")[0]

    if (payload && studentID !== google_email) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/google/logout`,
        {
          method: "DELETE",
        }
      )

      // send headers that needs to be deleted along with the request
      const setCookies = (response.headers as any).getSetCookie()
      res.setHeader("Set-Cookie", setCookies)

      // redirect to the page and don't execute further
      res.redirect(state as string)
      return
    }

    // store google tokens as cookie
    res.setHeader("Set-Cookie", [
      serialize("g-token", JSON.stringify(tokens), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(tokens.expiry_date as number),
      }),

      // so that a new access token can be retrive w the refresh token
      serialize("r-token", String(tokens.refresh_token), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
      }),

      // save the profile picture in cookies so that it can be retrive later
      serialize(
        `gsp`,
        JSON.stringify({
          studentID,
          picture: payload?.picture,
        }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
        }
      ),
    ])
  }

  // redirect to the callbackURL
  res.redirect(state as string)
}
