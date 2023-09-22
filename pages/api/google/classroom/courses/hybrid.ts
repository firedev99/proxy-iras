import { NextApiRequest, NextApiResponse } from "next"
import { classroom_v1, google } from "googleapis"
import generateClient from "@/lib/google/generateClient"
import allowInstitutionalEmail from "@/lib/snippets/allowInstitutionalEmail"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // enable only get method calls
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed!" })
  }

  try {
    // generate the client
    const oAuth2Client = await generateClient(req, res)

    // allow student to only sign in with their own account
    await allowInstitutionalEmail(req, res)

    // generate google classroom
    const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

    // fetch all the active courses
    const courseList = await classroom.courses.list({
      courseStates: ["ACTIVE"],
    })

    const randomCourse = Math.floor(
      Math.random() *
        (courseList.data.courses as classroom_v1.Schema$Course[]).length
    )

    // fetch a random course announcements from classroom
    const announcementList = await classroom.courses.announcements.list({
      courseId: (courseList.data.courses as classroom_v1.Schema$Course[])[
        randomCourse
      ].id as string,
      pageSize: 2,
    })

    // fetch a random course work details from classroom
    const courseWorkList = await classroom.courses.courseWork.list({
      courseId: (courseList.data.courses as classroom_v1.Schema$Course[])[
        randomCourse
      ].id as string,
      pageSize: 2,
      courseWorkStates: ["PUBLISHED"],
    })

    // send the course data
    return res.status(200).send({
      courseList: courseList.data.courses,
      announcementList: announcementList.data.announcements,
      courseWorkList: courseWorkList.data.courseWork,
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
