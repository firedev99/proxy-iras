import { ReactElement, useEffect, useState } from "react"
import { Layout } from "@components"
import { useStudent } from "@hooks/useStudent"
import type { GetServerSideProps } from "next"
import { services } from "@/lib/services"
import { HomePageType, CourseProps } from "@/types"
import Image from "next/image"
import dynamic from "next/dynamic"
import { firey } from "@/lib/utils"
import Link from "next/link"

import {
  HomeFooterWrapper,
  HomePageWrapper,
  ProfileAvatar,
  UserDetails,
  UserInformationWrapper,
  UserMetaDataWrapper,
} from "@/styles/HomeStyles"

// class schedule UI
const HomeSchedule = dynamic(
  () => import("../components/course/HomeSchedule"),
  {
    ssr: false,
  }
)

// class courses UI
const HomeCourses = dynamic(() => import("../components/course/HomeCourses"), {
  ssr: false,
})

export default function Home({ courses, classroomCourses }: HomePageType) {
  const { student } = useStudent()
  const [courseList, setCourseList] = useState<CourseProps[]>([])

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
          classroomLink: matchingClassroomCourse
            ? `/courses/${
                matchingClassroomCourse.id
              }?code=${matchingClassroomCourse.name
                .split("-")[2]
                .toLowerCase()}`
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

  // show skeleton if the student does not exists
  if (!student) return <div />

  return (
    <HomePageWrapper>
      <UserInformationWrapper>
        <ProfileAvatar>
          <Image
            src={student.picture}
            alt="cloudinary"
            fill
            sizes="(max-width: 768px) 124px, 186px"
            quality={100}
            placeholder="blur"
            blurDataURL={firey.rgbDataURL(177, 144, 182)}
          />
        </ProfileAvatar>
        <UserDetails>
          <Link href="/profile">
            <h3>{student.studentName}</h3>
          </Link>
          <h5>ID: {student.studentID}</h5>
        </UserDetails>
      </UserInformationWrapper>
      <UserMetaDataWrapper>
        <span>CGPA: {student.cgpa}</span>
        <span>Credit Earned: {student.creditEarned}</span>
        <span>Major: {student.major}</span>
        <span>Minor: {student.minor ?? "Not Declared"}</span>
        <span>Advisor Name: {student.advisorName}</span>
      </UserMetaDataWrapper>
      {courseList.length > 0 && <HomeSchedule courses={courseList} />}
      <HomeCourses courses={courseList} />
      <HomeFooterWrapper></HomeFooterWrapper>
    </HomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // get iub tokens
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  // get google cookies
  const g_token = ctx.req.cookies["g-token"]
  const refreshToken = ctx.req.cookies["r-token"]

  // check if user is connected with a google account
  const googleUser = g_token || refreshToken

  // fetch course details based on user status
  if (token && studentID && !googleUser) {
    const courses = await services.getCourseData(token, studentID)
    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
      },
    }
  }

  // fetch course details based on user status
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
    const cookies = response.headers.getSetCookie()
    ctx.res.setHeader("Set-Cookie", cookies)

    // send the course details to client
    if (response.ok) {
      let { classroomCourses } = await response.json()
      return {
        props: {
          courses: JSON.parse(JSON.stringify(courses)),
          classroomCourses,
        },
      }
    }
  }

  // default value
  return {
    props: {
      courses: undefined,
      classroomCourses: undefined,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout nav={true} title="Dashboard | Proxy IRAS">
      {page}
    </Layout>
  )
}
