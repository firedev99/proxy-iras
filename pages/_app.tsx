import { ToastProvider } from "@/lib/contexts/toastContext"
import { StudentProvider } from "@/lib/contexts/studentContext"
import { GlobalStyles } from "@styles/GlobalStyles"
import { AppPropsWithLayout } from "@types"
import { Noto_Sans_Display, Noto_Sans_Mono } from "next/font/google"

const noto_sans_display = Noto_Sans_Display({
  subsets: ["latin"],
})
const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      {/* injecting font in the head */}
      <style jsx global>{`
        html {
          --font-mono: ${noto_sans_mono.style.fontFamily};
          --font-display: ${noto_sans_display.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      <ToastProvider>
        <StudentProvider>
          <Component {...pageProps} />
        </StudentProvider>
      </ToastProvider>
    </>
  )
}
