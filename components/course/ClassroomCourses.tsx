import { classroom_v1 } from "googleapis"
import {
  ClassroomAssignmentStatus,
  ClassroomCourseMeta,
  ClassroomCoursesWrapper,
  ClassroomCourseWrapper,
} from "./styles/ClassroomCourseStyles"
import Link from "next/link"
import { colors } from "@/lib/dummy/colors"

type Props = {
  courseWork: classroom_v1.Schema$CourseWork[]
  courseList: classroom_v1.Schema$Course[]
}

export default function ClassroomCourses({ courseList, courseWork }: Props) {
  const lastAssignment = (course: classroom_v1.Schema$Course) =>
    courseWork.filter((assignmets) => assignmets.courseId === course.id)

  return (
    <ClassroomCoursesWrapper>
      {courseList.map((course) => (
        <Link
          key={`classroom_course_${course.id}`}
          href={`/courses/${course.id}?code=${(course.name as string)
            .split("-")[2]
            ?.toLowerCase()}&sec=${(course.name as string).split("-")[3]}`}
        >
          <ClassroomCourseWrapper
            style={{
              boxShadow: `8px 8px 0.5px ${
                colors[Math.floor(Math.random() * colors.length)]
              }`,
            }}
          >
            <ClassroomCourseMeta>
              <h3>{(course.name as string).split("-")[2] ?? course.name}</h3>
            </ClassroomCourseMeta>
            {lastAssignment(course).length > 0 && (
              <ClassroomAssignmentStatus>
                <span>✨{lastAssignment(course)[0].title}</span>
              </ClassroomAssignmentStatus>
            )}
          </ClassroomCourseWrapper>
        </Link>
      ))}
    </ClassroomCoursesWrapper>
  )
}
