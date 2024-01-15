import { Layout } from "@/components"
import LaunchingSoon from "@/components/template/LaunchingSoon"
import { classroom_v1 } from "googleapis"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { ReactElement } from "react"

type Props = {
  announcements: classroom_v1.Schema$Announcement[]
  courseWork: classroom_v1.Schema$CourseWork[]
  courseWorkMaterials: classroom_v1.Schema$CourseWorkMaterial[]
}

export default function CoursePage(props: Props) {
  const { announcements, courseWork, courseWorkMaterials } = props
  console.log(announcements, courseWork, courseWorkMaterials, "in client")
  const router = useRouter()

  // return <div>{router.query.id}</div>

  return <LaunchingSoon />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let token = ctx.req.cookies["g-token"]
  let refreshToken = ctx.req.cookies["r-token"]

  // fetch google classroom courses
  if (token || refreshToken) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses/${ctx.query.id}`,
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

    // send to data to client
    if (response.ok) {
      const { announcements, courseWork, courseWorkMaterials } =
        await response.json()

      return {
        props: {
          announcements,
          courseWork,
          courseWorkMaterials,
          code: ctx.query.code || "",
        },
      }
    }
  }

  // default value
  return {
    props: {
      announcements: [],
      courseWork: [],
      courseWorkMaterials: [],
      code: ctx.query.code || "",
    },
  }
}

CoursePage.getLayout = function getLayout(page: ReactElement) {
  // const title =
  //   page.props.children[2].props.children.props.children.props.code || ""
  const childSize = page.props.children.length
  const title =
    page.props.children[childSize - 1].props.children.props.children.props
      .code || ""

  console.log(title)
  return (
    <Layout
      title={`${
        title ? title.toUpperCase() + " -" : ""
      } Proxy IRAS, Student Management System`}
    >
      {page}
    </Layout>
  )
}
