import { useEffect, useState } from "react"

export type UseScriptStatus = "idle" | "loading" | "ready" | "error"

export interface UseScriptOptions {
  shouldPreventLoad?: boolean
  removeOnMount?: boolean
  referrerPolicy?: string
}

// // cached script statuses Record<Keys, Type>
const cachedScriptStatuses: Record<string, UseScriptStatus> = {}

// get the script tag as node
function getSriptNode(src: string) {
  const node: HTMLScriptElement | null = document.querySelector(
    `script[src="${src}"]`
  )
  const status = node?.getAttribute("data-status") as
    | UseScriptStatus
    | undefined

  return { node, status }
}

export function useScript(src: string | null, options?: UseScriptOptions) {
  const [status, setStatus] = useState(() => {
    if (!src || options?.shouldPreventLoad) {
      return "idle"
    }

    if (typeof window === "undefined") {
      return "loading"
    }

    // setting the initial status as "loading"
    return cachedScriptStatuses[src] ?? "loading"
  })

  useEffect(() => {
    if (!src || options?.shouldPreventLoad) {
      return
    }
    const cachedScriptStatus = cachedScriptStatuses[src]
    if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
      setStatus(cachedScriptStatus)
      return
    }

    const script = getSriptNode(src)
    let scriptNode = script.node

    // add the script node on initialization
    if (!scriptNode) {
      scriptNode = document.createElement("script")
      scriptNode.src = src
      scriptNode.setAttribute("data-status", "loading")
      if (options?.referrerPolicy) {
        scriptNode.referrerPolicy = options.referrerPolicy
      }
      document.body.appendChild(scriptNode)

      // set the stutus in attribute on script
      const setAttributeFromEvent = (event: Event) => {
        const scriptStatus: UseScriptStatus =
          event.type === "load" ? "ready" : "error"
        scriptNode?.setAttribute("data-status", scriptStatus)
      }

      // event handlers
      scriptNode.addEventListener("load", setAttributeFromEvent)
      scriptNode.addEventListener("error", setAttributeFromEvent)
    } else {
      // get the existing status from attribute and set to state
      setStatus(script.status ?? cachedScriptStatus ?? "loading")
    }

    const setStateFromEvent = (event: Event) => {
      const newStatus: UseScriptStatus =
        event.type === "load" ? "ready" : "error"
      setStatus(newStatus)
      cachedScriptStatuses[src] = newStatus
    }

    // event handlers
    scriptNode.addEventListener("load", setStateFromEvent)
    scriptNode.addEventListener("error", setStateFromEvent)

    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener("load", setStateFromEvent)
        scriptNode.removeEventListener("error", setStateFromEvent)
      }

      if (scriptNode && options?.removeOnMount) {
        scriptNode.remove()
      }
    }
  }, [src, options?.shouldPreventLoad, options?.removeOnMount])

  return status
}
