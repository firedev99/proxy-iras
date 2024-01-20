import { classroom_v1 } from "googleapis"
import React, { useEffect, useState } from "react"
import {
  ClassroomAssignmentStatus,
  ClassroomCourseMeta,
  ClassroomCoursesWrapper,
  ClassroomCourseWrapper,
} from "./styles/ClassroomCourseStyles"
import Link from "next/link"
import { firey } from "@/lib/utils"
import { colors } from "@/lib/dummy/colors"

type Props = {
  courseWork: classroom_v1.Schema$CourseWork[]
  courseList: classroom_v1.Schema$Course[]
}

export default function ClassroomCourses({ courseList, courseWork }: Props) {
  const [randomColors, setRandomColors] = useState<string[]>([])

  // Create a shuffled copy of the colors array
  useEffect(() => {
    const shuffledColors = firey.shuffleArray([...colors])
    setRandomColors(shuffledColors)
  }, [])

  // get the next non repeating random color
  function getNextRandomColor() {
    const color = firey.getRandomNonRepeatingValue(randomColors)
    if (color) {
      return color
    } else {
      // if all colors have been used, reshuffle the array
      const shuffledColors = firey.shuffleArray([...colors])
      setRandomColors(shuffledColors)
      return firey.getRandomNonRepeatingValue(shuffledColors)
    }
  }

  return (
    <ClassroomCoursesWrapper>
      {courseList.map((course) => (
        <Link
          key={`classroom_course_${course.id}`}
          href={`/courses/${course.id}?code=${(course.name as string)
            .split("-")[2]
            ?.toLowerCase()}`}
        >
          <ClassroomCourseWrapper
            style={{
              boxShadow: `8px 8px 0.5px ${getNextRandomColor() ?? "#FFF"}`,
            }}
          >
            <ClassroomCourseMeta>
              <h3>{(course.name as string).split("-")[2] ?? course.name}</h3>
            </ClassroomCourseMeta>
            <ClassroomAssignmentStatus>
              {courseWork.length > 0 && (
                <span>
                  ✨
                  {
                    courseWork.filter(
                      (assignmets) => assignmets.courseId === course.id
                    )[0]?.title
                  }
                </span>
              )}
            </ClassroomAssignmentStatus>
          </ClassroomCourseWrapper>
        </Link>
      ))}
    </ClassroomCoursesWrapper>
  )
}
