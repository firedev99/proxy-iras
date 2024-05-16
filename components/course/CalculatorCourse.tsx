import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { creditValues, gradePoints, gradeValues } from "@/lib/dummy/calculator"
import { CalculatorCourseWrapper } from "./styles/CalculatorCourseStyles"
import { CalculatorCourseProps, CourseOffering } from "@types"
import Icon from "@/lib/icons"

export default function CalculatorCourse({
  selectedCourse,
  courses,
  setCalculatorCourses,
  index,
}: {
  selectedCourse: CalculatorCourseProps
  courses: CourseOffering[]
  index: number
  setCalculatorCourses: Dispatch<SetStateAction<CalculatorCourseProps[]>>
}) {
  // handle course name selection
  function handleCourseNameSelection(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()

    // find the credit of the selected course
    const credit = courses.find(
      (course) => course.courseName === e.target.value
    )?.creditHour

    // get the index of the selected grade from the grade list
    const gradeIdx = gradeValues.indexOf(selectedCourse.grade)
    // get the the grade point from the gp list based on the index of the selected grade
    const gp = gradePoints[gradeIdx]

    const totalGp = Number((Number(gp) * (credit ?? 0)).toFixed(1))

    setCalculatorCourses((prev) => {
      const updatedCourses = [...prev]
      // update the selection courses to contain newly selected values
      updatedCourses[index] = {
        name: e.target.value,
        credit: credit ?? 0,
        // gp: selectedGp,
        gp: totalGp,
        grade: updatedCourses[index].grade,
      }

      return updatedCourses
    })
  }

  // handle credit selection
  function handleCourseCreditSelection(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()

    const credit = Number(e.target.value)

    // get the index of the selected grade from the grade list
    const gradeIdx = gradeValues.indexOf(selectedCourse.grade)
    // get the the grade point from the gp list based on the index of the selected grade
    const gp = gradePoints[gradeIdx]

    const totalGp = Number((Number(gp) * credit).toFixed(1))

    // update the credit only
    setCalculatorCourses((prev) => {
      const updatedCourses = [...prev]

      updatedCourses[index] = {
        name: updatedCourses[index].name,
        credit,
        // if the user selects a non number value | (if grade is "")
        gp: isNaN(totalGp) ? 0 : totalGp,
        grade: updatedCourses[index].grade,
      }

      return updatedCourses
    })
  }

  // handle grade selection
  function handleCourseGradeSelection(e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()

    const grade = e.target.value

    // get the index of the grade from the grade list
    const gradeIdx = gradeValues.indexOf(grade)
    // get the the grade point from the gp list based on the index of the selected grade
    const gp = gradePoints[gradeIdx]

    const totalGp = Number((Number(gp) * selectedCourse.credit).toFixed(1))

    // update the grade point and grade only
    setCalculatorCourses((prev) => {
      const updatedCourses = [...prev]
      updatedCourses[index] = {
        name: updatedCourses[index].name,
        // if the grade is "W" or "I" don't assign any credit or grade
        credit: ["W", "I"].includes(grade) ? 0 : updatedCourses[index].credit,
        // if the user selects a non number value
        gp: isNaN(totalGp) ? 0 : totalGp,
        grade,
      }

      return updatedCourses
    })
  }

  // handle row delete
  function handleDeleteRow() {
    setCalculatorCourses((prev) => {
      if (prev.length === 1) return prev
      const prevCourses = [...prev]
      const updatedCourses = prevCourses.filter((_, i) => i !== index)
      return updatedCourses
    })
  }

  return (
    <CalculatorCourseWrapper>
      <select value={selectedCourse.name} onChange={handleCourseNameSelection}>
        <option value="">Select a course</option>
        {courses.map((course, i) => (
          <option value={course.courseName} key={`calculator_course_name_${i}`}>
            {course.courseName}
          </option>
        ))}
      </select>
      <select
        value={selectedCourse.credit}
        onChange={handleCourseCreditSelection}
      >
        {creditValues.map((val, i) => (
          <option key={`credit_${i}`} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        value={selectedCourse.grade}
        onChange={handleCourseGradeSelection}
      >
        <option value="">Grade</option>
        {gradeValues.map((grade, i) => (
          <option key={`calculator_course_grade_${i}`} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      <button onClick={() => handleDeleteRow()}>
        <Icon name="cross-icon" />
      </button>
    </CalculatorCourseWrapper>
  )
}
