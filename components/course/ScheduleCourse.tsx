import { CourseProps } from "@/types"

type Props = {
  course: CourseProps
}

export default function ScheduledCourse({ course }: Props) {
  return (
    <>
      <span>{course.courseID}</span>
      <span>{course.courseName}</span>
      <span>{course.section}</span>
      <span>{course.roomID}</span>
      <span>{course.classTime}</span>
    </>
  )
}
