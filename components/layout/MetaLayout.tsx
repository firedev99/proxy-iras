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
            "This app was developed to help out all my fellow IUBians 🤙🏼 If someone from my uni authority likes it, please buy it from me🥹"
          }
        />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      <main>
        <MetaLayoutWrapper>{children}</MetaLayoutWrapper>
      </main>
    </>
  )
}
