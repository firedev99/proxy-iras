import { useEffect, useState } from "react"
import Image from "next/image"
import { firey } from "../utils"
import { scenes } from "../dummy/scenes"

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

  return <Image priority fill src={imgSrc} alt={`bg-${firey.uniqueID()}`} />
}
