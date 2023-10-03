import { CourseProps } from "@/types"

type ScheduledCoursesProps = {
  course: CourseProps
}

export default function ScheduledCourse({ course }: ScheduledCoursesProps) {
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
