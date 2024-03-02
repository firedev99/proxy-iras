import Icon from "@/lib/icons"
import { CourseOffering } from "@/types"
import { Variants, motion } from "framer-motion"
import { useState } from "react"
import {
  DummyControls,
  OfferedCourseWrapper,
  EmptyWrapper,
  FilteringOption,
  ToolContent,
  ToolContentWrapper,
  ToolControls,
} from "./styles"
import EmptySearch from "../lottie/EmptySearch"

type Props = {
  courses: CourseOffering[]
}

export default function EligibleCourses({ courses }: Props) {
  const [search, setSearch] = useState<string>("")

  const filteredCourses = courses.filter((course) => {
    const value = search.toLowerCase()
    const courseName = course.courseName && course.courseName.toLowerCase()
    const courseId = course.courseId && course.courseId.toLowerCase()
    const facultyName = course.facualtyName && course.facualtyName.toLowerCase()

    return (
      (courseName && courseName.includes(value)) ||
      (courseId && courseId.includes(value)) ||
      (facultyName && facultyName.includes(value))
    )
  })

  return (
    <OfferedCourseWrapper>
      <DummyControls>
        <span className="red" />
        <span className="yellow" />
        <span className="green" />
      </DummyControls>
      <ToolControls>
        <div className="filter_icon">
          <Icon name="search-filter" />
        </div>
        <FilteringOption>
          <input
            type="text"
            placeholder={`Offered Courses ${new Date().getFullYear()}`}
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FilteringOption>
      </ToolControls>
      <ToolContentWrapper>
        {filteredCourses.length === 0 ? (
          <EmptyWrapper>
            <EmptySearch />
            <p>No course found 😐</p>
          </EmptyWrapper>
        ) : (
          filteredCourses.map(
            (course, i) =>
              course && (
                <ToolContent key={`tool_schedule_${i}`}>
                  <h3>
                    {`${course.courseName} - ${course.courseId} - ${course.section}`}
                  </h3>
                  <span>{course.timeSlot}</span>
                  <span>Credit Hour: {course.creditHour}</span>
                  <span>{course.facualtyName}</span>
                  <div className="course_status">
                    <span>enrolled: {course.enrolled}</span>
                    <span>capacity: {course.capacity}</span>
                  </div>
                  {course.status !== 0 && (
                    <div className="not_allowed">
                      <Icon name="not-allowed" />
                    </div>
                  )}
                </ToolContent>
              )
          )
        )}
      </ToolContentWrapper>
    </OfferedCourseWrapper>
  )
}
