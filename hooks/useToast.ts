import { useContext } from "react"
import { ToastContext } from "@/lib/contexts/toastContext"

export function useToast() {
  const toastServices = useContext(ToastContext)
  return toastServices
}
