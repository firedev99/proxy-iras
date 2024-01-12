import { useLottie } from "@/hooks/useLottie"
import React from "react"
import sceneJSON from "@/lib/dummy/lottie-cool.json"

export default function WalkingDog() {
  const { ref: scene } = useLottie(sceneJSON)
  return <div ref={scene} />
}
