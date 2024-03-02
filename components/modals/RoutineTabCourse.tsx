import { motion } from "framer-motion"
import { RoutineCourse } from "@components"
import { RoutineTabCoursesWrapper } from "./styles"
import { CourseOffering, RoutineCourseSelectionCallback } from "@types"

type RoutineTabCourse = {
  active: boolean
  courses?: CourseOffering[]
  handleSelection: RoutineCourseSelectionCallback
}

export default function RoutineTabCourses({
  courses,
  active,
  handleSelection,
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
          <h4 />
          <h4>Course</h4>
          <h4>Title</h4>
          <h4>Sec</h4>
          <h4>Time</h4>
          <h4>Capacity</h4>
          <h4>Credit</h4>
          <h4>Faculty</h4>
          {courses &&
            courses.map((course, i) => (
              <RoutineCourse
                key={`routine_course_preview_${i}`}
                handleSelection={handleSelection}
                course={course}
              />
            ))}
        </motion.div>
      </RoutineTabCoursesWrapper>
    </>
  )
}
