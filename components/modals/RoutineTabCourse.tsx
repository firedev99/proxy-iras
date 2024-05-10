import { motion } from "framer-motion"
import { RoutineCourse } from "@components"
import { EmptyRoutine, RoutineTabCoursesWrapper } from "./styles"
import {
  CourseOffering,
  RoutineCourseOffering,
  RoutineCourseSelectionCallback,
} from "@types"
import Image from "next/image"

type RoutineTabCourse = {
  active: boolean
  courses?: CourseOffering[]
  handleSelection: RoutineCourseSelectionCallback
  routine: RoutineCourseOffering[]
}

export default function RoutineTabCourses({
  courses,
  active,
  handleSelection,
  routine,
}: RoutineTabCourse) {
  return (
    <>
      <RoutineTabCoursesWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
      >
        <motion.div
          className="routine_tab_course"
          initial={{ opacity: 0 }}
          animate={{
            opacity: active ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {courses && courses.length > 0 && (
            <>
              <h4 />
              <h4>Course</h4>
              <h4>Title</h4>
              <h4>Sec</h4>
              <h4>Time</h4>
              <h4>Capacity</h4>
              <h4>Credit</h4>
              <h4>Faculty</h4>
            </>
          )}
          {courses &&
            courses.map((course, i) => (
              <RoutineCourse
                key={`routine_course_preview_${i}`}
                handleSelection={handleSelection}
                course={course}
                routine={routine}
              />
            ))}
        </motion.div>
        {courses && courses.length === 0 && (
          <EmptyRoutine>
            <div className="empty_illustration">
              <Image
                src="https://res.cloudinary.com/firey/image/upload/v1707759937/iub/empty.svg"
                alt="undraw-empty"
                fill
              />
            </div>
            <h3>No data!</h3>
          </EmptyRoutine>
        )}
      </RoutineTabCoursesWrapper>
    </>
  )
}
