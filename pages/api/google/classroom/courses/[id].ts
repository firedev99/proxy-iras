import { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"
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

  // // get the student id from cookies
  // const cookies = cookie.parse(req.headers.cookie || "")
  // const studentID = cookies["_id"]

  try {
    const { id } = req.query

    // generate the client
    const oAuth2Client = await generateClient(req, res)

    // allow student to only sign in with their own account
    await allowInstitutionalEmail(req, res)

    // generate google classroom
    const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

    // fetch course announcements from classroom
    const announcementList = await classroom.courses.announcements.list({
      courseId: id as string,
    })

    // fetch course work details from classroom
    const courseWorkList = await classroom.courses.courseWork.list({
      courseId: id as string,
      courseWorkStates: ["PUBLISHED"],
    })

    // return the annoucement list and course works
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
