import { ReactElement, useState } from "react"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { Layout } from "@components"
import { toolFeatureCardVar } from "@/components/tools/variants"
import { useCourses } from "@hooks/useCourses"
import { useStudent } from "@hooks/useStudent"
import { services } from "@/lib/services"
import {
  ToolsFeatureContent,
  ToolsPageBG,
  ToolsPageFeatures,
  ToolsPageInformation,
  ToolsPageWrapper,
} from "@/styles/ToolStyles"
import { CourseProps } from "@types"
import dynamic from "next/dynamic"
import Image from "next/image"

const RoutineModal = dynamic(
  () => import("../../components/modals/RoutineModal"),
  {
    ssr: false,
  }
)

const CalculatorModal = dynamic(
  () => import("../../components/modals/CalculatorModal"),
  {
    ssr: false,
  }
)

type Props = {
  token?: string
  studentID?: string
  courses: CourseProps[]
}

const Loader = dynamic(() => import("../../components/lottie/EducationScene"), {
  ssr: false,
})

export default function ToolsPage({ token, studentID, courses }: Props) {
  const [openRoutine, setOpenRoutine] = useState<boolean>(false)
  const [openCalculator, setOpenCalculator] = useState<boolean>(false)

  // modal toggle functionality
  const toggleRoutine = () => setOpenRoutine(true)
  const toggleCalculator = () => setOpenCalculator(true)

  // router context
  const router = useRouter()

  // student context
  const { student } = useStudent()

  // fetch offering course data
  const { isLoading, offeredCourses } = useCourses()

  // get the current courses from iub based on running semester
  const currentSemesterCourses = student
    ? courses.filter(
        (course) => course.semesterByYear === student.semesterByYear
      )
    : []

  const modifiedCalculatorCourses = currentSemesterCourses.map((course) => {
    const credit =
      offeredCourses &&
      offeredCourses.find((item) => item.courseName === course.courseName)
        ?.creditHour

    return {
      name: course.courseName,
      credit: credit ?? 0,
      gp: 0,
      grade: "",
    }
  })

  if (isLoading || !token || !studentID) return <Loader />

  return (
    <>
      <RoutineModal
        open={openRoutine}
        setOpen={setOpenRoutine}
        offeringCourses={offeredCourses}
      />
      <CalculatorModal
        open={openCalculator}
        setOpen={setOpenCalculator}
        courses={offeredCourses}
        currentSemester={modifiedCalculatorCourses}
      />
      <ToolsPageWrapper>
        <ToolsPageInformation>
          <h1>Proxy IRAS Student Assistant</h1>
          <p>
            Optimize your semester with our pre-semester routine tool. Calculate
            your CGPA effortlessly and explore the offered courses 2024. Empower
            your academic journey with us!
          </p>
        </ToolsPageInformation>

        <ToolsPageFeatures>
          <ToolsFeatureContent
            variants={toolFeatureCardVar}
            whileHover="animate"
            whileTap="initial"
            onClick={toggleRoutine}
          >
            <h4>Routine</h4>
            <div className="tools_feature_img">
              <Image
                fill
                alt="tools_1.svg"
                priority
                src="https://res.cloudinary.com/firey/image/upload/w_400,q_auto,f_auto/v1706380934/note_and_pencil_nnrkkx.svg"
              />
            </div>
          </ToolsFeatureContent>

          <ToolsFeatureContent
            variants={toolFeatureCardVar}
            whileHover="animate"
            whileTap="initial"
            onClick={toggleCalculator}
          >
            <h4>CGPA Calculator</h4>
            <div className="tools_feature_img">
              <Image
                fill
                priority
                alt="tools_2.svg"
                src="https://res.cloudinary.com/firey/image/upload/w_400,q_auto,f_auto/v1706380934/calculator_umg3in.svg"
              />
            </div>
          </ToolsFeatureContent>

          <ToolsFeatureContent
            variants={toolFeatureCardVar}
            whileHover="animate"
            whileTap="initial"
            onClick={() => router.push("/tools/courses")}
          >
            {/* <h4>{`Offered Courses ${
              student?.semesterName
            } ${new Date().getFullYear()}`}</h4> */}
            <h4>{`Offered Courses Autumn ${new Date().getFullYear()}`}</h4>
            <div className="tools_feature_img">
              <Image
                fill
                priority
                alt="tools_3.svg"
                src="https://res.cloudinary.com/firey/image/upload/w_400,q_auto,f_auto/v1706380934/search_mobile_uzsws4.svg"
              />
            </div>
          </ToolsFeatureContent>

          <ToolsFeatureContent
            variants={toolFeatureCardVar}
            whileHover="animate"
            whileTap="initial"
            onClick={() => router.push("/tools/todo")}
          >
            <h4>Todo</h4>
            <div className="tools_feature_img">
              <Image
                fill
                alt="tools_4.svg"
                priority
                src="https://res.cloudinary.com/firey/image/upload/w_400,q_auto,f_auto/v1706380934/analog_alarm_byivow.svg"
              />
            </div>
          </ToolsFeatureContent>
        </ToolsPageFeatures>

        <ToolsPageBG>
          <Image
            fill
            priority
            src="https://res.cloudinary.com/firey/image/upload/w_1560,q_auto,f_auto/v1706369306/kid-on-desk_sjxhzo.svg"
            alt="figma_illustration_kid_on_desk.svg"
          />
        </ToolsPageBG>
      </ToolsPageWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  if (token && studentID) {
    const courses = await services.getCourseData(token, studentID)

    return {
      props: {
        token,
        studentID,
        courses: JSON.parse(JSON.stringify(courses)),
      },
    }
  }

  return {
    props: {
      token,
      studentID,
      courses: [],
    },
  }
}

ToolsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Student Assistant - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
