import { Variants } from "framer-motion"

export const fmv: Variants = {
  initial: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  animate: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
    transition: {
      duration: 0.1,
    },
  },

  exit: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.85)",
    transition: {
      duration: 0.1,
    },
  },
}

export const fmo: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
}
