import oAuth2Client from "@/lib/google"
import { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { state, code } = req.query

    if (code) {
      const { tokens } = await oAuth2Client.getToken(code as string)

      // set the credentials in the auth client
      oAuth2Client.setCredentials(tokens)

      // generate the payload the to get profile informations
      const ticket = await oAuth2Client.verifyIdToken({
        idToken: tokens.id_token as string,
        audience: process.env.GOOGLE_CLIENT_ID,
      })

      const payload = ticket.getPayload()

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
        serialize("pp", String(payload?.picture), {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
        }),
      ])
    }

    // redirect to the callbackURL
    res.redirect(state as string)
  }
}
