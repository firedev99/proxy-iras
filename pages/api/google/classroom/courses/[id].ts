import { NextApiRequest, NextApiResponse } from "next"
import { generateClassroom } from "@/lib/google/generateClassroom"

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
    const classroom = generateClassroom(req)

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
