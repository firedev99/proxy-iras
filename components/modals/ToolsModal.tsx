import { AnimatePresence } from "framer-motion"
import { ReactNode, forwardRef, useState } from "react"
import { fmo, fmv } from "./variants"
import {
  PopupModalOverlay,
  ToolsModalHeader,
  ToolsModalInner,
  ToolsModalWrapper,
  ToolsStudentInformation,
  RoutinePreviewGrid,
  ToolsRightPortion,
  ToolsLeftPortion,
} from "./styles"
import Icon from "@/lib/icons"
import { useStudent } from "@/hooks/useStudent"
import RoutineNextPage from "./RoutineNextPage"
import CalculatorNextPage from "./CalculatorNextPage"

type Props = {
  children?: ReactNode
  open: boolean
  type: "routine" | "calculator"
  handler: () => void
}

const ToolsModal = forwardRef<HTMLDivElement, Props>(
  ({ children, open, type, handler }, ref) => {
    const [nextTab, setNextTab] = useState<boolean>(false)

    // student context
    const { student } = useStudent()

    // handle next tab toggle
    const toggleNextTab = () => setNextTab(!nextTab)

    // find credit status based on group
    function creditStatus(group: string) {
      return (
        student?.creditStatus.find(
          (status) => status.courseGroupName === group
        ) || { doneCredit: 0, minRequirement: 0 }
      )
    }

    // apply this along w delete routine functionality
    function handleNextPageSelection() {
      handler()
      setNextTab(false)
    }

    if (!student) return <div />

    return (
      <AnimatePresence>
        {open && (
          <>
            <PopupModalOverlay
              variants={fmo}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            <ToolsModalWrapper
              ref={ref}
              variants={fmv}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AnimatePresence>
                <ToolsModalInner
                  initial={{ left: "0%" }}
                  animate={{
                    left: nextTab ? "-100%" : "0%",
                  }}
                >
                  {/* initial tab - start */}
                  <ToolsLeftPortion>
                    {/* student information - start */}
                    <ToolsStudentInformation>
                      <ToolsModalHeader>
                        {type === "routine" && (
                          <RoutinePreviewGrid onClick={toggleNextTab}>
                            {[
                              ...Array.from({ length: 5 }).map((_, i) => (
                                <div
                                  key={`grid_privew_${i}`}
                                  className={`grid_${i + 1}`}
                                />
                              )),
                            ]}
                          </RoutinePreviewGrid>
                        )}
                        <button className="close_control" onClick={handler}>
                          <Icon name="cross-icon" />
                        </button>
                      </ToolsModalHeader>
                      <h4>{student.studentName} 👋</h4>
                      <span>Credit: {student.creditEarned}</span>
                      <span>
                        Foundation:{" "}
                        {creditStatus("Foundation Courses")?.doneCredit} /{" "}
                        {creditStatus("Foundation Courses")?.minRequirement}
                      </span>
                      <span>
                        {`Core: ${creditStatus("Core Courses")?.doneCredit} / ${
                          creditStatus("Core Courses")?.minRequirement
                        }, Major: ${
                          creditStatus(
                            "Major/Concentration/Departmental Requirement"
                          )?.doneCredit
                        } / ${
                          creditStatus(
                            "Major/Concentration/Departmental Requirement"
                          )?.minRequirement
                        }`}
                        ,
                        {creditStatus("Minor") &&
                          ` Minor: ${creditStatus("Minor")?.doneCredit} / ${
                            creditStatus("Minor")?.minRequirement
                          }`}
                      </span>
                      <span>
                        {`Internship: ${
                          creditStatus("Internship/Sr, Project/Study Abroad")
                            ?.doneCredit
                        } / ${
                          creditStatus("Internship/Sr, Project/Study Abroad")
                            ?.minRequirement
                        }`}
                      </span>
                    </ToolsStudentInformation>
                    {/* student information - end */}

                    {children && children}
                  </ToolsLeftPortion>
                  {/* initial tab - end */}

                  {/* next tab - start */}
                  <ToolsRightPortion>
                    <button className="back_btn" onClick={toggleNextTab}>
                      <Icon name="left-arrow" />
                    </button>
                    {type === "routine" && (
                      <RoutineNextPage
                        handleNextPageSelection={handleNextPageSelection}
                      />
                    )}
                    {type === "calculator" && <CalculatorNextPage />}
                  </ToolsRightPortion>
                  {/* next tab - end */}
                </ToolsModalInner>
              </AnimatePresence>
            </ToolsModalWrapper>
          </>
        )}
      </AnimatePresence>
    )
  }
)

ToolsModal.displayName = `ForwardedToolModal`

export default ToolsModal
