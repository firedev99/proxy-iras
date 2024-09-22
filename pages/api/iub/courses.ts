import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"
import { services } from "@/lib/services"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed!" })
  }

  const cookies = cookie.parse(req.headers.cookie || "")
  const token = cookies["user-token"]
  const studentID = cookies["_id"]

  if (token && studentID) {
    const eligibleOfferCourses = await services.getOfferedCourses(
      token,
      studentID
    )
    return res.status(200).send({
      success: true,
      data: eligibleOfferCourses ? eligibleOfferCourses : [],
    })
  }

  return res.status(400).send({
    success: false,
    message: "something went wrong!",
    data: [],
  })
}
