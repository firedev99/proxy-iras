import { days } from "@/lib/dummy/days"
import { Layout } from "@components"
import { startOfToday, format, parse, add } from "date-fns"
import { ReactElement, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { GetServerSideProps } from "next"
import { classroom_v1 } from "googleapis"
import {
  CalenderElementWrapper,
  CalenderPageWrapper,
} from "@/styles/CalenderStyles"
import CalenderHeader from "@/components/calender/CalenderHeader"
import CalenderPreview from "@/components/calender/CalenderPreview"

type Props = {
  courseList: classroom_v1.Schema$Course[]
  courseWork: classroom_v1.Schema$CourseWork[]
}

export default function CalenderPage({ courseList, courseWork }: Props) {
  let today = startOfToday()

  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, "MMM-yyyy")
  )

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())

  const [direction, setDirection] = useState<number>(0)

  // get the previous month dates
  function previousMonth(): void {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    setDirection(-1)
  }

  // get the next month dates
  function nextMonth(): void {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    setDirection(1)
  }

  return (
    <CalenderPageWrapper>
      {/* Calender Controls */}
      <CalenderHeader
        firstDayCurrentMonth={firstDayCurrentMonth}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        courseWork={courseWork}
      />

      {/* Calender Dates */}
      <AnimatePresence key={currentMonth}>
        <CalenderElementWrapper
          initial={{ x: direction > 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: direction < 0 ? "50%" : "-50%", opacity: 0 }}
        >
          {/* weekdays name */}
          {days.map((d, idx) => (
            <div className="day_title" key={`dt-${idx}`}>
              <h3>{d}</h3>
            </div>
          ))}

          {/* current preview dates  */}
          <CalenderPreview
            firstDayCurrentMonth={firstDayCurrentMonth}
            courseList={courseList}
            courseWork={courseWork}
          />
        </CalenderElementWrapper>
      </AnimatePresence>
    </CalenderPageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["g-token"]
  const refreshToken = ctx.req.cookies["r-token"]

  // fetch google classroom courses
  if (token || refreshToken) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/classroom/courses/hybrid`,
      {
        headers: {
          // send the cookies that are already stored
          Cookie: ctx.req.headers.cookie as string,
        },
      }
    )

    // sent the cookie along w the header that needs to be stored
    const cookies = response.headers.getSetCookie()
    ctx.res.setHeader("Set-Cookie", cookies)

    // sent the course list and course works to client
    if (response.ok) {
      const data = await response.json()

      return {
        props: {
          courseList: data.courseList,
          courseWork: data.courseWork,
        },
      }
    }
  }

  // sent the default values
  return {
    props: {
      courseList: [],
      courseWork: [],
    },
  }
}

CalenderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout nav={true} title="Calender | Proxy IRAS">
      {page}
    </Layout>
  )
}
