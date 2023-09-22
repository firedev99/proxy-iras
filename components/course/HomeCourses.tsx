import { CourseProps } from "@/types"
import React, { useEffect, useState } from "react"
import {
  CourseElementWrapper,
  GradeWrapper,
  HomeCoursesWrapper,
} from "./styles/HomeCourseStyles"
import { colors } from "@/lib/dummy/colors"
import Icon from "@/lib/icons"
import Link from "next/link"
import { firey } from "@/lib/utils"

type Props = {
  courses?: CourseProps[]
  classroomCourses?: any
}

export default function HomeCourses({ courses, classroomCourses }: Props) {
  const [randomColors, setRandomColors] = useState<string[]>([])
  const [modCourses, setModCourses] = useState<CourseProps[]>([])

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

  // modify the current courses to contain it's classroom course id
  useEffect(() => {
    if (!courses) return

    const courseList = courses.map((courseI) => {
      const matchingClassroomCourse = classroomCourses.find(
        (courseG: any) => courseG.name.split("-")[2] === courseI.courseID
      )
      return {
        ...courseI,
        classroomLink: matchingClassroomCourse
          ? `/api/google/classroom/courses/${matchingClassroomCourse.id}`
          : undefined,
      }
    })

    // set the modified courses that contains classroom id into mod courses
    setModCourses(courseList as CourseProps[])
  }, [courses, classroomCourses])

  console.log(modCourses)

  return (
    <HomeCoursesWrapper>
      {modCourses && modCourses.length !== 0 ? (
        modCourses.map((course) => (
          <Link href={course.classroomLink ?? "/courses"} key={course.courseID}>
            <CourseElementWrapper
              whileHover={{ scale: 0.96 }}
              style={{
                backgroundColor: getNextRandomColor() ?? "#FFF",
              }}
            >
              <h3>{course.courseName}</h3>
              <h5 className="time">{course.classTime}</h5>
              <h5>{course.roomID}</h5>
              <span>
                {course.attendedClasses ?? 0} /{" "}
                {course.totalClasses ? course.totalClasses - 1 : 0}
              </span>
              {course.grade !== "Z" && (
                <GradeWrapper>
                  <Icon
                    name="semi-star-shape"
                    className={
                      course.grade === "F" ? "shape_fill_f" : "shape_fill"
                    }
                  />
                  <span>{course.grade}</span>
                </GradeWrapper>
              )}
            </CourseElementWrapper>
          </Link>
        ))
      ) : (
        <h1>no courses atm 🍻</h1>
      )}
    </HomeCoursesWrapper>
  )
}
