import { motion } from "framer-motion"
import {
  CalenderControlsLeft,
  CalenderControlsRight,
  CalenderControlsWrapper,
  CalenderIndicator,
} from "./styles"
import { format } from "date-fns"
import Icon from "@/lib/icons"
import { workIndicators } from "@/lib/dummy/worksIndicators"
import { classroom_v1 } from "googleapis"

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
      <CalenderControlsLeft>
        <h2>{format(firstDayCurrentMonth, "MMM, yyyy")}</h2>
        <div className="control_wrappers">
          <div className="prev_button" data-title="Previous month">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.07 }}
              initial={{ rotate: -180 }}
              onClick={previousMonth}
            >
              <Icon name="right-arrow" />
            </motion.button>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.07 }}
            onClick={nextMonth}
            data-title="Next month"
          >
            <Icon name="right-arrow" />
          </motion.button>
        </div>
      </CalenderControlsLeft>

      {/* Indicator Details */}
      <CalenderControlsRight>
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
      </CalenderControlsRight>
    </CalenderControlsWrapper>
  )
}
