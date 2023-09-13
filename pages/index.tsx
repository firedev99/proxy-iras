import type { ReactElement } from "react"
import { GoogleUI, Layout } from "@components"
import { HomePageWrapper } from "@styles/HomeStyles"
import { useStudent } from "@hooks/useStudent"
import type { GetServerSideProps } from "next"
import { services } from "@/lib/services"
import { HomePageType, IUBCourseProps } from "@/types"

export default function Home({ courses }: HomePageType) {
  const { student } = useStudent()
  if (!student || !courses) return <div />

  const currentCourses = courses?.filter(
    (course) => course.semesterByYear === student.semesterByYear
  )

  return (
    <HomePageWrapper>
      <h1>{student.studentName}</h1>
      {currentCourses && currentCourses.length !== 0 ? (
        currentCourses.map((course) => (
          <span key={course.courseID}>{course.courseName}</span>
        ))
      ) : (
        <span>no courses atm!</span>
      )}
    </HomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  const data = await services.getCourseData(token)

  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
