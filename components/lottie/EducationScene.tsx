import { useLottie } from "@hooks/useLottie"
import { MainScene, SceneWrapper } from "./styles/lottieStyles"
import sceneJSON from "@/lib/dummy/lottie-education.json"

export default function EducationScene() {
  const { ref: scene } = useLottie(sceneJSON)

  return (
    <SceneWrapper>
      <MainScene ref={scene} />
    </SceneWrapper>
  )
}
