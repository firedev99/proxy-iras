import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"
import { firey } from "../utils"
import oAuth2Client from "."
import { serialize } from "cookie"

export default async function generateClient(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = cookie.parse(req.headers.cookie || "")
  const g_token = cookies?.["g-token"] ?? ""
  const refreshToken = cookies?.["r-token"] ?? ""
  const tokens = g_token ? JSON.parse(g_token) : {}

  if (firey.objEmpty(tokens)) {
    // set the refresh handler callback
    oAuth2Client.setCredentials({
      refresh_token: refreshToken,
    })

    // generate a new token
    const accessTokenResponse = await oAuth2Client.getAccessToken()

    // set the new credentials in the client
    if (accessTokenResponse.res) {
      oAuth2Client.setCredentials(accessTokenResponse.res.data)
      // store google tokens as cookie
      res.setHeader("Set-Cookie", [
        serialize("g-token", JSON.stringify(accessTokenResponse.res.data), {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          expires: new Date(accessTokenResponse.res.data.expiry_date as number),
        }),

        // so that a new access token can be retrive w the refresh token
        serialize(
          "r-token",
          String(accessTokenResponse.res.data.refresh_token),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
          }
        ),
      ])
    }
  } else {
    // initialize auth client w initial attempt
    oAuth2Client.setCredentials(tokens)
  }

  return oAuth2Client
}
