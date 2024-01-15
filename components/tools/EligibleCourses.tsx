import Icon from "@/lib/icons"
import { CourseOffering } from "@/types"
import { Variants, motion } from "framer-motion"
import { useState } from "react"
import {
  EligibleCourseSchedule,
  EmptyWrapper,
  ToolContent,
  ToolContentWrapper,
  ToolControl,
  ToolStatus,
} from "./styles"
import CourseToggler from "./CourseToggler"
import { ttv } from "./variants"
import EmptySearch from "../lottie/EmptySearch"

type Props = {
  courses: CourseOffering[]
}

export default function EligibleCourses({ courses }: Props) {
  const [expand, setExpand] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")
  const [selectedCourses, setSelectedCourses] = useState<CourseOffering[]>([])
  const [totalCredit, setTotalCredit] = useState<number>(0)

  const expandTool = () => setExpand(true)

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

  // console.log(courses)

  // const handleSelection = (course: CourseOffering) => {
  //   setSelectedCourses((prev) => {
  //     const exist = prev.find((o) => o.courseCode === course.courseCode)
  //     if (exist) {
  //       const newArr = prev.filter((o) => o.timeString !== course.timeString)
  //       prev = newArr
  //       return prev
  //     } else {
  //       return [course, ...prev]
  //     }
  //   })
  // }

  // console.log(selectedCourses)

  return (
    <EligibleCourseSchedule
      $expand={expand}
      variants={ttv}
      initial="initial"
      animate={expand ? "animate" : "initial"}
      onClick={expandTool}
    >
      {expand ? (
        <>
          <ToolControl>
            <Icon name="search-filter" />
            <input
              type="text"
              placeholder="Search & Select Course"
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ToolStatus>
              <span>Total Credit: {totalCredit}</span>
              <span>Total Course: {selectedCourses.length}</span>
            </ToolStatus>
          </ToolControl>
          <ToolContentWrapper>
            {filteredCourses.length === 0 ? (
              <EmptyWrapper>
                <EmptySearch />
                <p>No courses found.</p>
              </EmptyWrapper>
            ) : (
              filteredCourses.map(
                (course, i) =>
                  course && (
                    <ToolContent
                      // onClick={() => handleSelection(course)}
                      key={`tool_schedule_${i}`}
                    >
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
            {/* {courses
              .filter((course) => {
                const value = search.toLowerCase()

                const courseName =
                  course.courseName && course.courseName.toLowerCase()
                const couseId = course.courseId && course.courseId.toLowerCase()
                const facultyName =
                  course.facualtyName && course.facualtyName.toLowerCase()

                return (
                  (courseName && courseName.includes(value)) ||
                  (couseId && couseId.includes(value)) ||
                  (facultyName && facultyName.includes(value))
                )
              })
              
              )} */}
          </ToolContentWrapper>
        </>
      ) : (
        <CourseToggler expand={expand} />
      )}
    </EligibleCourseSchedule>
  )
}
