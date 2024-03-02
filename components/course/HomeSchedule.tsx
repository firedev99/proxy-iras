import { useEffect, useState } from "react"
import { format } from "date-fns"
import { CourseProps } from "@types"
import { dayAbbreviations } from "@/lib/dummy/days"
import {
  ClassScheduleHeader,
  ClassScheduleWrapper,
} from "./styles/HomeCourseScheduleStyles"
import ScheduledCourse from "./ScheduleCourse"

type Props = {
  courses: CourseProps[]
}

export default function HomeSchedule({ courses }: Props) {
  const [courseSchedule, setCourseSchedule] = useState<CourseProps[]>([])
  const [noClassToday, setNoClassToday] = useState<boolean>(false)

  useEffect(() => {
    // get the current date
    const currentDate = new Date()
    const currentDay = currentDate.toLocaleDateString("en", {
      weekday: "short",
    })

    // get the current day abbreviation that matches iub classtimes
    const currentDayAbbreviation = dayAbbreviations[currentDay]

    // get the classes that are today and not yet started or running right now
    const courseForToday = courses.filter(
      (course) =>
        course.classTime.includes(currentDayAbbreviation) &&
        format(new Date(), "HH:mm") < course.classTime.split("-")[1]
    )

    // handle classes for today
    if (courseForToday.length > 0) {
      setCourseSchedule(courseForToday)
    } else {
      setNoClassToday(true)
      // set the upcoming courses that matches the next following day abbreviation
      const dayAbbreviationList = Object.keys(dayAbbreviations)
      const startIdx = dayAbbreviationList.indexOf(currentDay)

      for (let i = 1; i <= dayAbbreviationList.length; i++) {
        // get the next day class key
        const nextIndex = (startIdx + i) % dayAbbreviationList.length
        const nextClassDay = dayAbbreviationList[nextIndex]

        // get the upcoming courses based on the abbreviation of the next day
        const upcomingCourses =
          courses &&
          courses.filter((course) =>
            course.classTime.includes(dayAbbreviations[nextClassDay])
          )

        if (upcomingCourses.length > 0) {
          setCourseSchedule(upcomingCourses)
          // break through the loop if the next class was found
          break
        }
      }
    }
  }, [courses])

  return (
    <ClassScheduleWrapper>
      <ClassScheduleHeader>
        <h2>{noClassToday ? "Upcoming Classes" : "Today's Schedule"}</h2>
      </ClassScheduleHeader>

      <div className="course_meta_wrapper">
        <h4>Course</h4>
        <h4>Name</h4>
        <h4>Sec</h4>
        <h4>Room</h4>
        <h4>Time</h4>
        {courseSchedule.map((course, i) => {
          return (
            <ScheduledCourse
              key={`schedule_${course.courseID}_${i}`}
              course={course}
            />
          )
        })}
      </div>
    </ClassScheduleWrapper>
  )
}
