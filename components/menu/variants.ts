import { Variants } from "framer-motion"

export const mbv: Variants = {
  initial: { y: 0, transition: { duration: 0.35, ease: "easeInOut" } },
  animate: { y: "-100%", transition: { duration: 0.35, ease: "easeInOut" } },
}

export const msv: Variants = {
  initial: {
    x: "calc(100% + 100px)",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

export const mlv: Variants = {
  initial: {
    opacity: 0,
    x: 120,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
}

export const mfv: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
}

export const mov: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
}

export const miv: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
}
