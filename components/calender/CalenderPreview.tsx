import { useRef, useState } from "react"
import { classroom_v1 } from "googleapis"
import { PopupModal } from "@components"
import { dateOptions } from "@/lib/snippets/dateOptions"
import { useWindowSize } from "@hooks/useWindowSize"
import { useClickOutside } from "@hooks/useClickOutside"
import { convertToDeadline } from "@/lib/snippets/convertToDeadLine"
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
import {
  AssginmentPreviewTime,
  CalenderElement,
  PreviewElementWrapper,
} from "./styles"
import { GoogleDueTimeProps, HoveredModalProps } from "@types"
import PreviewElement from "./PreviewElement"

type Props = {
  firstDayCurrentMonth: Date
  courseList: classroom_v1.Schema$Course[]
  courseWork: classroom_v1.Schema$CourseWork[]
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

  const [open, setOpen] = useState<boolean>(false)
  const [assignmentInfo, setAssignmentInfo] = useState<
    | {
        title?: string | null
        assignment?: string | null
        expired: boolean
        dueDate?: classroom_v1.Schema$Date
      }[]
    | null
  >(null)

  const { width } = useWindowSize()

  const workDetsRef = useRef<HTMLDivElement>(null)

  // loop through the current month and get a preview of the dates
  let previewDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  // generate a hovered modals array
  const _hoveredModals: HoveredModalProps[] = previewDays.map((_) => ({
    isOpen: false,
    direction: "left",
  }))

  // handle time selection
  const handleSelection = (day: Date, firstDayCurrentMonth: Date) => {
    if (width < 1280) {
      isSameMonth(day, firstDayCurrentMonth) && setSelectedDay(day)

      const assignment = courseWork
        .filter((course) =>
          isSameDay(
            course.dueDate
              ? convertToDeadline(course.dueDate as GoogleDueTimeProps)
              : parseISO(course.creationTime as string),
            day
          )
        )
        .map((course) => {
          // check if the assignment due date
          const _currentDate = new Date()
          const _dueDate = course.dueDate
            ? convertToDeadline(course.dueDate as GoogleDueTimeProps)
            : new Date(0)

          const assignmentExpired = _currentDate > _dueDate

          const title = courseList.find(
            (mainC) => mainC.id === course.courseId
          )?.name

          return {
            title,
            expired: assignmentExpired,
            assignment: course.title,
            dueDate: course.dueDate,
          }
        })

      if (assignment.length === 0) {
        isSameMonth(day, firstDayCurrentMonth) && setSelectedDay(day)
      } else {
        setAssignmentInfo(assignment)
        setOpen(true)
      }
    }

    isSameMonth(day, firstDayCurrentMonth) && setSelectedDay(day)
  }

  // close modal
  const closeModal = () => setOpen(false)

  // close work details modal
  const closeWorkModal = () => {
    setAssignmentInfo(null)
    setOpen(false)
  }

  // handle click outside of the work details modal
  useClickOutside(workDetsRef, closeWorkModal)

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
            onClick={() => handleSelection(day, firstDayCurrentMonth)}
          >
            <time dateTime={format(day, "dd-MM-yyyy")}>{format(day, "d")}</time>
            {/* show the assignment status */}
            <PreviewElementWrapper>
              {courseList.length !== 0 &&
                courseWork.length !== 0 &&
                courseWork
                  .filter((course) =>
                    isSameDay(
                      course.dueDate
                        ? convertToDeadline(
                            course.dueDate as GoogleDueTimeProps
                          )
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
            </PreviewElementWrapper>
          </CalenderElement>
        ))}
      <PopupModal
        className="calender_modal"
        ref={workDetsRef}
        overlay={false}
        open={open}
        handler={closeModal}
      >
        {assignmentInfo &&
          assignmentInfo.map((info, i) => (
            <div className="assignment_info" key={`assigment_info__${i}`}>
              <h5>{info.title && info.title.split("-")[2]}</h5>
              <span>{info.assignment && info.assignment}</span>
              {info.dueDate && (
                <AssginmentPreviewTime>
                  <span>
                    by{" "}
                    {info.dueDate
                      ? convertToDeadline(
                          info.dueDate as GoogleDueTimeProps
                        ).toLocaleDateString("en-us", dateOptions)
                      : new Date(0).toLocaleDateString("en-us", dateOptions)}
                  </span>
                </AssginmentPreviewTime>
              )}
            </div>
          ))}
      </PopupModal>
    </>
  )
}
