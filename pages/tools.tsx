import { useStudent } from "@/hooks/useStudent"
import { services } from "@/lib/services"
import { HelpersPageWrapper } from "@/styles/HelperStyles"
import { CourseOffering } from "@/types"
import { LaunchingTemplate, Layout } from "@components"
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import { ReactElement, useEffect, useState } from "react"

const ScheduleTool = dynamic(
  () => import("../components/tools/EligibleCourses"),
  { ssr: false }
)
const Loader = dynamic(() => import("../components/lottie/EducationScene"), {
  ssr: false,
})

type Props = {
  token?: string
}

interface CourseOfferingResponse {
  data: {
    eligibleOfferCourses: CourseOffering[]
  }
  success: boolean
}

export default function HelpersPage({ token }: Props) {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [courses, setCourses] = useState<any>([])

  const { student } = useStudent()

  useEffect(() => {
    ;(async function requestData() {
      if (!token || !student || loaded) return

      const res = (await services.getDataWithToken(
        `https://iras.iub.edu.bd:8079//api/v1/registration/${student.studentID}/all-offer-courses`,
        token
      )) as CourseOfferingResponse

      if (res.success) {
        const { eligibleOfferCourses } = res.data

        eligibleOfferCourses.forEach((subArr: any) => {
          setCourses((prev: any) => [...prev, subArr])
        })

        setLoaded(true)
      }
    })()
  }, [token, student, loaded])

  if (!loaded) return <Loader />

  return (
    <HelpersPageWrapper>
      {courses.length !== 0 && <ScheduleTool courses={courses} />}
    </HelpersPageWrapper>
  )

  // return <LaunchingTemplate />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]

  return {
    props: {
      token: token,
    },
  }
}

HelpersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Student Assistant - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
