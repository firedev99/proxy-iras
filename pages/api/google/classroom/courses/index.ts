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
      fields: "courses(id,name)",
    })

    // send the course data
    return res.status(200).send({
      classroomCourses: courseList.data.courses,
    })
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.log(err)
    }

    return res.status(500).send({
      message: "something went wrong!",
    })
  }
}
