import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PopupModal } from "@components"
import { useStudent } from "@hooks/useStudent"
import { firey } from "@/lib/utils"
import { FriendsProps } from "@types"
import Image from "next/image"
import {
  FriendAvatarImg,
  FriendAvatarWrapper,
  FriendsWrapper,
} from "./styles/FriendModalStyles"

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  handler: () => void
}

export default function FriendModal({ open, setOpen }: Props) {
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null)
  const [friends, setFriends] = useState<FriendsProps[]>([])

  // student context
  const { student } = useStudent()

  // router context
  const router = useRouter()

  // handle friend selection
  const handleFriendSelection = (index: number) => setSelectedFriend(index)

  // close modal handler
  const closeModal = () => setOpen(false)

  // handle image change
  const deleteFriend = () => {
    if (!student) return

    // update the friends informations
    const updatedFriend = friends.filter((_, i) => i !== selectedFriend)

    // store updated friends informations
    localStorage.setItem(
      `${student.studentID}_friends`,
      JSON.stringify(updatedFriend)
    )
    setSelectedFriend(null)
    setOpen(false)
    router.reload()
  }

  useEffect(() => {
    const friends =
      typeof window !== "undefined" && student
        ? JSON.parse(
            window.localStorage.getItem(`${student.studentID}_friends`) || "[]"
          )
        : []

    setFriends(friends)
  }, [student])

  return (
    <PopupModal className="edit_friend_modal" open={open} handler={closeModal}>
      <FriendsWrapper>
        {friends.length > 0 &&
          friends.map((friend, i) => (
            <FriendAvatarWrapper key={`friend_av__${i}`}>
              <FriendAvatarImg
                $selected={selectedFriend === i}
                onClick={() => handleFriendSelection(i)}
              >
                <Image
                  alt={`${friend.img}.jpg`}
                  fill
                  src={friend.img}
                  sizes="(max-width: 768px) 124px, 468px"
                  placeholder="blur"
                  blurDataURL={firey.rgbDataURL(177, 144, 182)}
                />
              </FriendAvatarImg>
              <h4>
                {friend.name.split(" ")[0]} {friend.name.split(" ")[1]}
              </h4>
            </FriendAvatarWrapper>
          ))}

        {friends.length === 0 && (
          <h3>
            Share your class timings with your friends, click on the share link
            button and share the copied link.
          </h3>
        )}
      </FriendsWrapper>
      {friends.length !== 0 && (
        <button className="delete_btn" onClick={deleteFriend}>
          Delete
        </button>
      )}
    </PopupModal>
  )
}
