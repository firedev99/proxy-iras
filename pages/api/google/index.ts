import oAuth2Client from "@/lib/google"
import { NextApiRequest, NextApiResponse } from "next"

const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/classroom.courses.readonly",
  "https://www.googleapis.com/auth/classroom.announcements.readonly",
  "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { callbackURL } = req.query

    const url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
      state: callbackURL as string,
    })

    res.redirect(url)
  }
}
