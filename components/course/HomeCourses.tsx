import { CourseProps } from "@/types"
import React, { useEffect, useState } from "react"
import {
  CourseElementWrapper,
  GradeWrapper,
  HomeCoursesWrapper,
} from "./styles/HomeCourseStyles"
import { colors } from "@/lib/dummy/colors"
import Icon from "@/lib/icons"

type Props = {
  courses?: CourseProps[]
}

// generate a non repeating random value from an array
function getRandomNonRepeatingValue(dict: string[]) {
  if (dict.length === 0) {
    return null
  }

  // pop and return the last element from the array.
  return dict.pop() || null
}

// Fisher-Yates shuffle algorithm.
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function HomeCourses({ courses }: Props) {
  const [randomColors, setRandomColors] = useState<string[]>([])

  useEffect(() => {
    // Create a shuffled copy of the colors array
    const shuffledColors = shuffleArray([...colors])
    setRandomColors(shuffledColors)
  }, [])

  const getNextRandomColor = () => {
    const color = getRandomNonRepeatingValue(randomColors)
    if (color) {
      return color
    } else {
      // if all colors have been used, reshuffle the array
      const shuffledColors = shuffleArray([...colors])
      setRandomColors(shuffledColors)
      return getRandomNonRepeatingValue(shuffledColors)
    }
  }

  return (
    <HomeCoursesWrapper>
      {courses && courses.length !== 0 ? (
        courses.map((course) => (
          <CourseElementWrapper
            whileHover={{ scale: 0.96 }}
            key={course.courseID}
            style={{
              backgroundColor: getNextRandomColor() ?? "",
            }}
          >
            <h3>{course.courseName}</h3>
            <h5>{course.classTime}</h5>
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
        ))
      ) : (
        <h1>no courses atm 🍻</h1>
      )}
    </HomeCoursesWrapper>
  )
}
