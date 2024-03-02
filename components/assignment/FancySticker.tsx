import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useWindowSize } from "@/hooks/useWindowSize"
import { funckyStickerImgData } from "@/lib/dummy/stickers"
import {
  FancyStickerImage,
  FancyStickerWrapper,
} from "./styles/FancyStickerStyles"
import Image from "next/image"

export default function FancySticker() {
  const [showSticker, setShowSticker] = useState<boolean>(true)
  const funkySticker =
    funckyStickerImgData[
      Math.floor(Math.random() * funckyStickerImgData.length)
    ]

  // get width
  const { width } = useWindowSize()

  useEffect(() => {
    const timerID = setTimeout(() => {
      setShowSticker(false)
    }, 10000)

    return () => {
      clearTimeout(timerID)
    }
  }, [])

  return (
    <AnimatePresence>
      {showSticker && (
        <FancyStickerWrapper
          style={{
            top: width > 768 ? funkySticker.top_lg : funkySticker.top_sm,
            right: width > 768 ? funkySticker.right_lg : funkySticker.right_sm,
            bottom:
              width > 768 ? funkySticker.bottom_lg : funkySticker.bottom_sm,
            left: width > 768 ? funkySticker.left_lg : funkySticker.left_sm,
          }}
        >
          <FancyStickerImage
            initial={{ y: "120%" }}
            animate={{
              y: "0%",
              rotate: [-1.5, 2.5, 0, 1.5, -2.5],
              transition: { rotate: { repeat: Infinity }, delay: 2 },
            }}
            exit={{ y: "120%" }}
          >
            <Image
              fill
              src={funkySticker.src}
              alt={`${funkySticker.src}.jpg`}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </FancyStickerImage>
        </FancyStickerWrapper>
      )}
    </AnimatePresence>
  )
}
