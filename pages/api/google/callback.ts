import oAuth2Client from "@/lib/google"
import { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { code } = req.query
    const { tokens } = await oAuth2Client.getToken(code as string)

    // set the credentials in the auth client
    oAuth2Client.setCredentials(tokens)

    // store tokens and refresh token as cookie
    res.setHeader("Set-Cookie", [
      serialize("g-token", JSON.stringify(tokens), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(tokens.expiry_date as number),
      }),

      // so that a new access token can be retrive w refresh token
      serialize("r-token", String(tokens.refresh_token), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
      }),
    ])

    // redirect to courses page
    res.redirect("/courses")
  }
}
