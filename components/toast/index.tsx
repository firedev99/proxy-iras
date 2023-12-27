import { ReactPortal } from "react"
import { createPortal } from "react-dom"
import { Toast } from "./Component"
import { ToastContainerType } from "@types"

// create a new virtual DOM on the document body so that it doesn't clash with the actual DOM of the app itself
export default function ToastContainer({ toasts }: ToastContainerType) {
  if (typeof window === "object" && toasts.length !== 0) {
    return createPortal(
      <Toast notifications={toasts} />,
      document.body
    ) as ReactPortal
  }

  return null
}
