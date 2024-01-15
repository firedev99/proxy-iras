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
  footer = true,
}: LayoutType) {
  return (
    <>
      <Head>
        <title>{title || "Proxy IRAS"}</title>
        <meta
          name="description"
          content={
            description ||
            "Welcome to Proxy IRAS, your comprehensive solution for managing academic tasks seamlessly. This platform is integrated with Independent University, Bangladesh's existing management system along with Google Classroom. Log in with your student ID and password now. - @firedev99"
          }
        />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      <Menu />
      <LayoutWrapper>
        {children}
        {footer && <Footer />}
      </LayoutWrapper>
    </>
  )
}
