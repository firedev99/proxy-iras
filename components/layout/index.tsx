import Head from "next/head"
import { ReactNode } from "react"
import { RootLayoutWrapper } from "./styles"

// types of layout component
type LayoutComponentProps = {
  children: ReactNode
  title?: string
  description?: string
  icon?: string
}

export default function RootLayout({
  children,
  title,
  description,
  icon,
}: LayoutComponentProps) {
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
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </main>
    </>
  )
}
