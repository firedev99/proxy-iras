import { useState } from "react"
import { CourseOffering, RoutineCourseSelectionCallback } from "@types"

type RoutineCourseProps = {
  course: CourseOffering
  handleSelection: RoutineCourseSelectionCallback
}

export default function RoutineCourse({
  course,
  handleSelection,
}: RoutineCourseProps) {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    handleSelection({ course, cb: () => setChecked(!checked) })
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
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
