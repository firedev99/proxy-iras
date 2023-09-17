import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"
import { services } from "@/lib/services"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = cookie.parse(req.headers.cookie || "")
  const token = cookies["user-token"]
  const studentID = cookies["_id"]
  const profilePicture = cookies?.["pp"] ?? ""

  if (token && studentID) {
    // get student profile details from iub api
    const { data } = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v2/profile/${studentID}/load-student-details`,
      token
    )

    res
      .status(200)
      .send({ student: { ...data, googleProfilePicture: profilePicture } })
  }
}
