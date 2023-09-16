import { AuthCredentials, CourseProps, IUBCourseProps } from "@types"

async function auth(values: AuthCredentials, csrfToken: string) {
  const response = await fetch(`/api/iub`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": csrfToken,
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
  })

  return response
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

async function getDataWithToken(endpoint: string, token: string) {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    const data = response.json()
    return data
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.log(error)
    }
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

async function getCourseData(token: string) {
  const currentYear = new Date().getFullYear()

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
        classTime,
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
        classTime,
      })
    ) as CourseProps[]

  return currentCourses
}

export const services = {
  auth,
  getToken,
  getUniRules,
  getDataWithToken,
  getCourseData,
}
