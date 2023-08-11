import type { ReactElement } from "react"
import { Layout } from "@components"
import { HomePageWrapper } from "@styles/HomeStyles"
import { useStudent } from "@hooks/useStudent"
import type { GetServerSideProps } from "next"
import { services } from "@/lib/services"
import { HomePageType, IUBCourseProps } from "@/types"

export default function Home({ courses }: HomePageType) {
  const { student } = useStudent()
  if (!student) return <div />
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
  // const currentYear = new Date().getFullYear()
  const currentYear = 2021

  const courses = (await services.getDataWithToken(
    `https://iras.iub.edu.bd:8079//api/v1/registration/student-registered-courses/2010047/all`,
    token
  )) as IUBCourseProps

  // destructer response and send only courses that are from this year
  const currentCourses = courses.data
    .filter((course) => Number(course.regYear) === currentYear)
    .map(
      ({
        courseName,
        courseId: courseID,
        section,
        attend: attendedClasses,
        classCount: totalClasses,
        roomId: roomID,
        grade,
        regSemester: semesterByYear,
        regYear: year,
      }) => ({
        courseName,
        courseID,
        section,
        attendedClasses,
        totalClasses,
        roomID,
        grade,
        semesterByYear,
        year,
      })
    )

  return {
    props: {
      courses: JSON.parse(JSON.stringify(currentCourses)),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
