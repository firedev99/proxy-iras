import { useWindowSize } from "@/hooks/useWindowSize"
import { motion } from "framer-motion"

export default function Curve() {
  const { height } = useWindowSize()

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-110 ${
    height / 2
  } 100 0`
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q110 ${
    height / 2
  } 100 0`

  const curve = {
    initial: {
      d: initialPath,
    },
    animate: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <svg>
      <motion.path
        variants={curve}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.path>
    </svg>
  )
}
