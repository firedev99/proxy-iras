import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { useBodyLocked } from "@hooks/useBodyLocked"
import { useClicksOutside } from "@hooks/useClicksOutside"
import { mbv, mfv, mov, msv } from "./variants"
import { navFooter, navLinks } from "@/lib/dummy/links"
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import {
  MenuWrapperBtn,
  NavFooter,
  NavHeader,
  NavigationInner,
  NavigationOverlay,
  NavigationWrapper,
} from "./styles"
import Link from "next/link"
import Curve from "./Curve"
import LogoutButton from "./Button"
import NavLink from "./NavLink"

export default function Menu() {
  const [expand, setExpand] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(false)

  const modalRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const router = useRouter()
  const active = router.pathname

  const { scrollY } = useScroll()

  // handle clicks and touch outside the menu
  useClicksOutside([modalRef, btnRef], (event) => {
    if (expand && event.target !== btnRef.current) {
      setExpand(false)
    }
  })

  // show menu based on scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (latest > previous && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // toggle menu handler
  const toggleMenu = () => setExpand((prev) => !prev)

  // check if the nav link is active
  const isActive = (href: string) => href === active

  // hide the scrollbar when the menu gets expanded
  useBodyLocked(expand)

  // handle modal on route changes
  useEffect(() => {
    const handler = () => setExpand(false)
    router.events.on("routeChangeStart", handler)

    return () => {
      router.events.off("routeChangeStart", handler)
    }
  }, [router])

  return (
    <>
      <MenuWrapperBtn
        ref={btnRef}
        variants={mbv}
        animate={hidden ? "animate" : "initial"}
        $expand={expand}
        onClick={toggleMenu}
      >
        <span className="stroke" />
      </MenuWrapperBtn>
      <AnimatePresence>
        {expand && (
          <NavigationWrapper>
            <NavigationInner
              ref={modalRef}
              variants={msv}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NavHeader
                variants={mfv}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p>Navigation</p>
              </NavHeader>
              {navLinks.map((data, i) => (
                <NavLink
                  key={`link_${i}`}
                  index={i}
                  isActive={isActive(data.href)}
                  href={data.href}
                  title={data.title}
                />
              ))}
              <NavFooter
                variants={mfv}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <LogoutButton />
                <ul>
                  {navFooter.map((data, i) => (
                    <Link
                      key={`footer_link_${i}`}
                      href={data.href}
                      target={data.blank ? `_blank` : undefined}
                      rel={data.blank ? `noreferrer` : undefined}
                    >
                      {data.title}
                    </Link>
                  ))}
                </ul>
              </NavFooter>
              <Curve />
            </NavigationInner>
            <NavigationOverlay
              variants={mov}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </NavigationWrapper>
        )}
      </AnimatePresence>
    </>
  )
}
