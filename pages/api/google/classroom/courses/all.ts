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

  const announcementList = []
  const courseWorks = []

  try {
    // generate the client
    const oAuth2Client = await generateClient(req, res)

    // allow student to only sign in with their own account
    await allowInstitutionalEmail(req, res)

    // generate google classroom
    const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

    // fetch all the active courses
    const courseList = await classroom.courses.list({
      courseStates: ["ARCHIVED"],
    })

    if (courseList.data.courses) {
      for (const course of courseList.data.courses) {
        const _announcements = await classroom.courses.announcements.list({
          courseId: course.id as string,
          pageSize: 4,
        })

        const _works = await classroom.courses.courseWork.list({
          courseId: course.id as string,
          pageSize: 3,
          courseWorkStates: ["PUBLISHED"],
        })

        const announcements = _announcements.data.announcements
        const workList = _works.data.courseWork

        if (announcements && announcements.length > 0) {
          announcementList.push({
            courseID: course.id,
            courseName: course.name,
            announcements,
          })
        }

        if (workList && workList.length > 0) {
          courseWorks.push({
            courseID: course.id,
            courseName: course.name,
            workList,
          })
        }
      }
    }

    // return announcements and course work data
    return res.status(200).send({
      announcementList,
      courseWorks,
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
