import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"
import { services } from "@/lib/services"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // enable only get method calls
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed!" })
  }

  const cookies = cookie.parse(req.headers.cookie || "")
  const token = cookies["user-token"]
  const studentID = cookies["_id"]
  const googleSavedCookie = cookies[`gsp`] ?? ""
  const googlePicture = googleSavedCookie
    ? JSON.parse(googleSavedCookie)
    : undefined

  if (token && studentID) {
    // get student profile details from iub api
    const { data } = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v2/profile/${studentID}/load-student-details`,
      token
    )

    res.status(200).send({
      student: {
        ...data,
        googleProfilePicture:
          googlePicture && googlePicture.studentID === studentID
            ? googlePicture.picture
            : undefined,
      },
    })
  }
}
