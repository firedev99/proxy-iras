import { useToast } from "@hooks/useToast"
import { ReactNode } from "react"
import { useStudent } from "@hooks/useStudent"
import { CourseProps } from "@types"
import { useClipboard } from "@hooks/useClipboard"
import Icon from "@/lib/icons"

type Props = {
  courses: CourseProps[]
  context?: boolean
  type: "routine" | "schedule"
  popup?: boolean
  children?: ReactNode
}

export default function ShareSchedule({
  courses,
  context,
  type,
  children,
  popup = false,
}: Props) {
  // student context
  const { student } = useStudent()

  // clipboard context
  const clipboard = useClipboard()

  // toast context
  const { addToast } = useToast()

  // convert course data to url
  function coursesToURL(courses: any) {
    const baseURL = `${process.env.NEXT_PUBLIC_URL}/#/sharing?`

    // convert course data information to query params
    const queryParams = courses
      .map((course: any) => {
        return `course=${encodeURIComponent(course.courseName)}&id=${
          course.courseID
        }&sec=${course.section}&room=${encodeURIComponent(
          course.roomID
        )}&time=${encodeURIComponent(course.classTime)}`
      })
      .join("&")

    // return it as an url
    return (
      baseURL +
      queryParams +
      `&type=${type}&name=${encodeURIComponent(
        student?.studentName || "proxy"
      )}&sex=${student?.sex || "proxy"}&img=${student?.picture}`
    )
  }

  function handleUrlCopy() {
    clipboard.copy(coursesToURL(courses))
    if (popup) {
      addToast(
        "Link has been copied 👊🏼 You can now share it with your friends 🥂"
      )
    }
  }

  return (
    <button
      className="share_control"
      data-title={context && "Share Schedule"}
      onClick={handleUrlCopy}
    >
      <Icon
        name={clipboard.status === "SUCCESS" ? "copied-clipboard" : "link-icon"}
      />
      {children && children}
    </button>
  )
}
