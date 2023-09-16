import { upperLinks } from "@/lib/dummy/links"
import Icon from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  NavWrapper,
  SidebarWrapper,
  UpperWrapper,
  BottomWrapper,
  TopElement,
  SideElement,
} from "./styles"

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname)

  return (
    <>
      <NavWrapper>
        <TopElement>
          <Icon name="settings" />
        </TopElement>
      </NavWrapper>
      <SidebarWrapper>
        <UpperWrapper>
          {upperLinks &&
            upperLinks.map((item) => (
              <Link key={`link-${item.href}`} href={item.href}>
                <SideElement
                  data-title={item.context}
                  layout
                  className={active === item.href ? "disable_hover" : ""}
                  onClick={() => setActive(item.href)}
                >
                  {item.href === active && (
                    <motion.div
                      className="active_layout"
                      layoutId="active_layout"
                    />
                  )}
                  <Icon name={item.icon} />
                </SideElement>
              </Link>
            ))}
        </UpperWrapper>

        <BottomWrapper>
          <SideElement
            className="disable_hover bottom"
            whileHover={{ scale: 1.07, cursor: "pointer" }}
            whileTap={{ scale: 0.96 }}
          >
            <Image
              src="https://res.cloudinary.com/firey/image/upload/v1694607132/iub/male_9.jpg"
              alt="cloudinary"
              width={48}
              height={48}
              priority={true}
              quality={100}
            />
          </SideElement>
        </BottomWrapper>
      </SidebarWrapper>
    </>
  )
}
