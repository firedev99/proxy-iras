import Head from "next/head"
import { RootLayoutWrapper } from "./styles"
import { LayoutType } from "@types"
import dynamic from "next/dynamic"

const Navigation = dynamic(() => import("../navigation"))
const RouteLoader = dynamic(() => import("../loaders/RouteLoader"))

export default function RootLayout({
  children,
  title,
  description,
  icon,
  nav,
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
      <RouteLoader />
      {nav && <Navigation />}
      <main>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </main>
    </>
  )
}
