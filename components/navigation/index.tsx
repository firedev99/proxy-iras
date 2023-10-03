import { upperLinks } from "@/lib/dummy/links"
import Icon from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import {
  NavWrapper,
  SidebarWrapper,
  UpperWrapper,
  BottomWrapper,
  TopElement,
  SideElement,
  ProfileMenu,
  SideElementWrapper,
} from "./styles"
import { firey } from "@/lib/utils"

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let student = JSON.parse(localStorage.getItem("student-info") as string)

      // get previously saved picture for profile icon
      let previouslySavedPicture = localStorage.getItem(
        `saved-${student.studentID}-picture` as string
      )

      // set the img src in state
      setImgSrc(previouslySavedPicture)
    }
  }, [])

  // if the router was not triggered by clicking the nav menu
  useEffect(() => {
    if (active !== router.pathname) {
      setActive(router.pathname)
    }
  }, [active, router.pathname])

  return (
    <>
      {/* Upper Portion */}
      <NavWrapper>
        <TopElement>
          <Icon name="settings" />
        </TopElement>
      </NavWrapper>
      {/* Side and Lower Portion */}
      <SidebarWrapper>
        {/* Sidebar Top Portion Navigations */}
        <UpperWrapper>
          {upperLinks &&
            upperLinks.map((item) => (
              <SideElementWrapper
                data-title={item.context}
                key={`link-${item.href}`}
                className={active === item.href ? "disable_hover" : ""}
              >
                <Link href={item.href}>
                  <SideElement layout onClick={() => setActive(item.href)}>
                    {item.href === active && (
                      <motion.div
                        className="active_layout"
                        layoutId="active_layout"
                      />
                    )}
                    <Icon name={item.icon} />
                  </SideElement>
                </Link>
              </SideElementWrapper>
            ))}
          {/* Bottom Profile Menu Tab */}
          <motion.button
            className="smaller_profile"
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(!open)}
          >
            {imgSrc && (
              <Image
                src={imgSrc}
                alt="cloudinary"
                width={48}
                height={48}
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL={firey.rgbDataURL(177, 144, 182)}
              />
            )}
          </motion.button>
          {/* Modal */}
          <AnimatePresence>
            {open && (
              <ProfileMenu
                className="smaller_modal"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{
                  opacity: {
                    duration: 0.2,
                  },
                  y: {
                    duration: 0.05,
                  },
                }}
              >
                <button onClick={() => {}}>
                  <Icon name="logout" />
                  <span>Signout</span>
                </button>
                <button onClick={() => {}}>
                  <Icon name="user" />
                  <span>View Profile</span>
                </button>
                <div className="theme_settings">
                  <Icon name="logout" />
                  <span>Signout</span>
                </div>
              </ProfileMenu>
            )}
          </AnimatePresence>
        </UpperWrapper>

        <BottomWrapper>
          <SideElement
            className="disable_hover bottom"
            whileHover={{ scale: 1.07, cursor: "pointer" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(!open)}
          >
            {imgSrc && (
              <Image
                src={imgSrc}
                alt="cloudinary"
                width={48}
                height={48}
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL={firey.rgbDataURL(177, 144, 182)}
              />
            )}
          </SideElement>
          <AnimatePresence>
            {open && (
              <ProfileMenu
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{
                  opacity: {
                    duration: 0.2,
                  },
                  y: {
                    duration: 0.05,
                  },
                }}
              >
                <button>
                  <Icon name="logout" />
                  <span>Signout</span>
                </button>
              </ProfileMenu>
            )}
          </AnimatePresence>
        </BottomWrapper>
      </SidebarWrapper>
    </>
  )
}
