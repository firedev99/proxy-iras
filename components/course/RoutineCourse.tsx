import { useState } from "react"
import {
  CourseOffering,
  RoutineCourseOffering,
  RoutineCourseSelectionCallback,
} from "@types"

type RoutineCourseProps = {
  course: CourseOffering
  handleSelection: RoutineCourseSelectionCallback
  selectedCourses: RoutineCourseOffering[]
}

export default function RoutineCourse({
  course,
  handleSelection,
  selectedCourses,
}: RoutineCourseProps) {
  const handleChange = () => {
    handleSelection({ course, cb: () => {} })
  }

  const checkIfExists = () => {
    // assign an unique key before adding to selected courses
    const courseKey = `${course.courseName}--${course.section}`

    // check if the course is already selected
    const exits = selectedCourses.find((item) => item.firey === courseKey)

    if (exits) return true

    return false
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checkIfExists()}
          onChange={handleChange}
        />
        <span className="checkmark" />
      </label>
      <div className="routine_el center">{course.courseId}</div>
      <div className="routine_el">{course.courseName}</div>
      <div className="routine_el center">{course.section}</div>
      <div className="routine_el">{course.timeSlot}</div>
      <div className="routine_el center">
        {course.enrolled}/{course.capacity}
      </div>
      <div className="routine_el center">{course.creditHour}</div>
      <div className="routine_el">{course.facualtyName}</div>
    </>
  )
}
