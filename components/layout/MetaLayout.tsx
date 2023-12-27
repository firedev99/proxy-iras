import Head from "next/head"
import styled from "styled-components"
import { LayoutType } from "@types"

export const MetaLayoutWrapper = styled.div`
  height: 100vh;
  height: 100svh;

  @media only screen and (max-width: 768px) {
    margin: 0 1.4rem;
  }

  @media only sceen and (max-width: 415px) {
    margin: 0 1rem;
  }
`

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
