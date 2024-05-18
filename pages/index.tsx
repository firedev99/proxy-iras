import { ReactElement, useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import { Layout } from "@components"
import { useStudent } from "@hooks/useStudent"
import { services } from "@/lib/services"
import { HomePageType, CourseProps } from "@types"
import dynamic from "next/dynamic"
import Link from "next/link"

import {
  HomePageWrapper,
  UserDetails,
  UserInformationWrapper,
  UserMetaDataWrapper,
} from "@/styles/HomeStyles"

// profile avatar
const ProfileAvatar = dynamic(
  () => import("../components/profile/ProfileAvatar"),
  {
    ssr: false,
  }
)

// home class schedules
const HomeSchedule = dynamic(
  () => import("../components/course/HomeSchedule"),
  {
    ssr: false,
  }
)

// home main courses
const HomeCourses = dynamic(() => import("../components/course/HomeCourses"), {
  ssr: false,
})

// friends
const FriendsUI = dynamic(() => import("../components/friends"), {
  ssr: false,
})

export default function Home({
  courses,
  classroomCourses,
  isInternalBrowser,
}: HomePageType) {
  const [courseList, setCourseList] = useState<CourseProps[]>([])
  const [cgBlurred, setCgBlurred] = useState<boolean>(false)
  const [creditBlurred, setCreditBlurred] = useState<boolean>(false)

  // student context
  const { student } = useStudent()

  useEffect(() => {
    if (!courses || !student) return

    // get the current courses from iub based on running semester
    const currentCourses = courses.filter(
      (course) => course.semesterByYear === student.semesterByYear
    )

    // modify the iub course data to contain classroom link
    if (classroomCourses) {
      const _courseList = currentCourses.map((courseI) => {
        const matchingClassroomCourse = classroomCourses.find(
          (courseG: any) => courseG.name.split("-")[2] === courseI.courseID
        )

        return {
          ...courseI,
          // redirect to the courses page if something went wrong
          classroomLink: matchingClassroomCourse?.name
            ? `/courses/${
                matchingClassroomCourse.id
              }?code=${matchingClassroomCourse.name
                .split("-")[2]
                .toLowerCase()}&sec=${
                matchingClassroomCourse.name.split("-")[3]
              }`
            : undefined,
        }
      })

      // set the modified course details in the state
      setCourseList(_courseList as CourseProps[])
    } else {
      // set the iub courses as it is
      setCourseList(currentCourses)
    }
  }, [courses, student, classroomCourses])

  // handle cgpa hide feature state
  useEffect(() => {
    if (typeof window === "undefined") return

    const cgBlur = localStorage.getItem("blurred")
    const creditsBlur = localStorage.getItem("credit_blurred")

    if (cgBlur && cgBlur === "true") {
      setCgBlurred(true)
    }

    if (creditsBlur && creditsBlur === "true") {
      setCreditBlurred(true)
    }
  }, [])

  // if student is not there show nothing
  if (!student) return <div />

  return (
    <HomePageWrapper>
      <FriendsUI isInternalBrowser={isInternalBrowser} />
      <UserInformationWrapper>
        <ProfileAvatar imgSrc={student.picture} courses={courseList} />
        <UserDetails>
          <Link href="/profile">
            <h3>{student.studentName}</h3>
          </Link>
          <h5>ID: {student.studentID}</h5>
        </UserDetails>
      </UserInformationWrapper>
      <UserMetaDataWrapper $hideCg={cgBlurred} $hideCredits={creditBlurred}>
        <span>CGPA: {student.cgpa}</span>
        <span>Credit Earned: {student.creditEarned}</span>
        <span>Major: {student.major}</span>
        <span>Minor: {student.minor ?? "Not Declared"}</span>
      </UserMetaDataWrapper>
      {courseList.length > 0 && <HomeSchedule courses={courseList} />}
      <HomeCourses courses={courseList} />
    </HomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userAgent = ctx.req.headers["user-agent"]

  // get iub tokens
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  // get google cookies
  const g_token = ctx.req.cookies["g-token"]
  const refreshToken = ctx.req.cookies["r-token"]

  // check if user is connected with a google account
  const googleUser = g_token || refreshToken

  // check if the browser is a internal browser
  const isInternalBrowser = userAgent
    ? userAgent.includes("FBAN/") || // fb
      userAgent.includes("FBAV/") || // fb version
      userAgent.includes("Messenger") || // messenger
      userAgent.includes("Instagram") || // ig
      userAgent.includes("WhatsApp") //wp
    : false

  // fetch course details only if iub token is available
  if (token && studentID && !googleUser) {
    const courses = await services.getCourseData(token, studentID)

    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
        isInternalBrowser,
      },
    }
  }

  // fetch course details if both iub and google tokens are available
  if (token && studentID && googleUser) {
    // iub courses
    const courses = await services.getCourseData(token, studentID)

    // google classroom courses
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses`,
      {
        headers: {
          // send the cookies that are already stored
          Cookie: ctx.req.headers.cookie as string,
        },
      }
    )

    // send the cookie along w the header that needs to be stored
    const setCookies = (response.headers as any).getSetCookie()
    ctx.res.setHeader("Set-Cookie", setCookies)

    // send the course details to client
    if (response.ok) {
      let { classroomCourses } = await response.json()
      return {
        props: {
          courses: JSON.parse(JSON.stringify(courses)),
          classroomCourses,
          isInternalBrowser,
        },
      }
    }
  }

  // default value
  return {
    props: {
      courses: null,
      classroomCourses: null,
      isInternalBrowser: false,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Student Dashboard - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
