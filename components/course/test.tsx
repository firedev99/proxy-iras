import { dayAbbreviations } from "@/lib/dummy/days"
import { CourseProps } from "@/types"
import { ClassScheduleWrapper } from "./styles/HomeCourseStyles"

type Props = {
  courses?: CourseProps[]
}

type ScheduledCoursesProps = {
  course: CourseProps
}

function ScheduledCourses({ course }: ScheduledCoursesProps) {
  return (
    <>
      <span>{course.courseID}</span>
      <span>{course.courseName}</span>
      <span>{course.section}</span>
      <span>{course.roomID}</span>
      <span>{course.classTime}</span>
    </>
  )
}

export default function HomeSchedule({ courses }: Props) {
  // get the current date and day of the week
  const _currentDate = new Date()
  const _currentDay = _currentDate.toLocaleDateString("en-US", {
    weekday: "short",
  })

  // get the abbreviation for the current day
  const currentDayAbbreviation = dayAbbreviations[_currentDay]

  // filter and display courses for the current day
  const coursesCurrentDay =
    courses &&
    courses.filter((course) =>
      course.classTime.includes(currentDayAbbreviation)
    )

  if (coursesCurrentDay && coursesCurrentDay.length > 0) {
    return (
      <ClassScheduleWrapper>
        <h2>Today&apos;s schedule: </h2>
        <div className="course_meta_wrapper">
          <h4>Code</h4>
          <h4>Name</h4>
          <h4>Sec</h4>
          <h4>Room</h4>
          <h4>Time</h4>
          {coursesCurrentDay.map((course) => (
            <ScheduledCourses
              key={`schedule_${course.courseID}`}
              course={course}
            />
          ))}
        </div>
      </ClassScheduleWrapper>
    )
  } else {
    // Find the next class day with upcoming courses
    const dayAbbreviationsList = Object.keys(dayAbbreviations)
    const startIndex = dayAbbreviationsList.indexOf(currentDayAbbreviation)

    for (let i = 1; i <= dayAbbreviationsList.length; i++) {
      // get the next day class key
      const nextIndex = (startIndex + i) % dayAbbreviationsList.length
      const nextClassDay = dayAbbreviationsList[nextIndex]

      // filter the upcoming courses based on the abbreviation of the next day
      const upcomingCourses =
        courses &&
        courses.filter((course) =>
          course.classTime.includes(dayAbbreviations[nextClassDay])
        )

      if (upcomingCourses && upcomingCourses.length > 0) {
        return (
          <ClassScheduleWrapper>
            <h2>Upcoming classes: </h2>
            <div className="course_meta_wrapper">
              <h4>Code</h4>
              <h4>Name</h4>
              <h4>Sec</h4>
              <h4>Room</h4>
              <h4>Time</h4>
              {upcomingCourses.map((course) => (
                <ScheduledCourses
                  key={`schedule_${course.courseID}`}
                  course={course}
                />
              ))}
            </div>
          </ClassScheduleWrapper>
        )
      }
    }
  }
}
