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
    // generate the client
    const oAuth2Client = await generateClient(req, res)

    // generate google classroom
    const classroom = google.classroom({ version: "v1", auth: oAuth2Client })

    // fetch course list from classroom
    const result = await classroom.courses.list({
      courseStates: ["ACTIVE"], // get only active courses
    })

    return res.status(200).send({
      data: result.data.courses,
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
