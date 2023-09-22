import { Layout } from "@components"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

type Props = { announcements: any; works: any }

export default function CourseWorksPage({ announcements, works }: Props) {
  console.log(announcements, works)
  return <div>CourseWorksPage</div>
}

CourseWorksPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let g_token = ctx.req.cookies["g-token"]
  let refreshToken = ctx.req.cookies["r-token"]

  let announcements: any = []
  let works: any = []

  // fetch google classroom courses
  if (g_token || refreshToken) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses/all`,
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
      const { announcementList, courseWorks } = await response.json()
      announcements = announcementList
      works = courseWorks
      // classroomCourses = courseList
    } else {
      g_token = undefined
      refreshToken = undefined
    }
  }

  return {
    props: {
      // courses: JSON.parse(JSON.stringify(courses)),
      announcements,
      works,
    },
  }
}
