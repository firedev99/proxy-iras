import { Dispatch, SetStateAction, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useStudent } from "@hooks/useStudent"
import { useToast } from "@hooks/useToast"
import { ToolsModal } from "@components"
import { useBodyLocked } from "@hooks/useBodyLocked"
import { useClickOutside } from "@hooks/useClickOutside"
import {
  CourseOffering,
  RoutineCourseOffering,
  RoutineCourseSelection,
  RoutineTab,
} from "@types"
import {
  EmptyRoutine,
  RoutineFilterControl,
  RoutineModalHeader,
  RoutineModalNav,
  RoutineModalTabs,
  RoutineModalTabsInner,
  RoutineSelectionStatus,
} from "./styles"
import { tabs } from "@/lib/dummy/tabs"
import RoutineTabCourses from "./RoutineTabCourse"
import Image from "next/image"

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  offeringCourses?: CourseOffering[]
}

export default function RoutineModal({
  open,
  setOpen,
  offeringCourses,
}: Props) {
  // hide the scroll bar when modal gets opened
  useBodyLocked(open)

  const [selectedTab, setSelectedTab] = useState<RoutineTab>(tabs[0])
  const [search, setSearch] = useState<string>("")

  const [selectedCourses, setSelectedCourses] = useState<
    RoutineCourseOffering[]
  >([])
  const [selectedTimes, setSelectedTimes] = useState<string[]>([])
  const [showStatus, setShowStatus] = useState(false)
  const [status, setStatus] = useState<string>("")
  const [totalCredit, setTotalCredit] = useState<number>(0)

  // toaster context
  const { addToast } = useToast()

  // handle course selection
  function handleSelection({ course, cb }: RoutineCourseSelection) {
    // hide status if already true
    if (showStatus) setShowStatus(false)

    // assign an unique key before adding to selected courses
    const courseKey = `${course.courseName}--${course.section}`

    // assign time slots individually to selected times
    const [days, timeRange] = course.timeSlot.split(":")
    const newSlots = days.split("").map((day) => `${day}:${timeRange}`)

    // check if the course is already selected
    const isCourseSelected = selectedCourses.find(
      (item) => item.firey === courseKey
    )

    // check if the there is already a course with the same name has been selected
    const isCourseAlreadyAdded = selectedCourses.find((item) =>
      course.courseName.startsWith(item.courseName)
    )

    // check if there is any available time slot in the selected times
    const isTimeSlotNotAvailable = newSlots.some((slot) =>
      selectedTimes.includes(slot)
    )

    // check if the course clashes with other selected courses
    if ((isTimeSlotNotAvailable || isCourseAlreadyAdded) && !isCourseSelected) {
      setShowStatus(true)

      if (isTimeSlotNotAvailable) {
        setStatus(`time clashes at ${newSlots.join(" and ")} 😔`)
      }

      if (isCourseAlreadyAdded) {
        setStatus(`course already selected 😔`)
      }

      return
    }

    // fitler course from selected courses if already exists
    if (isCourseSelected) {
      const updatedCourses = selectedCourses.filter(
        (item) => item.firey !== courseKey
      )
      setSelectedCourses(updatedCourses)
      const updatedTimes = selectedTimes.filter(
        (slot) => !newSlots.includes(slot)
      )
      setSelectedTimes(updatedTimes)
      setTotalCredit((prev) => prev - Number(course.creditHour))
    } else {
      // add course to selected courses if not exists
      const newCourse = { firey: courseKey, ...course }
      setSelectedCourses((prevCourses) => [...prevCourses, newCourse])
      setSelectedTimes((prev) => [...prev, ...newSlots])
      setTotalCredit((prev) => prev + Number(course.creditHour))
    }

    // callback function
    cb()
  }

  // toggle modal and reset back to it's initial values
  const toggleModal = () => {
    setSelectedTimes([])
    setSelectedCourses([])
    setShowStatus(false)
    setStatus("")
    setTotalCredit(0)
    setOpen(false)
  }

  // student context
  const { student } = useStudent()

  // handle click outside of the modal
  const routineModalRef = useRef<HTMLDivElement>(null)
  useClickOutside(routineModalRef, () => toggleModal())

  // handle course filtering
  function courseFiltering(courses: CourseOffering[]) {
    const filteredCourses = courses.filter((course) => {
      const value = search.toLowerCase()
      const courseName = course.courseName && course.courseName.toLowerCase()
      const courseId = course.courseId && course.courseId.toLowerCase()
      const facultyName =
        course.facualtyName && course.facualtyName.toLowerCase()

      return (
        (courseName && courseName.includes(value)) ||
        (courseId && courseId.includes(value)) ||
        (facultyName && facultyName.includes(value))
      )
    })

    return filteredCourses
  }

  // sort course and filter by group, e.g - foundation, core, minor, major
  function sortByGroup(group: string) {
    // base case
    if (
      !offeringCourses ||
      (offeringCourses && offeringCourses.length === 0) ||
      !student
    )
      return []

    // find course group from credit status
    const courseGroup = student.creditStatus.find(
      (status) => status.courseGroupName === group
    )

    // filter courses based on course group
    const courses = offeringCourses.filter(
      (course) => course.courseGroupId === courseGroup?.courseGroupId
    )

    // display based on input interaction
    if (search.length === 0) {
      return courses
    } else {
      const filteredCourses = courseFiltering(courses)
      return filteredCourses
    }
  }

  // extract courses based on group
  const all = offeringCourses ? courseFiltering(offeringCourses) : []
  const foundation = sortByGroup("Foundation Courses")
  const core = sortByGroup("Core Courses")
  const major = sortByGroup("Major/Concentration/Departmental Requirement")
  const minor = sortByGroup("Minor")

  // create routine
  function createRoutine() {
    if (
      typeof window === "undefined" ||
      selectedCourses.length === 0 ||
      !student
    )
      return

    // get the current stored data
    const routineData = localStorage.getItem(`${student.studentID}_routine`)

    // store new routine if a routine already exists
    if (routineData) {
      const routine = JSON.parse(routineData)

      // push new routine to routine array
      routine.push(selectedCourses)

      // store routine in local storage
      localStorage.setItem(
        `${student.studentID}_routine`,
        JSON.stringify(routine)
      )
    } else {
      // store first routine in local storage
      localStorage.setItem(
        `${student.studentID}_routine`,
        JSON.stringify([selectedCourses])
      )
    }

    // reset to initial state
    setOpen(false)
    setSelectedCourses([])
    setTotalCredit(0)
    setStatus("")
    setShowStatus(false)
    addToast("Routine has been created ⚡")
  }

  return (
    <ToolsModal
      type="routine"
      open={open}
      ref={routineModalRef}
      handler={toggleModal}
    >
      {offeringCourses && offeringCourses.length > 0 && (
        <>
          {/* rotine tab navigation control - start */}
          <RoutineModalHeader>
            {tabs.map((item, i) => (
              <RoutineModalNav
                $active={item === selectedTab}
                key={`routine_tab_${i}`}
                onClick={() => setSelectedTab(item)}
              >
                {item.label}
                {item === selectedTab && (
                  <motion.div
                    layoutId="routine_nav_indicator"
                    className="routine_nav_indicator"
                  />
                )}
              </RoutineModalNav>
            ))}
          </RoutineModalHeader>
          {/* rotine tab navigation control - end */}

          <RoutineSelectionStatus>
            {selectedCourses.length > 0 && (
              <>
                <span>Selected Credit: {totalCredit}</span>
                <span>Selected Course: {selectedCourses.length}</span>
              </>
            )}
            {showStatus && <span className="clash">{status}</span>}
          </RoutineSelectionStatus>

          <RoutineFilterControl>
            <input
              type="text"
              placeholder="type here to filter course"
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
            />
          </RoutineFilterControl>

          {/* rotine tab content - start */}
          <RoutineModalTabs>
            <RoutineModalTabsInner
              style={{ left: `-${Number(selectedTab.slide) * 100}%` }}
            >
              <RoutineTabCourses
                active={selectedTab.label === "Offered Courses"}
                courses={all}
                handleSelection={handleSelection}
                routine={selectedCourses}
              />
              <RoutineTabCourses
                active={selectedTab.label === "Foundation"}
                courses={foundation}
                handleSelection={handleSelection}
                routine={selectedCourses}
              />
              <RoutineTabCourses
                active={selectedTab.label === "Core"}
                courses={core}
                handleSelection={handleSelection}
                routine={selectedCourses}
              />
              <RoutineTabCourses
                active={selectedTab.label === "Major"}
                courses={major}
                handleSelection={handleSelection}
                routine={selectedCourses}
              />
              <RoutineTabCourses
                active={selectedTab.label === "Minor"}
                courses={minor}
                handleSelection={handleSelection}
                routine={selectedCourses}
              />
            </RoutineModalTabsInner>
            <button
              disabled={selectedCourses.length === 0}
              onClick={createRoutine}
              className="submit_routine"
            >
              Make Routine
            </button>
          </RoutineModalTabs>
        </>
      )}

      {/* display no course found */}
      {offeringCourses && offeringCourses.length === 0 && (
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
    </ToolsModal>
  )
}
