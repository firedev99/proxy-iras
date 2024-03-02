import { Dispatch, SetStateAction, useRef, useState } from "react"
import { useRouter } from "next/router"
import { PopupModal } from "@components"
import { useStudent } from "@hooks/useStudent"
import { useClickOutside } from "@hooks/useClickOutside"
import { firey } from "@/lib/utils"
import { AvatarImg, AvatarWrapper } from "./styles"
import Image from "next/image"

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  imgSet: string[]
}

export default function ChangeAvatar({ open, setOpen, imgSet }: Props) {
  const [selectedSrc, setSelectedSrc] = useState<string>("")
  const imgModalRef = useRef<HTMLDivElement>(null)

  // student context
  const { student } = useStudent()

  // router context
  const router = useRouter()

  // handle image selection
  const handleImgSelection = (src: string) => setSelectedSrc(src)

  // close modal handler
  const closeModal = () => setOpen(false)

  // handle click outside of the modal
  useClickOutside(imgModalRef, closeModal)

  // handle image change
  const saveImageChange = () => {
    if (!student) return

    // get previous saved local storage values
    const studentInfo =
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem(`student-info`) || "{}")
        : {}

    // make a new updated object
    const updatedInformation = {
      ...studentInfo,
      picture: selectedSrc,
    }

    // set local storage values
    localStorage.setItem(`saved-${student.studentID}-picture`, selectedSrc)
    localStorage.setItem("student-info", JSON.stringify(updatedInformation))

    // close the modal
    setOpen(false)

    // reload the page
    router.reload()
  }

  return (
    <PopupModal
      className="change_avatar_modal"
      ref={imgModalRef}
      open={open}
      handler={closeModal}
    >
      <AvatarWrapper>
        {imgSet.map((src, i) => (
          <AvatarImg
            $selected={selectedSrc === src}
            key={`dummy_av__${i}`}
            onClick={() => handleImgSelection(src)}
          >
            <Image
              alt={`${src}.jpg`}
              fill
              src={src}
              sizes="(max-width: 768px) 124px, 468px"
              placeholder="blur"
              blurDataURL={firey.rgbDataURL(177, 144, 182)}
            />
          </AvatarImg>
        ))}
      </AvatarWrapper>

      <button
        disabled={selectedSrc.length === 0}
        className="save_btn"
        onClick={saveImageChange}
      >
        Save Image
      </button>
    </PopupModal>
  )
}
