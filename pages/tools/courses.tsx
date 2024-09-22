import { ReactElement } from "react"
import { GetServerSideProps } from "next"
import { ToolCoursesPageWrapper } from "@/styles/ToolStyles"
import { EmptyCourseStat, Layout } from "@components"
import dynamic from "next/dynamic"
import { useCourses } from "@/hooks/useCourses"

const OfferedCourses = dynamic(
  () => import("../../components/tools/OfferedCourses"),
  { ssr: false }
)
const Loader = dynamic(() => import("../../components/lottie/EducationScene"), {
  ssr: false,
})

type Props = {
  token?: string
  studentID?: string
}

export default function ToolCoursesPage({ token, studentID }: Props) {
  const { isLoading, offeredCourses } = useCourses()

  if (isLoading || !token || !studentID) return <Loader />

  if (offeredCourses.length === 0) return <EmptyCourseStat />

  return (
    <ToolCoursesPageWrapper>
      <OfferedCourses courses={offeredCourses} />
    </ToolCoursesPageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  return {
    props: {
      token,
      studentID,
    },
  }
}

ToolCoursesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Offered Courses - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
