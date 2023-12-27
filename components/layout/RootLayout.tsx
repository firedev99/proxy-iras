import dynamic from "next/dynamic"
import Head from "next/head"
import { ReactNode } from "react"
import styled from "styled-components"

const Navigation = dynamic(() => import("../navigation"), { ssr: false })

type LayoutType = {
  children: ReactNode
  title?: string
  description?: string
  icon?: string
}

export const RootLayoutWrapper = styled.div`
  margin: 0 2rem 0 6rem;
  height: 100vh;
  height: 100svh;

  @media only screen and (max-width: 768px), (max-height: 600px) {
    height: calc(100vh - 4.2rem); //fallback
    height: calc(100svh - 4.2rem);
    margin: 0 1.2rem;
  }

  @media only sceen and (max-width: 415px) {
    margin: 0 1rem;
  }
`

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
