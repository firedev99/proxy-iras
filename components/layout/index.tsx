import { LayoutType } from "@/types"
import Head from "next/head"
import dynamic from "next/dynamic"
import Footer from "../footer"
import { LayoutWrapper } from "./styles"

const Menu = dynamic(() => import("../menu"), { ssr: false })

export default function Layout({
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
            "Welcome to Proxy IRAS, your comprehensive solution for managing academic tasks seamlessly. Designed with the modern student environment in mind, our platform offers a simplified yet powerful alternative to the traditional university management system. Recognizing the growing importance of digital learning platforms, we've bridged the gap between our university's curriculum and Google Classroom. By integrating Google Classroom's API into our platform, we've enabled seamless access to course materials, assignments, and personalinsights—all within an unified interface. A student who is looking to stay organized, aiming to enhance the learning experience, or seeking efficient management tools, Proxy IRAS is here to simplify your academic journey."
          }
        />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      <Menu />
      <LayoutWrapper>
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}
