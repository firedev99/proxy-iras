import { useRouter } from "next/router"
import { ReactElement, useState } from "react"
import { GetServerSideProps } from "next"
import { classroom_v1 } from "googleapis"
import { GoogleDueTimeProps } from "@types"
import { Layout } from "@components"
import { dateOptions } from "@/lib/snippets/dateOptions"
import { convertToDeadline } from "@/lib/snippets/convertToDeadLine"
import {
  AnimatedSceneWrapper,
  CoursePageContent,
  CoursePageWrapper,
  CoursePostsWrapper,
} from "@/styles/CourseStyles"
import dynamic from "next/dynamic"
import WalkingDog from "@/components/lottie/WalkingDog"

type Props = {
  announcements: classroom_v1.Schema$Announcement[]
  courseWork: classroom_v1.Schema$CourseWork[]
  // courseWorkMaterials: classroom_v1.Schema$CourseWorkMaterial[]
}

const CourseAnnouncement = dynamic(
  () => import("../../components/announcements"),
  {
    ssr: false,
  }
)

const PopupModal = dynamic(
  () => import("../../components/modals/SimpleModal"),
  {
    ssr: false,
  }
)

export default function CoursePage({ announcements, courseWork }: Props) {
  const [showWarning, setShowWarning] = useState<boolean>(true)

  // router context
  const router = useRouter()
  const { code, sec } = router.query

  // get all the assignments that haven't met deadline
  const dueAssignments = courseWork.filter((course) => {
    const currentDate = new Date()

    // convert deadline
    const dueDate = course.dueDate
      ? convertToDeadline(course.dueDate as GoogleDueTimeProps)
      : new Date(0)

    // assginments that are on going
    if (dueDate > currentDate) {
      return course
    }
  })

  // check if there is any due assignment pending
  const isDue = dueAssignments.length > 0

  // close warning modal
  const closeWarning = () => setShowWarning(false)

  return (
    <>
      <CoursePageWrapper>
        <h2>
          {code}
          {sec && `-${sec}`}
        </h2>

        <CoursePageContent>
          <CoursePostsWrapper>
            {announcements.length > 0 ? (
              announcements.map((post, pI) => (
                <CourseAnnouncement
                  key={`course_announcement__${pI}`}
                  post={post}
                />
              ))
            ) : (
              <AnimatedSceneWrapper>
                <WalkingDog />
                <p>no announcements yet!</p>
              </AnimatedSceneWrapper>
            )}
          </CoursePostsWrapper>
        </CoursePageContent>

        {isDue && showWarning && (
          <PopupModal
            className="course_page_modal"
            open={showWarning && isDue}
            handler={closeWarning}
          >
            <h4>{courseWork[0].title}</h4>

            {dueAssignments[0].dueDate && (
              <span>
                by{" "}
                {dueAssignments[0].dueDate
                  ? convertToDeadline(
                      dueAssignments[0].dueDate as GoogleDueTimeProps
                    ).toLocaleDateString("en-us", dateOptions)
                  : new Date(0).toLocaleDateString("en-us", dateOptions)}
              </span>
            )}
          </PopupModal>
        )}
      </CoursePageWrapper>
    </>
  )
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
      // const { announcements, courseWork, courseWorkMaterials } = await response.json()
      const { announcements, courseWork } = await response.json()

      return {
        props: {
          announcements,
          courseWork,
          // courseWorkMaterials,
          code: ctx.query.code || "",
        },
      }
    }
  }

  // default value
  return {
    redirect: {
      permanent: false,
      destination: "/courses",
    },
    props: {
      announcements: [],
      courseWork: [],
      // courseWorkMaterials: [],
      code: ctx.query.code || "",
    },
  }
}

CoursePage.getLayout = function getLayout(page: ReactElement) {
  const childSize = page.props.children.length
  const title =
    page.props.children[childSize - 1].props.children.props.children.props
      .code || ""

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
