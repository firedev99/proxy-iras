import { GoogleUI, Layout } from "@/components"
import { CourseHomePageWrapper } from "@styles/CourseStyles"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react"

export default function CoursesPage(props: any) {
  const { g_auth, courses, announcements, courseWorks } = props
  console.log(courses)
  console.log(announcements)
  console.log(courseWorks)

  async function logoutFromGoogle() {
    const res = await fetch(`api/google/logout`, { method: "DELETE" })
    console.log(await res.json())
  }

  return (
    <CourseHomePageWrapper>
      <h1>Courses Page</h1>
      <button onClick={logoutFromGoogle}>Signout from Google</button>
      {courses.length !== 0 ? (
        courses.map((course: any) => (
          <div key={`classroom_course_${course.id}`}>
            <Link href={`/api/google/classroom/courses/${course.id}`}>
              <h3>{course.name}</h3>
            </Link>
          </div>
        ))
      ) : (
        <>
          <h3>No course found</h3>
          {/* for any sort of fallback - e.g if the user destroys the permission from their google account settings */}
          <GoogleUI />
        </>
      )}
      {!g_auth && <GoogleUI />}
    </CourseHomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let token = ctx.req.cookies["g-token"]
  let refreshToken = ctx.req.cookies["r-token"]
  let courses: any = []
  let announcements: any = []
  let courseWorks: any = []

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
    const cookies = response.headers.getSetCookie()
    ctx.res.setHeader("Set-Cookie", cookies)

    // set data and tokens based on response status
    if (response.ok) {
      const { courseList, announcementList, courseWorkList } =
        await response.json()
      courses = courseList
      announcements = announcementList ?? []
      courseWorks = courseWorkList ?? []
    } else {
      token = undefined
      refreshToken = undefined
    }
  }

  // return g_auth status and google courses
  return {
    props: {
      g_auth: token || refreshToken ? true : false,
      courses,
      announcements,
      courseWorks,
      // courses: courses ?? null, // null - line(26),
    },
  }
}

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
