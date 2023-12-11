import { useState, useEffect } from "react"
import { debounce } from "lodash"

type Sizes = {
  height: number
  width: number
}

export function useWindowSize() {
  const isAvailable = typeof window !== "undefined"

  const [size, setSize] = useState<Sizes>({
    height: isAvailable ? window.innerHeight : 0,
    width: isAvailable ? window.innerWidth : 0,
  })

  useEffect(() => {
    if (!isAvailable) return

    function handleChange() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    const withDebounce = debounce(handleChange, 500)

    window.addEventListener("resize", withDebounce)

    return () => window.removeEventListener("resize", withDebounce)
  }, [isAvailable])

  return size
}
