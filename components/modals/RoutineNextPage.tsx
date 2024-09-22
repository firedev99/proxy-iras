import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { useStudent } from "@hooks/useStudent"
import { ShareSchedule } from "@components"
import { CourseProps, RoutineCourseOffering } from "@types"
import {
  RoutineDeleteOption,
  RoutineModalOverlay,
  RoutineNextPageHeading,
  RoutineNextPageWrapper,
  RoutineShareOption,
} from "./styles"
import Icon from "@/lib/icons"
import { useToast } from "@/hooks/useToast"

export default function RoutineNextPage({
  handleNextPageSelection,
}: {
  handleNextPageSelection: () => void
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [routines, setRoutines] = useState<(RoutineCourseOffering[] | null)[]>(
    []
  )

  // toast context
  const { addToast } = useToast()

  // student context
  const { student } = useStudent()

  function populateRoutines(oldRoutines: RoutineCourseOffering[]) {
    // create an empty array of length 5
    const newRoutines = new Array(5).fill(null)

    // populate new routines with existing routines
    if (oldRoutines && oldRoutines.length > 0) {
      for (let i = 0; i < oldRoutines.length; i++) {
        if (i < 5) {
          // if there is data in  old routines, populate em into the newRoutines
          newRoutines[i] = oldRoutines[i]
        } else {
          // if old routines has less than 5 routines then leave it as it is
          break
        }
      }
    }

    return newRoutines
  }

  // handle routine tap
  function handleSelection(item: RoutineCourseOffering[] | null, idx: number) {
    if (!item) return
    setSelectedId(`xx${idx}`)
  }

  // create routine
  function deleteRoutine(idx: Number) {
    if (typeof window === "undefined" || !student) return

    // get the current stored data
    const routineData = localStorage.getItem(`${student.studentID}_routine`)

    // store new routine if a routine already exists
    if (routineData) {
      const _oldRoutine = JSON.parse(routineData)
      const _newRoutine = _oldRoutine.filter((_: any, i: number) => i !== idx)

      // clear old routine from local storage
      localStorage.removeItem(`${student.studentID}_routine`)
      // store routine in local storage
      localStorage.setItem(
        `${student.studentID}_routine`,
        JSON.stringify(_newRoutine)
      )

      setSelectedId(null)
      handleNextPageSelection()
      addToast("Routine has been deleted ⚡")
    }
  }

  function SavedCourses({ course }: { course: RoutineCourseOffering }) {
    return (
      <>
        <span>{course.courseId}</span>
        <span>{course.courseName}</span>
        <span className="center">{course.section}</span>
        <span>{course.timeSlot}</span>
      </>
    )
  }

  // retrive old routines from local storage
  useEffect(() => {
    const routines =
      typeof window !== "undefined" && student
        ? JSON.parse(
            window.localStorage.getItem(`${student.studentID}_routine`) || "[]"
          )
        : []

    const newRoutines = populateRoutines(routines)

    setRoutines(newRoutines)
  }, [student])

  // selected routine index
  const selectedRoutineIdx = Number(selectedId?.split("xx")[1])

  // selected routine preview data
  const displayedRoutine = routines[selectedRoutineIdx]

  // re-structure course details for sharing w friends
  const sharedCoursesDets = displayedRoutine
    ? displayedRoutine.map((routine) => {
        return {
          courseName: routine.courseName,
          courseID: routine.courseId,
          section: routine.section,
          classTime: routine.timeSlot,
        } as CourseProps
      })
    : []

  return (
    <>
      {selectedId && <RoutineModalOverlay className="overlay" />}

      <RoutineNextPageWrapper>
        {routines.map((item, i) => (
          <motion.div
            key={`xx${i}`}
            layoutId={`xx${i}`}
            onClick={() => handleSelection(item, i)}
            className={`item grid_${i + 1} ${item ? "" : "disabled"}`}
            style={{
              filter: item ? "grayscale(0)" : "grayscale(1)",
            }}
          >
            <h4>Routine {i + 1}</h4>
            {!item && <span>Empty</span>}
          </motion.div>
        ))}

        {/* new modal on a routine tap on next page */}
        {selectedId && (
          <>
            <div className="details">
              <button
                className="close_control button"
                onClick={() => setSelectedId(null)}
              >
                <Icon name="cross-icon" />
              </button>
              <h5>Course</h5>
              <h5>Name</h5>
              <h5 className="center">Sec</h5>
              <h5>Time</h5>
              {displayedRoutine &&
                displayedRoutine.map((course, i) => (
                  <SavedCourses
                    course={course}
                    key={`displayed_rotuine_course_pre_${i}`}
                  />
                ))}
            </div>
            {/* display routine sharing option w frinds */}
            <RoutineDeleteOption>
              <button onClick={() => deleteRoutine(selectedRoutineIdx)}>
                <Icon name="trash" />
              </button>
            </RoutineDeleteOption>
            <RoutineShareOption>
              {displayedRoutine && (
                <ShareSchedule type="routine" courses={sharedCoursesDets} />
              )}
            </RoutineShareOption>
          </>
        )}
      </RoutineNextPageWrapper>

      <RoutineNextPageHeading>
        <h3>Plan Your Semester Wisely!</h3>
        <p>
          Create up to 5 personalized routines to manage your course
          registrations hassle-free. Stay organized and avoid schedule clashes
          with ease. Start crafting your perfect semester now 🍻
        </p>
      </RoutineNextPageHeading>
    </>
  )
}
