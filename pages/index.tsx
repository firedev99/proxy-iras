import type { ReactElement } from "react"
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

const HomeCourses = dynamic(() => import("../components/course/HomeCourses"), {
  ssr: false,
})

export default function Home({ courses, classroomCourses }: HomePageType) {
  const { student } = useStudent()

  // make sure that student and courses already exists
  if (!student || !courses) return <div />

  // filter the course array to contain only current coursws
  const currentCourses = courses.filter(
    (course) => course.semesterByYear === student.semesterByYear
  )

  return (
    <HomePageWrapper>
      <UserInformationWrapper>
        <ProfileAvatar>
          <Image
            src={student.picture}
            alt="cloudinary"
            fill
            sizes="(max-width: 768px) 56px, 186px"
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
      <HomeCourses
        classroomCourses={classroomCourses}
        courses={currentCourses}
      />
      <HomeFooterWrapper></HomeFooterWrapper>
    </HomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  // get class room cookies
  let g_token = ctx.req.cookies["g-token"]
  let refreshToken = ctx.req.cookies["r-token"]

  let courses = [] as CourseProps[]
  let classroomCourses: any = []

  // fetch the course data based of student id
  if (token && studentID) {
    courses = await services.getCourseData(token, studentID)
  }

  // fetch google classroom courses
  if (g_token || refreshToken) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses`,
      {
        headers: {
          // send the cookies that are already stored
          Cookie: ctx.req.headers.cookie as string,
        },
      }
    )

    // sent the cookie along w the header that needs to be stored
    const cookies = response.headers.getSetCookie()
    ctx.res.setHeader("Set-Cookie", cookies)

    // set data and tokens based on response status
    if (response.ok) {
      const { data } = await response.json()
      classroomCourses = data
    } else {
      g_token = undefined
      refreshToken = undefined
    }
  }
  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
      classroomCourses,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
