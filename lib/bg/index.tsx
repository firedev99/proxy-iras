import Image from "next/image"
import { firey } from "../utils"
import { useEffect, useState } from "react"

const scenes = [
  "/images/scene_1.svg",
  "/images/scene_2.svg",
  "/images/scene_3.svg",
  "/images/scene_4.svg",
]

export default function Scenerio() {
  const [imgSrc, setImgSrc] = useState(scenes[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      // generates a random value from the scene array
      let _src = firey.generateRandomValue(scenes)
      setImgSrc(_src)
      setLoaded(true)
    }
  }, [loaded])

  // load the scenes only after random scene was generated
  if (!loaded) return <div />

  return <Image priority fill src={imgSrc} alt="Pinky" />
}
