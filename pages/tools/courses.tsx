import { ReactElement } from "react"
import { GetServerSideProps } from "next"
import { ToolCoursesPageWrapper } from "@/styles/ToolStyles"
import { Layout } from "@components"
import { useCourses } from "@hooks/useCourses"
import dynamic from "next/dynamic"

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
  const { loading, offeringCourses } = useCourses(token, studentID)

  if (!token || loading) return <Loader />

  return (
    <ToolCoursesPageWrapper>
      {offeringCourses.length !== 0 && (
        <OfferedCourses courses={offeringCourses} />
      )}
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
    <Layout title="Student Assistant - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
