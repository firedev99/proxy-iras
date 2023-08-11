import type { NextApiRequest, NextApiResponse } from "next"
import { services } from "@/lib/services"
import { SetCookie } from "@/lib/utils/cookies"
import { StudentProps } from "@types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // enable only post method calls
  if (req.method !== "POST") {
    res.status(405).json({ message: "method not allowed!" })
  }

  try {
    const body = req.body
    // check from server for credentials
    if (!body.email || !body.password) {
      return res.status(400).json({ data: "credentials are missing" })
    }

    // get token and uni rules
    const response = await services.getToken(body)
    const uniRules = await services.getUniRules()

    // destructure token object
    const token = response.data[0].access_token
    const expires = response.data[0].expires

    // get the student informations
    const studentInfo = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v1/landing/notichboard/2010047/student`,
      token
    )

    // destructure student informations from the response
    const { attendanceSemester, attendanceYear } = uniRules.data[0]
    const { studentId, studentName, major, minor, notificationMessages } =
      studentInfo.data
    const _student = {
      studentID: studentId,
      studentName,
      major,
      minor,
      notificationMessages,
      semesterByYear: attendanceSemester,
      year: attendanceYear,
    } as StudentProps

    // set token as cookie
    SetCookie(res, "user-token", token, {
      path: "/",
      expires: new Date(expires),
    })

    return res
      .status(200)
      .json({ message: response.message, student: _student })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: "something went wrong!" })
  }
}
