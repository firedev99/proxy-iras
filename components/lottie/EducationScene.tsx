import { useLottie } from "@/hooks/useLottie"
import sceneJSON from "@/lib/dummy/lottie-education.json"
import { MainScene, SceneWrapper } from "./styles/lottieStyles"
import { useLayoutEffect } from "react"

export default function EducationScene() {
  const { ref: scene } = useLottie(sceneJSON)

  return (
    <SceneWrapper>
      <MainScene ref={scene} />
    </SceneWrapper>
  )
}
