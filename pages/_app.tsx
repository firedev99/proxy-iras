import { josefin_sans, noto_sans_display } from "@/lib/fonts"
import { ToastProvider } from "@/lib/contexts/toastContext"
import { StudentProvider } from "@/lib/contexts/studentContext"
import { GlobalStyles } from "@styles/GlobalStyles"
import { AppPropsWithLayout } from "@types"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { LaunchingTemplate } from "@/components"

export default function App({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      {/* injecting font in the head */}
      <style jsx global>{`
        html {
          --font-display: ${noto_sans_display.style.fontFamily};
          --font-josefin: ${josefin_sans.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <GlobalStyles />
      <NextNProgress height={4} options={{ showSpinner: false }} />
      <ToastProvider>
        <StudentProvider>
          <LaunchingTemplate
            className="announcement"
            title="This app fetches data from iub's existing system. Seems like they have turned off their main server which is IRAS Version 2. They might be facing some internal issues or smth else, just wait for some moments it will get fixed automatically and also thanks to everyone, this app was used by 1200+ students in just 2 days 🤧
          "
          />
          {/* <Component {...pageProps} key={router.asPath} /> */}
        </StudentProvider>
      </ToastProvider>
    </>
  )
}
