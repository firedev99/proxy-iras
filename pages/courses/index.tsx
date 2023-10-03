import { GoogleUI, Layout } from "@/components"
import { logoutFromGoogle } from "@/lib/snippets/logoutFromGoogle"
import { CourseHomePageWrapper } from "@styles/CourseStyles"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react"

export default function CoursesPage(props: any) {
  const { g_auth, courses, courseWork } = props
  console.log(courses)
  console.log(courseWork)

  return (
    <CourseHomePageWrapper>
      <h1>Courses Page</h1>
      <button onClick={logoutFromGoogle}>Signout from Google</button>
      {courses.length !== 0 ? (
        courses.map((course: any) => (
          <div key={`classroom_course_${course.id}`}>
            <Link
              href={`/courses/${course.id}?code=${course.name
                .split("-")[2]
                .toLowerCase()}`}
            >
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
    const cookies = response.headers.getSetCookie()
    ctx.res.setHeader("Set-Cookie", cookies)

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
    <Layout nav={true} title="Classroom Courses | Proxy IRAS">
      {page}
    </Layout>
  )
}
