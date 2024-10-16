import { josefin_sans, noto_sans_display } from "@/lib/fonts"
import { ToastProvider } from "@/lib/contexts/toastContext"
import { StudentProvider } from "@/lib/contexts/studentContext"
import { GlobalStyles } from "@styles/GlobalStyles"
import { AppPropsWithLayout } from "@types"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import LaunchingSoon from "@/components/template/LaunchingSoon"

const queryClient = new QueryClient()

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

      <QueryClientProvider client={queryClient}>
        {/* <LaunchingSoon /> */}
        <ToastProvider>
          <StudentProvider>
            <Component {...pageProps} key={router.asPath} />
          </StudentProvider>
        </ToastProvider>
      </QueryClientProvider>
    </>
  )
}
