import { NextApiRequest } from "next"
import cookie from "cookie"
import { google } from "googleapis"
import oAuth2Client from "@/lib/google"
import { firey } from "@/lib/utils"

export function generateClassroom(req: NextApiRequest) {
  const cookies = cookie.parse(req.headers.cookie || "")
  const g_token = cookies?.["g-token"] ?? ""
  const refreshToken = cookies?.["r-token"] ?? ""
  const tokens = g_token ? JSON.parse(g_token) : {}

  if (firey.objEmpty(tokens)) {
    // generate session w refresh token
    oAuth2Client.setCredentials({
      refresh_token: refreshToken,
    })
  } else {
    // initialize auth client w first time attempt
    oAuth2Client.setCredentials(tokens)
  }

  const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

  return classroom
}
