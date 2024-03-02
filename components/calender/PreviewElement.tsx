import { useState } from "react"
import { classroom_v1 } from "googleapis"
import { useWindowSize } from "@hooks/useWindowSize"
import { AnimatePresence } from "framer-motion"
import { HoveredModalProps } from "@types"
import { AssignmentPreviewWrapper, CalenderHoverModal } from "./styles"

type Props = {
  calenderIdx: number
  course: classroom_v1.Schema$CourseWork
  title?: string | null
  expired: boolean
  modals: HoveredModalProps[]
}

export default function PreviewElement({
  calenderIdx,
  course,
  title,
  modals,
  expired,
}: Props) {
  // width of the total viewport
  const { width } = useWindowSize()

  // hovered modal controls
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null)
  const [hoveredModals, setHoveredModals] =
    useState<HoveredModalProps[]>(modals)

  // handle function when element is hovered for details
  function handleHoverStart(idx: number, e: MouseEvent) {
    if (width < 1280) {
      return
    }

    // close the currently open modal (if there is any)
    if (activeModalIdx !== null) {
      const _modals = [...hoveredModals]
      _modals[activeModalIdx].isOpen = false
      setHoveredModals(_modals)
    }

    const modals = [...hoveredModals]
    const remainingWidth = width - e.clientX

    if (remainingWidth > 350) {
      modals[idx] = { isOpen: true, direction: "right" }
    } else {
      modals[idx] = { isOpen: true, direction: "left" }
    }

    setActiveModalIdx(idx)
    setHoveredModals(modals)
  }

  function handleHoverEnd(idx: number) {
    const modals = [...hoveredModals]
    modals[idx].isOpen = false
    setActiveModalIdx(null)
    setHoveredModals(modals)
  }

  return (
    <AssignmentPreviewWrapper
      style={{
        background: expired
          ? course.dueDate
            ? "rgba(159, 141, 126, 0.7)"
            : "rgba(254, 182, 156, 0.7)"
          : "rgba(87, 136, 135, 0.7)",
      }}
      onHoverStart={(e) => handleHoverStart(calenderIdx, e)}
      onHoverEnd={() => handleHoverEnd(calenderIdx)}
    >
      {title && <span className="work_course_name">{title.split("-")[2]}</span>}
      <div className="ellipsis">
        <span>{course.title}</span>
      </div>

      <AnimatePresence>
        {hoveredModals[calenderIdx].isOpen && (
          <CalenderHoverModal
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              left:
                hoveredModals[calenderIdx].direction === "right"
                  ? "50%"
                  : "unset",
              right:
                hoveredModals[calenderIdx].direction === "left"
                  ? "50%"
                  : "unset",
            }}
          >
            {course.title && <span>{course.title}</span>}
          </CalenderHoverModal>
        )}
      </AnimatePresence>
    </AssignmentPreviewWrapper>
  )
}
