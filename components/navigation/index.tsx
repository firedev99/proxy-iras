import { upperLinks } from "@/lib/dummy/links"
import Icon from "@/lib/icons"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { firey } from "@/lib/utils"
import {
  BottomWrapper,
  ProfileMenu,
  SideElement,
  SideElementWrapper,
  NavbarWrapper,
  TopRightNav,
  UpperWrapper,
} from "./styles"

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  async function handleSingout(): Promise<void> {
    try {
      await Promise.allSettled([
        fetch(`api/google/logout`, {
          method: "DELETE",
        }),
        fetch(`api/iub/logout`, {
          method: "DELETE",
        }),
      ]).then(() => {
        setOpen(false)
        router.reload()
      })
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.log(err)
      }
    }
  }

  // get previously saved picture for profile icon
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let student = JSON.parse(localStorage.getItem("student-info") as string)

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
      {/* settings */}
      <TopRightNav>
        <Icon name="settings" />
      </TopRightNav>

      {/* sidebar */}
      <NavbarWrapper>
        {/* top portion */}
        <UpperWrapper>
          {upperLinks.map((item) => (
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
        </UpperWrapper>

        {/* bottom portion */}
        <BottomWrapper>
          <motion.button
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
          <AnimatePresence>
            {open && (
              <ProfileMenu
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{
                  opacity: {
                    duration: 0.2,
                  },
                }}
              >
                <button onClick={() => handleSingout()}>
                  <Icon name="logout" />
                  <span>Signout</span>
                </button>
                <button className="only_small" onClick={() => {}}>
                  <Icon name="user" />
                  <span>View Profile</span>
                </button>
                <div className="theme_settings only_small">
                  <Icon name="logout" />
                  <span>Theme</span>
                </div>
              </ProfileMenu>
            )}
          </AnimatePresence>
        </BottomWrapper>
      </NavbarWrapper>
    </>
  )
}
