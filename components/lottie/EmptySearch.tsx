import { useLottie } from "@hooks/useLottie"
import sceneJSON from "@/lib/dummy/lottie-not-found.json"

export default function EmptySearch() {
  const { ref: scene } = useLottie(sceneJSON)
  return <div ref={scene} />
}
