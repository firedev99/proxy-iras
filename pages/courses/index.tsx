import { ReactElement } from "react"
import { useRouter } from "next/router"
import { classroom_v1 } from "googleapis"
import { GetServerSideProps } from "next"
import { AssginmentPreview, GoogleUI, Layout } from "@components"
import {
  ClassroomIconWrapper,
  CourseHomePageWrapper,
  CoursePageTitleWrapper,
  GoogleLoginWrapper,
} from "@styles/CourseStyles"
import dynamic from "next/dynamic"
import BGScene from "@/components/bg"
import Icon from "@/lib/icons"

type Props = {
  g_auth: boolean
  courses: classroom_v1.Schema$Course[]
  courseWork: classroom_v1.Schema$CourseWork[]
}

const ClassroomCourses = dynamic(
  () => import("../../components/course/ClassroomCourses"),
  { ssr: false }
)

export default function CoursesPage({ g_auth, courses, courseWork }: Props) {
  // router context
  const router = useRouter()

  // find if a warning exists
  const warning = Boolean(router.query.warn)

  return (
    <CourseHomePageWrapper $g_auth={g_auth}>
      <CoursePageTitleWrapper>
        <ClassroomIconWrapper>
          <Icon name="google-classroom" />
        </ClassroomIconWrapper>
        <h2>Classroom</h2>
      </CoursePageTitleWrapper>

      {g_auth && (
        <AssginmentPreview courseWork={courseWork} courseList={courses} />
      )}

      {g_auth && (
        <ClassroomCourses courseList={courses} courseWork={courseWork} />
      )}

      {!g_auth && (
        <GoogleLoginWrapper>
          <h1>
            connect your google classroom account{" "}
            {warning ? `to view calender` : `now`}
          </h1>
          <GoogleUI />
          <BGScene />
        </GoogleLoginWrapper>
      )}
    </CourseHomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["g-token"]
  const refreshToken = ctx.req.cookies["r-token"]

  // fetch google classroom courses
  if (token || refreshToken) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses/hybrid`,
      {
        headers: {
          // send the cookies that are already stored
          Cookie: ctx.req.headers.cookie as string,
        },
      }
    )

    // sent the cookie along w the header that needs to be stored
    const setCookies = (response.headers as any).getSetCookie()
    ctx.res.setHeader("Set-Cookie", setCookies)

    // sent the course list and course works to client
    if (response.ok) {
      const { courseList, courseWork } = await response.json()

      return {
        props: {
          g_auth: true,
          courses: courseList,
          courseWork,
        },
      }
    }
  }

  // sent the default values
  return {
    props: {
      g_auth: false,
      courses: [],
      courseWork: [],
    },
  }
}

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Classroom Courses - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
