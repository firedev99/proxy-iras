import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function RouteLoader() {
  const [progress, setProgress] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  const router = useRouter()

  // set the progress in state
  function updateProgressBar(progress: number) {
    setProgress(progress)
  }

  useEffect(() => {
    // simulate the progress
    function simulateProgress() {
      let progress = 0
      intervalRef.current = setInterval(() => {
        // increment near 10 each time
        progress += Math.random() * 10
        // abort the progress track if the route has changed
        if (progress >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current)
        }

        // track the progress
        updateProgressBar(progress)
      }, 100)
    }

    function handleRouteChange() {
      simulateProgress()
    }

    function handleRouteChangeComplete() {
      updateProgressBar(100)
    }

    // route tracking events
    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", handleRouteChangeComplete)

    return () => {
      // clean ups
      router.events.off("routeChangeStart", handleRouteChange)
      router.events.off("routeChangeComplete", handleRouteChangeComplete)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [router])

  return (
    progress < 100 && (
      <motion.div
        className="progress_bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 100,
          restDelta: 0.001,
        }}
      />
    )
  )
}
