import { ToastProvider } from "@/lib/contexts/toastContext"
import { StudentProvider } from "@/lib/contexts/studentContext"
import { poppins } from "@/lib/font/poppins"
import { GlobalStyles } from "@styles/GlobalStyles"
import { AppPropsWithLayout } from "@types"

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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
      <ToastProvider>
        <StudentProvider>
          <Component {...pageProps} />
        </StudentProvider>
      </ToastProvider>
    </>
  )
}
