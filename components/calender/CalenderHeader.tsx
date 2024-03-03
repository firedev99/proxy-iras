import { motion } from "framer-motion"
import { classroom_v1 } from "googleapis"
import { format } from "date-fns"
import { workIndicators } from "@/lib/dummy/worksIndicators"
import {
  CalenderControlsWrapper,
  CalenderIndicator,
  CalenderIndicators,
  CalenderMainControls,
} from "./styles"
import Icon from "@/lib/icons"

type Props = {
  firstDayCurrentMonth: Date
  previousMonth: () => void
  nextMonth: () => void
  courseWork: classroom_v1.Schema$CourseWork[]
}

export default function CalenderHeader({
  firstDayCurrentMonth,
  previousMonth,
  nextMonth,
  courseWork,
}: Props) {
  return (
    <CalenderControlsWrapper>
      {/* Indicator Details */}
      <CalenderIndicators>
        {workIndicators.map((indicator, idx) => (
          <CalenderIndicator key={`indicator_color_${idx}`}>
            <div
              className="work_indicator_bg"
              style={{ background: indicator.color }}
            />
            <span>{indicator.indicates}</span>
          </CalenderIndicator>
        ))}
        {courseWork.length === 0 && <h2>No assignment are due 🍻</h2>}
      </CalenderIndicators>

      {/* calender controls */}
      <CalenderMainControls>
        <h2>{format(firstDayCurrentMonth, "MMM, yyyy")}</h2>
        <div className="control_wrappers">
          <div className="prev_button">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.07 }}
              initial={{ rotate: -180 }}
              onClick={previousMonth}
            >
              <Icon name="right-arrow" />
            </motion.button>
          </div>

          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.07 }}
              onClick={nextMonth}
            >
              <Icon name="right-arrow" />
            </motion.button>
          </div>
        </div>
      </CalenderMainControls>
    </CalenderControlsWrapper>
  )
}
