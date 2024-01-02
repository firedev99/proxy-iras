import { parse, serialize } from "cookie"
import { NextApiRequest, NextApiResponse } from "next"
import { services } from "../services"
import { StudentProps } from "@/types"
import { sql } from "@vercel/postgres"

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
      `https://iras.iub.edu.bd:8079//api/v1/landing/notichboard/${credentials.email}/student`,
      token
    )

    // idk whom iub hired as the developer, figuring out these mess made me sick :)
    // give me money and a few months, i'll let you know what top notch feels like
    const studentCatalogue = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v1/registration/student-catelogue-requirment/${credentials.email}`,
      token
    )

    // destructure student informations from the responses
    const { attendanceSemester, attendanceYear } = uniRules.data[0]
    const { studentId, studentName, major, minor, notificationMessages } =
      studentInfo.data
    const { cgpa, creditEarned, advisorName } = studentCatalogue.data[0]

    // get student profile details from iub api
    const {
      data: { sex, email, cellPhone },
    } = await services.getDataWithToken(
      `https://iras.iub.edu.bd:8079//api/v2/profile/${studentId}/load-student-details`,
      token
    )

    // get random number between 1-20
    let randomNumber = Math.floor(Math.random() * 20 + 1)

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
      // generate a random bit emoji based on their gender
      picture: `https://res.cloudinary.com/firey/image/upload/v1694607133/iub/${sex.toLowerCase()}_${randomNumber}.jpg`,
    } as StudentProps

    // save few details from first session
    await sql`
      INSERT INTO Students (id, name, email, contact, image)
      VALUES (${studentId}, ${studentName.slice(
      1
    )}, ${email}, ${cellPhone}, ${`https://iras.iub.edu.bd:8079/photo/${studentId}.jpg`})
      ON CONFLICT (email)
      DO NOTHING;
    `

    // set iub token and id as cookie
    res.setHeader("Set-Cookie", [
      serialize("user-token", String(token), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(expires_in),
      }),
      serialize("_id", String(studentId), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(expires_in),
      }),
    ])

    // return student data
    return res.status(200).json({ student: _student })
  } else {
    res.status(403).json({ error: "invalid csrf token" })
  }
}
