import { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"
import generateClient from "@/lib/google/generateClient"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // enable only get method calls
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed!" })
  }

  try {
    const { id } = req.query
    // generate the client
    const oAuth2Client = await generateClient(req, res)

    // generate google classroom
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
    if (process.env.NODE_ENV !== "production") {
      console.log(err)
    }
    return res.status(400).send({
      message: "something went wrong!",
    })
  }
}
