import { ReactElement, useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import { Layout, ShareSchedule } from "@components"
import { useProfile } from "@hooks/useProfile"
import { useStudent } from "@hooks/useStudent"
import { services } from "@/lib/services"
import { firey } from "@/lib/utils"
import { CourseProps } from "@types"
import {
  ChangeAvatarWrapper,
  ChangeNameWrapper,
  EditFriendWrapper,
  ProfileAvatarWrapper,
  ProfileControls,
  ProfileHeading,
  ProfilePageWrapper,
} from "@/styles/ProfileStyles"
import Icon from "@/lib/icons"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useToast } from "@/hooks/useToast"
import { useRouter } from "next/router"
import styled from "styled-components"

type Props = {
  courses: CourseProps[]
}

const ChangeName = dynamic(() => import("../components/profile/ChangeName"), {
  ssr: false,
})

const ChangeAvatar = dynamic(
  () => import("../components/profile/ChangeAvatar"),
  {
    ssr: false,
  }
)

const EditFriend = dynamic(() => import("../components/friends/FriendModal"), {
  ssr: false,
})

export default function ProfilePage({ courses }: Props) {
  const [openName, setOpenName] = useState<boolean>(false)
  const [openAvatar, setOpenAvatar] = useState<boolean>(false)
  const [openFriend, setOpenFriend] = useState<boolean>(false)
  const [cgBlurred, setBlurred] = useState<boolean>(false)
  const [creditBlurred, setCreditBlurred] = useState<boolean>(false)

  const [name, setName] = useState<string>("")

  // student context
  const { student } = useStudent()

  // toast context
  const { addToast } = useToast()

  // router context
  const router = useRouter()

  // get user profile details
  const { studentDetails, dummyPictures } = useProfile()

  // get the current courses from iub based on running semester
  const currentSemesterCourses = student
    ? courses.filter(
        (course) => course.semesterByYear === student.semesterByYear
      )
    : []

  // open name editing modal
  const openNameEdit = () => {
    if (!student) return
    setName(student?.studentName)
    setOpenName(true)
  }

  // toggle change avatar modal
  const toggleAvatarModal = () => setOpenAvatar((prev) => !prev)

  // toggle friend modal
  const toggleFriendModal = () => setOpenFriend((prev) => !prev)

  // save blurred status on cg
  const applyBlurOnCg = () => {
    if (typeof window === "undefined") return

    if (cgBlurred) {
      localStorage.setItem("blurred", "false")
      addToast(`Your CGPA blur feature is now off 😳`)
    } else {
      localStorage.setItem("blurred", "true")
      addToast(`Your CGPA blur feature is now on 🫠`)
    }

    router.reload()
  }

  // save blurred status on credit
  const applyBlurOnCredit = () => {
    if (typeof window === "undefined") return

    if (creditBlurred) {
      localStorage.setItem("credit_blurred", "false")
      addToast(`Your Credit blur feature is now off 😳`)
    } else {
      localStorage.setItem("credit_blurred", "true")
      addToast(`Your Credit blur feature is now on 🫠`)
    }

    router.reload()
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const cgBlur = localStorage.getItem("blurred")
    const creditBlur = localStorage.getItem("credit_blurred")

    if (cgBlur && cgBlur === "true") {
      setBlurred(true)
    }

    if (creditBlur && creditBlur === "true") {
      setCreditBlurred(true)
    }
  }, [])

  // if student or details is not there show nothing
  if (!student || !studentDetails) return <div />

  return (
    <ProfilePageWrapper>
      <ProfileHeading>
        <ProfileAvatarWrapper>
          <Image
            src={student.picture}
            alt="profiler_avatar.jpg"
            fill
            sizes="(max-width: 768px) 256px, 468px"
            quality={100}
            placeholder="blur"
            blurDataURL={firey.rgbDataURL(177, 144, 182)}
          />
        </ProfileAvatarWrapper>
        <h1>{student.studentName}</h1>
        <span className="email">{studentDetails?.primaryEmail}</span>
        <span className="school">{studentDetails?.schoolName}</span>
      </ProfileHeading>
      <ProfileControls>
        <button onClick={openNameEdit}>
          <Icon name="font-icon" />
          <span>Edit Name</span>
        </button>

        <ShareSchedule type="schedule" popup courses={currentSemesterCourses}>
          <span>Share Link</span>
        </ShareSchedule>
        <button onClick={toggleAvatarModal}>
          <Icon name="user" />
          <span>Change Avatar</span>
        </button>
        <button onClick={applyBlurOnCg}>
          <Icon name="frame-art-icon" />
          <span>{cgBlurred ? `Reset` : `Hide`} Pain</span>
        </button>
        <button onClick={toggleFriendModal}>
          <Icon name="checkboard" />
          <span>Edit Friends</span>
        </button>
        <button onClick={applyBlurOnCredit}>
          <Icon name="frame-art-icon" />
          <span>{creditBlurred ? `Show Credits` : `Hide Credits`}</span>
        </button>
      </ProfileControls>

      <ChangeNameWrapper>
        <ChangeName
          open={openName}
          setOpen={setOpenName}
          name={name}
          setName={setName}
          studentDetails={studentDetails}
        />
      </ChangeNameWrapper>

      <ChangeAvatarWrapper>
        <ChangeAvatar
          open={openAvatar}
          setOpen={setOpenAvatar}
          imgSet={dummyPictures}
        />
      </ChangeAvatarWrapper>

      <EditFriendWrapper>
        <EditFriend
          open={openFriend}
          setOpen={setOpenFriend}
          handler={toggleFriendModal}
        />
      </EditFriendWrapper>
    </ProfilePageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["user-token"]
  const studentID = ctx.req.cookies["_id"]

  // fetch course details only if iub token is available
  if (token && studentID) {
    const courses = await services.getCourseData(token, studentID)

    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
      },
    }
  }

  return {
    props: {
      courses: [],
    },
  }
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Student Profile - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
