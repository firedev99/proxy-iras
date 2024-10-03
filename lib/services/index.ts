import {
  AuthCredentials,
  CourseOffering,
  CourseProps,
  IUBCourseProps,
} from "@types"

async function auth(values: AuthCredentials, csrfToken: string) {
  const response = await fetch(`/api/iub`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": csrfToken,
    },
    body: JSON.stringify({
      email: values.user,
      password: values.password,
    }),
  })

  return response
}

// RcFCkvTt0zpWUPsEIqn9yQ==
// fGs51Emnw8PBatvDw4RQUg==

async function getToken(values: AuthCredentials) {
  const res = await fetch(`${process.env.IUB_API}//v3/account/token`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      Referer: `${process.env.IUB_HOST}`,
    },
  })

  const data = res.json()
  return data
}

async function getOfferedCourses(token: string, studentID: string) {
  try {
    const response = await fetch(
      `${process.env.IUB_API}//api/v1/registration/${studentID}/all-offer-courses`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Referer: `${process.env.IUB_HOST}`,
        },
      }
    )

    const retrivedData = await response.json()
    const { eligibleOfferCourses } = retrivedData.data

    return eligibleOfferCourses as CourseOffering[]
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.log(err)
    }
  }
}

async function getDataWithToken(endpoint: string, token: string) {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Referer: `${process.env.IUB_HOST}`,
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
    `${process.env.IUB_API}//v1/commonsetting/UniversitySetting`,
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

async function getCourseData(token: string, studentID: string) {
  const uniRules = await getUniRules()

  const courses = (await services.getDataWithToken(
    `${process.env.IUB_API}//api/v1/registration/student-registered-courses/${studentID}/all`,
    token
  )) as IUBCourseProps

  // destructer response and send only courses that are from this year
  const currentCourses = courses.data
    .filter(
      (course) =>
        Number(course.regYear) === Number(uniRules.data[0].attendanceYear)
    )
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
  getOfferedCourses,
}
