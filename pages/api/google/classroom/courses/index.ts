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
    const classroom = generateClassroom(req)

    // fetch course list from classroom
    const result = await classroom.courses.list({
      courseStates: ["ACTIVE"], // get only active courses
    })

    return res.status(200).send({
      data: result.data.courses,
    })
  } catch (err) {
    return res.status(400).send({
      message: "something went wrong!",
    })
  }
}
