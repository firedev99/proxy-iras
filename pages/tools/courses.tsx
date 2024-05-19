import { ReactElement } from "react"
import { GetServerSideProps } from "next"
import { ToolCoursesPageWrapper } from "@/styles/ToolStyles"
import { Layout } from "@components"
import dynamic from "next/dynamic"
import { EmptyRoutine } from "@/components/modals/styles"
import Image from "next/image"
import { CourseOffering } from "@/types"
import { services } from "@/lib/services"
// import { useCourses } from "@hooks/useCourses"

const OfferedCourses = dynamic(
  () => import("../../components/tools/OfferedCourses"),
  { ssr: false }
)
const Loader = dynamic(() => import("../../components/lottie/EducationScene"), {
  ssr: false,
})

type Props = {
  token: string | null
  studentID: string | null
  offeredCourses: CourseOffering[]
}

export default function ToolCoursesPage({
  token,
  studentID,
  offeredCourses,
}: Props) {
  if (!token || !studentID) return <Loader />

  return (
    <ToolCoursesPageWrapper>
      {offeredCourses.length === 0 ? (
        <EmptyRoutine>
          <div className="empty_illustration_all">
            <Image
              src="https://res.cloudinary.com/firey/image/upload/v1707759937/iub/empty.svg"
              alt="undraw-empty"
              fill
              priority
            />
          </div>
          <h3>No data!</h3>
        </EmptyRoutine>
      ) : (
        <OfferedCourses courses={offeredCourses} />
      )}
    </ToolCoursesPageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  if (token && studentID) {
    const offeredCourses = await services.getOfferedCourses(token, studentID)

    return {
      props: {
        token,
        studentID,
        offeredCourses: offeredCourses ? offeredCourses : [],
      },
    }
  }

  return {
    props: {
      token: null,
      studentID: null,
      offeredCourses: [],
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
