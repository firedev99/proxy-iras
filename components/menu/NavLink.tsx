import { useState } from "react"
import { LinkWrapper } from "./styles"
import { miv, mlv } from "./variants"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

type Props = {
  title: string
  href: string
  index: number
  isActive: boolean
}

export default function NavLink({ title, href, index, isActive }: Props) {
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <>
      <LinkWrapper
        variants={mlv}
        custom={index}
        initial="initial"
        animate="animate"
        exit="exit"
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => setHovered(false)}
      >
        <Link href={href}>{title}</Link>
        <AnimatePresence>
          {(hovered || isActive) && (
            <motion.span
              variants={miv}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ y: "-22%" }}
            />
          )}
        </AnimatePresence>
      </LinkWrapper>
    </>
  )
}
