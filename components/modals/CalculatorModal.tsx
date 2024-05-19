import { Dispatch, SetStateAction, useRef, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { useBodyLocked } from "@hooks/useBodyLocked"
import { useClickOutside } from "@hooks/useClickOutside"
import {
  CalculatorCourseProps,
  CalculatorResultProps,
  CourseOffering,
} from "@types"
import { CalculatorCourse, ToolsModal } from "@components"
import {
  CalculatorCGPAWrapper,
  CalculatorModalWrapper,
  CalculatorOptions,
  CalculatorResultWrapper,
  CalculatorSelectOptions,
  CalculatorSelectedDetails,
} from "./styles/CalculatorModalStyles"
import { initialValue } from "@/lib/dummy/calculator"
import Icon from "@/lib/icons"

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  courses: CourseOffering[]
  currentSemester: CalculatorCourseProps[]
}

export default function CalculatorModal({
  open,
  setOpen,
  courses,
  currentSemester,
}: Props) {
  const [calculatorCourses, setCalculatorCourses] = useState<
    CalculatorCourseProps[]
  >([...currentSemester])
  const [result, setResult] = useState<CalculatorResultProps | null>(null)

  // hide the scroll bar when modal gets opened
  useBodyLocked(open)

  // toggle modal
  const toggleModal = () => setOpen(false)

  // toggle result modal
  const toggleResultModal = () => setResult(null)

  // handle click outside of the modal
  const calculatorModalRef = useRef<HTMLDivElement>(null)
  useClickOutside(calculatorModalRef, () => toggleModal())

  // create a new array containing unique courses based on name
  const modifiedCourses = Object.values(
    courses.reduce(
      (acc: { [key: string]: (typeof courses)[number] }, current) => {
        // use the courseName as the key for uniqueness
        acc[current.courseName] = current
        return acc
      },
      {}
    )
  )

  // handle current semester
  const handleCurrentSemester = () => {
    setCalculatorCourses([...currentSemester])
  }

  // handle add rows feature
  const handleAddRow = () =>
    setCalculatorCourses((prev) => [
      ...prev,
      { name: "", credit: 0, gp: 0, grade: "" },
    ])

  // handle calculator reset
  const handleCalculatorReset = () => {
    setCalculatorCourses([...initialValue])
    setResult(null)
  }

  // handle calculator calculation
  const handleCalculation = () => {
    // convert credit to 0 is grade is
    calculatorCourses.forEach((course) => {
      if (course.grade.length === 0) {
        course.credit = 0
      }
    })

    const selectedCoursesResult = calculatorCourses.reduce(
      (acc: { [key: string]: number }, course) => {
        for (const key in course) {
          if (typeof course[key as keyof CalculatorCourseProps] === "number") {
            acc[key] =
              (acc[key] || 0) +
              Number(course[key as keyof CalculatorCourseProps])
          }
        }
        return acc
      },
      {}
    )

    const gp = Number(selectedCoursesResult.gp.toFixed(2))
    const credits = Number(selectedCoursesResult.credit)

    const expectedCgpa = (gp / credits).toFixed(2)

    setResult({
      credits,
      gp,
      cgpa: isNaN(Number(expectedCgpa)) ? 0 : Number(expectedCgpa),
    })
  }

  return (
    <ToolsModal
      type="calculator"
      open={open}
      ref={calculatorModalRef}
      handler={toggleModal}
    >
      <CalculatorModalWrapper>
        <h2>Proxy-IRAS Calculator ✨</h2>

        {calculatorCourses.length > 0 && (
          <div className="calculator_courge_tags">
            <span>Name</span>
            <span>Credit</span>
            <span>Grade</span>
          </div>
        )}

        <CalculatorSelectOptions>
          {calculatorCourses.map((course, i) => (
            <CalculatorCourse
              key={`calulator_course_${i}`}
              selectedCourse={course}
              courses={modifiedCourses}
              index={i}
              setCalculatorCourses={setCalculatorCourses}
            />
          ))}
        </CalculatorSelectOptions>

        <CalculatorOptions>
          <div className="calculator_bottom_control">
            <div className="lower_btns_wrapper">
              <button
                className="lower_btn first_btn_bottom"
                onClick={handleCurrentSemester}
              >
                This Semester
              </button>
              <button className="lower_btn" onClick={handleAddRow}>
                <Icon name="add-icon" />
                <span>Add Course</span>
              </button>
            </div>
            <div className="lower_btns_wrapper">
              <button className="lower_btn" onClick={handleCalculatorReset}>
                <Icon name="reset-icon" />
                <span>Reset</span>
              </button>
              <button
                className="lower_btn calculator"
                onClick={handleCalculation}
              >
                <Icon name="calculator-icon" />
                <span>Calculate</span>
              </button>
            </div>
          </div>
        </CalculatorOptions>
        <AnimatePresence>
          {result && (
            <CalculatorResultWrapper
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CalculatorCGPAWrapper>
                <h3>Resultant Cumulative GPA</h3>
                <h2>{result.cgpa}</h2>
              </CalculatorCGPAWrapper>
              <CalculatorSelectedDetails>
                <div className="status_credit">
                  <h5>Total Credits</h5>
                  <h4>{result.credits}</h4>
                </div>
                <div className="status_gp">
                  <h5>Total Grade Points</h5>
                  <h4>{result.gp}</h4>
                </div>
              </CalculatorSelectedDetails>
              <button className="close_result" onClick={toggleResultModal}>
                <Icon name="cross-icon" />
              </button>
            </CalculatorResultWrapper>
          )}
        </AnimatePresence>
      </CalculatorModalWrapper>
    </ToolsModal>
  )
}
