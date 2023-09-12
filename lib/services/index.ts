import { AuthCredentials, IUBCourseProps } from "@types"

async function auth(values: AuthCredentials) {
  const res = await fetch("/api/iub", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  })

  const data = await res.json()
  return data
}

async function getToken(values: AuthCredentials) {
  const res = await fetch("https://iras.iub.edu.bd:8079//v2/account/token", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = res.json()
  return data
}

async function getDataWithToken(endpoint: string, token?: string) {
  if (token) {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    const data = res.json()
    return data
  }
}

async function getUniRules() {
  const res = await fetch(
    `https://iras.iub.edu.bd:8079//v1/commonsetting/UniversitySetting`,
    {
      method: "POST",
      body: JSON.stringify("01"),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  const data = res.json()
  return data
}

async function GoogleAuth(credential: string) {}

async function GetClassRoom(credential: string) {
  await fetch("/api/classroom", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credential }),
  })
}

// async function getClassroom(token: string) {
//   await fetch(`/api/classroom`, {
//     method: "POST",
//     body: JSON.stringify(token),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
// }

async function getCourseData(token?: string) {
  if (!token) return
  // const currentYear = new Date().getFullYear()
  const currentYear = 2021

  const courses = (await services.getDataWithToken(
    `https://iras.iub.edu.bd:8079//api/v1/registration/student-registered-courses/2010047/all`,
    token
  )) as IUBCourseProps

  // destructer response and send only courses that are from this year
  const currentCourses = courses.data
    .filter((course) => Number(course.regYear) === currentYear)
    .map(
      ({
        courseName,
        courseId: courseID,
        section,
        attend: attendedClasses,
        classCount: totalClasses,
        roomId: roomID,
        grade,
        regSemester: semesterByYear,
        regYear: year,
      }) => ({
        courseName,
        courseID,
        section,
        attendedClasses,
        totalClasses,
        roomID,
        grade,
        semesterByYear,
        year,
      })
    )
  return currentCourses
}

export const services = {
  auth,
  getToken,
  getUniRules,
  getDataWithToken,
  getCourseData,
  GoogleAuth,
  GetClassRoom,
}
