import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { useToast } from "@hooks/useToast"
import { ToastWrapper } from "./styles"
import { ToastStateProps } from "@types"

export function Toast({ notifications }: ToastStateProps) {
  const { removeToast } = useToast()

  useEffect(() => {
    // remove each notification on an interval of 1.5s
    const intervalID: NodeJS.Timer = setInterval(() => {
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
      {notifications.map((item) => (
        <ToastWrapper
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 250 }}
          layout
          key={item.id}
        >
          {item.content}
        </ToastWrapper>
      ))}
    </AnimatePresence>
  )
}
