import type { ReactElement } from "react"
import { GoogleUI, Layout } from "@components"
import { useStudent } from "@hooks/useStudent"
import type { GetServerSideProps } from "next"
import { services } from "@/lib/services"
import { HomePageType, CourseProps } from "@/types"
import Image from "next/image"
import dynamic from "next/dynamic"
import { firey } from "@/lib/utils"
import Link from "next/link"

import {
  HomeFooterWrapper,
  HomePageWrapper,
  ProfileAvatar,
  UserDetails,
  UserInformationWrapper,
  UserMetaDataWrapper,
} from "@/styles/HomeStyles"

const SetUpModal = dynamic(() => import("../components/modals/SetUpModal"), {
  ssr: false,
})

const HomeCourses = dynamic(() => import("../components/course/HomeCourses"), {
  ssr: false,
})

export default function Home({ courses }: HomePageType) {
  const { student } = useStudent()
  if (!student || !courses) return <div />

  const currentCourses = courses?.filter(
    (course) => course.semesterByYear === student.semesterByYear
  )

  console.log(student)
  console.log(courses)

  return (
    <HomePageWrapper>
      <UserInformationWrapper>
        <ProfileAvatar>
          <Image
            src="https://res.cloudinary.com/firey/image/upload/v1694607132/iub/male_9.jpg"
            // src="https://lh3.googleusercontent.com/a/ACg8ocKVH6l92asQq1MwjcK4aK8FnvX9TGCKnIJVDo6NxwYrqw8=s186-c"
            alt="cloudinary"
            fill
            sizes="(max-width: 768px) 128px (max-width: 424px) 56px"
            quality={100}
            placeholder="blur"
            blurDataURL={firey.rgbDataURL(177, 144, 182)}
          />
        </ProfileAvatar>
        <UserDetails>
          <Link href="/profile">
            <h3>{student.studentName}</h3>
          </Link>
          <h5>ID: {student.studentID}</h5>
        </UserDetails>
      </UserInformationWrapper>
      <UserMetaDataWrapper>
        <span>CGPA: {student.cgpa}</span>
        <span>Credit Earned: {student.creditEarned}</span>
        <span>Major: {student.major}</span>
        <span>Minor: {student.minor ?? "Not Declared"}</span>
        <span>Advisor Name: {student.advisorName}</span>
      </UserMetaDataWrapper>
      <HomeCourses courses={currentCourses} />
      <HomeFooterWrapper></HomeFooterWrapper>
    </HomePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  let courses = [] as CourseProps[]

  if (token) {
    courses = await services.getCourseData(token)
  }

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
