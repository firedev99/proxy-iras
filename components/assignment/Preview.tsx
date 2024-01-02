import { GoogleDueTimeProps } from "@/types"
import { classroom_v1 } from "googleapis"
import React from "react"
import dynamic from "next/dynamic"
import {
  AssginmentPreviewElement,
  AssginmentPreviewTime,
  AssignmentPreviewMeta,
  AssignmentPreviewWrapper,
} from "./styles/AssignmentPreviewStyles"

const FancySticker = dynamic(() => import("./FancySticker"), { ssr: false })

type Props = {
  courseWork: classroom_v1.Schema$CourseWork[]
  courseList: classroom_v1.Schema$Course[]
}

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  month: "short",
  day: "numeric",
}

// with extra one day
function convertToDeadline({ day, month, year }: GoogleDueTimeProps): Date {
  const deadlineDate = new Date(year, month - 1, day + 1)
  return deadlineDate
}

export default function Preview({ courseWork, courseList }: Props) {
  const dueAssignments = courseWork
    .filter((course) => {
      const currentDate = new Date()
      const dueDate = course.dueDate
        ? convertToDeadline(course.dueDate as GoogleDueTimeProps)
        : new Date(0)

      // assginments that are on going
      if (dueDate > currentDate) {
        return course
      }
    })
    .map((dueCourse) => {
      // course title from course list
      const title = courseList.find(
        (mainC) => mainC.id === dueCourse.courseId
      )?.name

      // return new object that includes assignment along with the course name
      return {
        newTitle: `${dueCourse.title} ${title ? `- ${title}` : ``}`,
        ...dueCourse,
      }
    })

  return (
    <AssignmentPreviewWrapper $expand={courseList.length === 0}>
      <FancySticker />
      {dueAssignments.length > 0 ? (
        dueAssignments.map((course, idx) => (
          <AssginmentPreviewElement
            key={`course_page_assingment_preview_${idx}`}
          >
            <AssignmentPreviewMeta>
              <span>🤧</span>
              <h4>{course.newTitle}</h4>
            </AssignmentPreviewMeta>
            {course.dueDate && (
              <AssginmentPreviewTime>
                {course.dueDate
                  ? convertToDeadline(
                      course.dueDate as GoogleDueTimeProps
                    ).toLocaleDateString("en-us", options)
                  : new Date(0).toLocaleDateString("en-us", options)}
              </AssginmentPreviewTime>
            )}
          </AssginmentPreviewElement>
        ))
      ) : (
        <h2>No due assignment 🍻</h2>
      )}
    </AssignmentPreviewWrapper>
  )
}
