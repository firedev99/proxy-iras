import { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  MenuWrapperBtn,
  NavFooter,
  NavHeader,
  NavigationInner,
  NavigationOverlay,
  NavigationWrapper,
} from "./styles"
import {
  AnimatePresence,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { navFooter, navLinks } from "@/lib/dummy/links"
import Link from "next/link"
import Curve from "./Curve"
import { mbv, mfv, mov, msv } from "./variants"
import NavLink from "./NavLink"
import { useClicksOutside } from "@/hooks/useClicksOutside"
import { useRouter } from "next/router"
import LogoutButton from "./Button"

export default function Menu() {
  const [expand, setExpand] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const { scrollY } = useScroll()

  const router = useRouter()
  const active = router.pathname

  // handle clicks and touch outside the menu
  useClicksOutside([modalRef, btnRef], (event) => {
    if (expand && event.target !== btnRef.current) {
      setExpand(false)
    }
  })

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (latest > previous && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const toggleMenu = () => setExpand((prev) => !prev)
  const isActive = (href: string) => href === active

  // hide the scrollbar and other styles when the menu is expanded
  useLayoutEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden"
    } else {
      const timeoutId = setTimeout(() => {
        document.body.style.overflow = "unset"
      }, 1000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [expand])

  // handle navigation on route changes
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
