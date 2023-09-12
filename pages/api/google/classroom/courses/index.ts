import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"
import { google } from "googleapis"
import oAuth2Client from "@/lib/google"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // enable only get method calls
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed!" })
  }

  try {
    const cookies = cookie.parse(req.headers.cookie || "")
    const g_token = cookies?.["g-token"] ?? ""
    const tokens = g_token ? JSON.parse(g_token) : {}

    // set the credentials in the auth client to initialize
    oAuth2Client.setCredentials(tokens)

    // fetch course list from classroom
    const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

    const result = await classroom.courses.list({
      courseStates: ["ACTIVE"], // get only active courses
    })

    return res.status(200).send({
      data: result.data.courses,
    })
  } catch (err) {
    console.log(err)
    return res.status(400).send({
      message: "something went wrong!",
    })
  }
}
