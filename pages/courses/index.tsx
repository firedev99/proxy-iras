import { GoogleUI, Layout } from "@/components"
import { CourseHomePageWrapper } from "@styles/CourseStyles"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react"

export default function CoursesPage(props: any) {
  const { auth, courses } = props
  // console.log(courses)
  return (
    <CourseHomePageWrapper>
      <h1>Courses Page</h1>
      {courses.length !== 0 ? (
        courses.map((course: any) => (
          <div key={`classroom_course_${course.id}`}>
            <Link href={`/api/google/classroom/courses/${course.id}`}>
              <h3>{course.name}</h3>
            </Link>
          </div>
        ))
      ) : (
        <h3>No course found</h3>
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
    // fetch the course data
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses`,
      {
        headers: {
          Cookie: ctx.req.headers.cookie as string,
        },
      }
    )

    if (res.status === 200) {
      const _courses = await res.json()
      courses = _courses.data
    }
  }

  return {
    props: {
      auth: token || refreshToken ? true : false,
      courses: courses,
    },
  }
}

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
