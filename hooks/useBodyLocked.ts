import { useEffect } from "react"

export function useBodyLocked(expand: boolean): void {
  useEffect(() => {
    if (typeof window === "undefined" || !expand) return
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth

    if (expand) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollBarCompensation}px`
      document.body.dataset.scrollLock = "true"
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
      delete document.body.dataset.scrollLock
    }
  }, [expand])
}
