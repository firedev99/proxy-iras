import { ReactElement, useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import { classroom_v1 } from "googleapis"
import { AnimatePresence } from "framer-motion"
import { startOfToday, format, parse, add } from "date-fns"
import { days as _days } from "@/lib/dummy/days"
import { useWindowSize } from "@hooks/useWindowSize"
import { Layout } from "@components"
import {
  CalenderElementWrapper,
  CalenderPageWrapper,
} from "@/styles/CalenderStyles"

import dynamic from "next/dynamic"

type Props = {
  courseList: classroom_v1.Schema$Course[]
  courseWork: classroom_v1.Schema$CourseWork[]
}

const CalenderHeader = dynamic(
  () => import("../components/calender/CalenderHeader"),
  {
    ssr: false,
  }
)

const CalenderPreview = dynamic(
  () => import("../components/calender/CalenderPreview"),
  {
    ssr: false,
  }
)

export default function CalenderPage({ courseList, courseWork }: Props) {
  // get today
  let today = startOfToday()

  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, "MMM-yyyy")
  )

  const [days, setDays] = useState<string[]>(_days)

  // get the first day of the current month
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

  // get windows width
  const { width } = useWindowSize()

  useEffect(() => {
    if (typeof window === "undefined") return

    // handle weekdays abbreviations
    if (width < 768) {
      setDays((prev) => prev.map((item) => item.slice(0, 3)))
    }
  }, [width])

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
    const setCookies = (response.headers as any).getSetCookie()
    ctx.res.setHeader("Set-Cookie", setCookies)

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
    redirect: {
      permanent: false,
      destination: "/courses?warn=auth",
    },
    props: {
      courseList: [],
      courseWork: [],
    },
  }
}

CalenderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title="Google Calender - Proxy IRAS, Student Management System"
      footer={false}
    >
      {page}
    </Layout>
  )
}
