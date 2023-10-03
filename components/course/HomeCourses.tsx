import { CourseProps } from "@/types"
import React, { useEffect, useState } from "react"
import {
  CourseElementWrapper,
  CourseElement,
  GradeWrapper,
  HomeCoursesWrapper,
} from "./styles/HomeCourseStyles"
import { colors } from "@/lib/dummy/colors"
import Icon from "@/lib/icons"
import Link from "next/link"
import { firey } from "@/lib/utils"

type Props = {
  courses?: CourseProps[]
}

export default function HomeCourses({ courses }: Props) {
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
    <HomeCoursesWrapper>
      {courses && courses.length !== 0 ? (
        courses.map((course) => (
          <CourseElementWrapper
            key={course.courseID}
            whileHover={{ scale: 0.96 }}
          >
            <Link href={course.classroomLink ?? "/courses"}>
              <CourseElement
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
              </CourseElement>
            </Link>
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
        ))
      ) : (
        <h1>no courses atm 🍻</h1>
      )}
    </HomeCoursesWrapper>
  )
}
