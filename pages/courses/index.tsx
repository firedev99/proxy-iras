import { GoogleUI, Layout } from "@/components"
import { CourseHomePageWrapper } from "@styles/CourseStyles"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react"

export default function CoursesPage(props: any) {
  const { auth, courses } = props
  console.log(courses)

  return (
    <CourseHomePageWrapper>
      <h1>Courses Page</h1>
      {courses && courses.length !== 0 ? (
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
      {!auth && <GoogleUI />}
    </CourseHomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["g-token"]
  const refreshToken = ctx.req.cookies["r-token"]
  // replace single quotes with double quotes to make it valid JSON
  // const validJsonValue = token?.replace(/'/g, '"')
  let courses: any = []

  if (token || refreshToken) {
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

    if (response.ok) {
      const { data } = await response.json()
      courses = data
    }
  }

  return {
    props: {
      auth: token || refreshToken ? true : false,
      courses: courses ?? null, // null - line(26),
    },
  }
}

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
