import Head from "next/head"
import { LayoutType } from "@types"
import { MetaLayoutWrapper } from "./styles"

export default function MetaLayout({
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
            "Welcome to Proxy IRAS, your comprehensive solution for managing academic tasks seamlessly. This platform is integrated with Independent University, Bangladesh's existing management system along with Google Classroom. Log in with your student ID and password now. - @firedev99"
          }
        />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      <MetaLayoutWrapper>{children}</MetaLayoutWrapper>
    </>
  )
}
