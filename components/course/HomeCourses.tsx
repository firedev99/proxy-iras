import React, { useEffect, useState } from "react"
import { CourseProps } from "@/types"
import { colors } from "@/lib/dummy/colors"
import { firey } from "@/lib/utils"
import {
  CourseElementWrapper,
  CourseElement,
  GradeWrapper,
  HomeCoursesWrapper,
  HomeCourseAttendanceStatus,
  HomeCourseMeta,
  HomeEmptyWrapper,
} from "./styles/HomeCourseStyles"
import Link from "next/link"
import BGScene from "../bg"

type Props = {
  courses?: CourseProps[]
}

export default function HomeCourses({ courses }: Props) {
  const [randomColors, setRandomColors] = useState<string[]>([])

  // check if the grade has been submited
  const gradeSubmited =
    courses && courses.some((course) => course.grade !== "Z")

  // create a shuffled copy of the colors array
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
    <HomeCoursesWrapper $graded={!!gradeSubmited}>
      {courses && courses.length !== 0 ? (
        courses.map((course, i) => (
          <CourseElementWrapper
            key={`${course.courseID}_${i}`}
            whileHover={{ scale: 0.96 }}
          >
            <Link href={course.classroomLink ?? "/courses"}>
              <CourseElement
                style={{
                  backgroundColor: getNextRandomColor() ?? "#FFF",
                }}
              >
                <HomeCourseMeta>
                  <h3>{course.courseName}</h3>
                  <h5 className="time">{course.classTime}</h5>
                  <h5>{course.roomID}</h5>
                </HomeCourseMeta>
                <HomeCourseAttendanceStatus>
                  <span>
                    {course.attendedClasses ?? 0} /{" "}
                    {course.totalClasses ? course.totalClasses - 1 : 0}
                  </span>
                </HomeCourseAttendanceStatus>
              </CourseElement>
            </Link>
            {course.grade !== "Z" && (
              <GradeWrapper>
                <span>{course.grade}</span>
              </GradeWrapper>
            )}
          </CourseElementWrapper>
        ))
      ) : (
        <HomeEmptyWrapper>
          <h1>no class, atm 🍻</h1>
          <p>
            (might be an issue with the server, try signing out and again login)
          </p>
          <BGScene classname="home" />
        </HomeEmptyWrapper>
      )}
    </HomeCoursesWrapper>
  )
}
