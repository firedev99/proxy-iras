import oAuth2Client from "@/lib/google"
import { SetCookie } from "@/lib/utils/cookies"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { code } = req.query
    const { tokens } = await oAuth2Client.getToken(code as string)

    // set the credentials in the auth client
    oAuth2Client.setCredentials(tokens)

    // store it as cookie
    SetCookie(res, "g-token", tokens, {
      path: "/",
      expires: new Date(tokens.expiry_date as number),
    })

    res.redirect("/courses")
  }
}
