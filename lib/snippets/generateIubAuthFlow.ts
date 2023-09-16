import { parse, serialize } from "cookie"
import { NextApiRequest, NextApiResponse } from "next"
import { services } from "../services"
import { StudentProps } from "@/types"

export default async function generateIubAuthFlow(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const credentials = req.body
  // check from server for credentials
  if (!credentials.email || !credentials.password) {
    return res.status(400).json({ data: "credentials are missing" })
  }

  // parse cookies from the request
  const cookies = parse(req.headers.cookie || "")

  // retrive the CSRF token from the cookie and request payload
  const csrfTokenFromCookie = cookies.csrfToken
  const csrfTokenFromPayload = req.headers["x-csrf-token"]

  // check if the CSRF tokens match
  if (csrfTokenFromCookie === csrfTokenFromPayload) {
    // get token and uni rules
    const response = await services.getToken(credentials)
    const uniRules = await services.getUniRules()

    // destructure token object
    const token = response.data[0].access_token
    const expires_in = response.data[0].expires

    // get the student informations
    const studentInfo = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v1/landing/notichboard/2010047/student`,
      token
    )

    // idk whom iub hired as the developer, i mean he have written such a crap
    // give me money and a few months, i'll let you know what top notch feels like
    const studentCatalogue = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v1/registration/student-catelogue-requirment/2010047`,
      token
    )

    // destructure student informations from the responses
    const { attendanceSemester, attendanceYear } = uniRules.data[0]
    const { studentId, studentName, major, minor, notificationMessages } =
      studentInfo.data
    const { cgpa, creditEarned, advisorName } = studentCatalogue.data[0]

    const _student = {
      studentID: studentId,
      studentName: studentName.slice(1),
      major,
      minor,
      notificationMessages,
      semesterByYear: attendanceSemester,
      year: attendanceYear,
      cgpa,
      creditEarned,
      advisorName,
    } as StudentProps

    // set iub token as cookie
    res.setHeader(
      "Set-Cookie",
      serialize("user-token", String(token), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(expires_in),
        sameSite: "lax",
      })
    )

    // return student data
    return res.status(200).json({ student: _student })
  } else {
    res.status(403).json({ error: "invalid csrf token" })
  }
}
