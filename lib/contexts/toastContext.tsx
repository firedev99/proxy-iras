import { createContext, useState } from "react"
import { ToastContainer } from "@components"
import { firey } from "../utils"
import { ToastContextType, ToastProviderType, ToastStateValues } from "@types"

export const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
  removeToast: () => {},
})

export function ToastProvider({ children }: ToastProviderType) {
  const [toasts, setToasts] = useState<ToastStateValues[]>([])

  function addToast(content: string) {
    // // only allow 3 notifications at a time
    // if (toasts.length >= 3) return
    setToasts((toasts) => [...toasts, { id: firey.uniqueID(), content }])
  }

  function removeToast(id: string) {
    setToasts((toasts) => toasts.filter((item) => item.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}
