import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { useToast } from "@hooks/useToast"
import { ToastWrapper } from "./styles"
import { ToastStateProps } from "@types"

export function Toast({ notifications }: ToastStateProps) {
  const { removeToast } = useToast()

  useEffect(() => {
    // remove each notification on an interval of 1.5s
    const intervalID: NodeJS.Timeout = setInterval(() => {
      if (notifications.length) {
        removeToast(notifications[0].id)
      }
    }, 2000)
    return () => {
      clearInterval(intervalID)
    }
  }, [notifications, removeToast])

  return (
    <AnimatePresence>
      <ToastWrapper
        initial={{ opacity: 0, y: -200, x: "-50%" }}
        animate={{ opacity: 1, y: 15 }}
        exit={{ opacity: 0, y: 200 }}
      >
        {notifications[0].content}
      </ToastWrapper>
    </AnimatePresence>
  )
}
