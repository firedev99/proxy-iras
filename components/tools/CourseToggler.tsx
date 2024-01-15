import Icon from "@/lib/icons"
import { motion } from "framer-motion"

type Props = {
  expand: boolean
}

export default function CourseToggler({ expand }: Props) {
  return (
    <>
      <span>
        <Icon name="fire" />
      </span>
      <span className="tools_label">Make a new timing list</span>
      <span>
        <Icon name="search-insertion" />
      </span>
    </>
  )
}
