import dynamic from "next/dynamic"
import Head from "next/head"
import { LayoutType } from "@types"
import { RootLayoutWrapper } from "./styles"

const Navigation = dynamic(() => import("../navigation"), { ssr: false })

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
      <Navigation />
      <main>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </main>
    </>
  )
}
