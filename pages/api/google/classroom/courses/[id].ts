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

  const { id } = req.query

  try {
    const cookies = cookie.parse(req.headers.cookie || "")
    const g_token = cookies?.["g-token"] ?? ""
    const tokens = g_token ? JSON.parse(g_token) : {}

    // set the credentials in the auth client to initialize
    oAuth2Client.setCredentials(tokens)

    const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

    // fetch course announcements from classroom
    const announcementList = await classroom.courses.announcements.list({
      courseId: id as string,
      pageSize: 5,
    })

    // fetch course work details from classroom
    const courseWorkList = await classroom.courses.courseWork.list({
      courseId: id as string,
      pageSize: 5,
      courseWorkStates: ["PUBLISHED"],
    })

    return res.status(200).send({
      data: {
        annoucements: announcementList.data.announcements,
        courseWork: courseWorkList.data.courseWork,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(404).send({
      message: "course not found!",
    })
  }
}
