import { NextApiRequest, NextApiResponse } from "next"
import oAuth2Client from "../google"
import cookie from "cookie"

export default async function allowInstitutionalEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = cookie.parse(req.headers.cookie || "")
  const studentID = cookies["_id"]

  // flow to allow a student only sign in with their own account
  const ticket = await oAuth2Client.verifyIdToken({
    idToken: oAuth2Client.credentials.id_token as string,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  // flow to allow a student to sign in only with own account
  const payload = ticket.getPayload()
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

    res.status(406).send({ message: "sign in with your own email" })
    return
  }
}
