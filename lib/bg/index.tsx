import { useEffect, useState } from "react"
import Image from "next/image"
import { firey } from "../utils"

export default function Scenerio() {
  const [imgSrc, setImgSrc] = useState(
    `https://res.cloudinary.com/firey/image/upload/v1705007870/iub/bgi-5.svg`
  )
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      let _src = `https://res.cloudinary.com/firey/image/upload/v1705007870/iub/bgi-${
        Math.floor(Math.random() * 15) + 1
      }.svg`
      setImgSrc(_src)
      setLoaded(true)
    }
  }, [loaded])

  // load the scenes only after random scene was generated
  if (!loaded) return <div />

  return <Image priority fill src={imgSrc} alt={`bg-${firey.uniqueID()}`} />
}
