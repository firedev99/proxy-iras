import Head from "next/head"
import { LayoutType } from "@types"
import dynamic from "next/dynamic"
import { AnimatePresence, Variants, motion } from "framer-motion"

// const Navigation = dynamic(() => import("../navigation"), { ssr: false })
const LaunchingSoon = dynamic(() => import("../template/LaunchingSoon"), {
  ssr: false,
})

let variants: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
    },
  },
}

export default function RootLayout({
  children,
  title,
  description,
  icon,
}: LayoutType) {
  return (
    <>
      <Head>
        <title>{title || "Proxy IRAS"}</title>
        <meta
          name="description"
          content={
            description ||
            "This app was developed to help out all my fellow IUBians 🤙🏼 If someone from my uni authority likes it, please buy it from me🥹"
          }
        />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      {/* <RouteLoader /> */}
      {/* {nav && <Navigation />}
      {working && <LaunchingSoon />} */}
      <AnimatePresence mode="wait">
        {/* <motion.main
          key={router.pathname}
          variants={variants}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.2,
          }}
        > */}
        <main>{/* <RootLayoutWrapper>{children}</RootLayoutWrapper> */}</main>
      </AnimatePresence>
    </>
  )
}
