import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfToday,
  startOfWeek,
} from "date-fns"
import { useState } from "react"
import { classroom_v1 } from "googleapis"
import { CalenderElement } from "./styles"
import PreviewElement from "./PreviewElement"

type Props = {
  firstDayCurrentMonth: Date
  courseList: classroom_v1.Schema$Course[]
  courseWork: classroom_v1.Schema$CourseWork[]
}

type GoogleDueTimeProps = {
  day: number
  month: number
  year: number
}

type HoveredModalProps = {
  isOpen: boolean
  direction: "left" | "right"
}

function convertDueDate({ day, month, year }: GoogleDueTimeProps): Date {
  const dueDate = new Date(year, month - 1, day)
  return dueDate
}

// with extra one day
function convertToDeadline({ day, month, year }: GoogleDueTimeProps): Date {
  const deadlineDate = new Date(year, month - 1, day + 1)
  return deadlineDate
}

export default function CalenderPreview({
  firstDayCurrentMonth,
  courseList,
  courseWork,
}: Props) {
  // get the first day of the month
  let today = startOfToday()
  // select a day from calender preview
  const [selectedDay, setSelectedDay] = useState<Date>(today)

  // loop through the current month and get a preview of the dates
  let previewDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  const _hoveredModals: HoveredModalProps[] = previewDays.map((_) => ({
    isOpen: false,
    direction: "left",
  }))

  return (
    <>
      {previewDays.length !== 0 &&
        previewDays.map((day, calenderIdx) => (
          <CalenderElement
            key={day.toString()}
            className={
              isEqual(day, selectedDay)
                ? `auto_view`
                : `` || isSameMonth(day, firstDayCurrentMonth)
                ? ``
                : `disable_view`
            }
            onClick={() => {
              isSameMonth(day, firstDayCurrentMonth) && setSelectedDay(day)
            }}
          >
            <time dateTime={format(day, "dd-MM-yyyy")}>{format(day, "d")}</time>
            {/* show the assignment status */}
            {courseList.length !== 0 &&
              courseWork.length !== 0 &&
              courseWork
                .filter((course) =>
                  isSameDay(
                    course.dueDate
                      ? convertDueDate(course.dueDate as GoogleDueTimeProps)
                      : parseISO(course.creationTime as string),
                    day
                  )
                )
                .map((course, assignmentIdx) => {
                  // check if the assignment due date
                  const _currentDate = new Date()
                  const _dueDate = course.dueDate
                    ? convertToDeadline(course.dueDate as GoogleDueTimeProps)
                    : new Date(0)

                  const assignmentExpired = _currentDate > _dueDate

                  const title = courseList.find(
                    (mainC) => mainC.id === course.courseId
                  )?.name

                  return (
                    <PreviewElement
                      key={`assignment_meta_${assignmentIdx}`}
                      calenderIdx={calenderIdx}
                      course={course}
                      title={title}
                      expired={assignmentExpired}
                      modals={_hoveredModals}
                    />
                  )
                })}
          </CalenderElement>
        ))}
    </>
  )
}
