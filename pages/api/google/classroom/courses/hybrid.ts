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
    const courseListResponse = await classroom.courses.list({
      courseStates: ["ACTIVE"],
      fields: "courses(id,name,section,description,alternateLink)",
    })

    if (courseListResponse.data.courses) {
      const courseWorkPromises = courseListResponse.data.courses.map(
        async (course) => {
          // fetch all the course work details
          const workList = await classroom.courses.courseWork.list({
            courseId: course.id as string,
            fields:
              "courseWork(id,courseId,title,creationTime,dueTime,dueDate,alternateLink)",
          })

          return workList.data.courseWork || []
        }
      )

      // use Promise.all to execute all requests concurrently
      const courseWorkResults = await Promise.all(courseWorkPromises)

      // concatenate all course work results
      const courseWork = courseWorkResults.flat()

      // return the course data
      return res.status(200).send({
        courseList: courseListResponse.data.courses,
        courseWork,
      })
    }
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.log(err)
    }

    return res.status(500).send({
      message: "something went wrong!",
    })
  }
}
