import { GlobalStyles } from "@styles/GlobalStyles"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"

// getLayout type declaration
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

// type of the app component
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// connect font from next/font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // handle the component if a layout was used
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      {/* injecting font in the head */}
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily}, "sans-serif";
        }
      `}</style>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
