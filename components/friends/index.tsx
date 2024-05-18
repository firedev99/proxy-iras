import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { useStudent } from "@hooks/useStudent"
import { SharingPermission, PopupModal } from "@components"
import { useClickOutside } from "@hooks/useClickOutside"
import { firey } from "@/lib/utils"
import { indicatorBgs } from "@/lib/dummy/indicators"
import { dayAbbreviations } from "@/lib/dummy/days"
import { FriendsProps, TernaryFriendsProps } from "@types"
import { friendclassTimes, friendsColors, positions } from "@/lib/dummy/friends"
import {
  FriendClassTimes,
  FriendIndicators,
  FriendsHeader,
  FriendsWrapper,
} from "./styles"
import Image from "next/image"
import Avatar from "./Avatar"

export default function Friends({
  isInternalBrowser,
}: {
  isInternalBrowser: boolean
}) {
  const [open, setOpen] = useState(false)
  const [openInfo, setOpenInfo] = useState<TernaryFriendsProps | null>(null)
  const [friends, setFriends] = useState<FriendsProps[]>([])
  const friendsModalRef = useRef<HTMLDivElement>(null)
  const friendInfoModalRef = useRef<HTMLDivElement>(null)

  // generate a random color
  const randomColor = firey.generateRandomValue(friendsColors)

  // router context
  const router = useRouter()

  //student context
  const { student } = useStudent()

  // parsing the url
  const params = new URLSearchParams(router.asPath.split("#/sharing?")[1])

  // get the type of the sharing context
  const type = params.get("type")

  // toggle handler
  const toggleModal = () => setOpen((prev) => !prev)

  // close friend modal info handler
  const closeFriendInfo = () => setOpenInfo(null)

  // handle click outside of the modal
  useClickOutside(friendsModalRef, toggleModal)

  // handle click outside of the freind info modal
  useClickOutside(friendInfoModalRef, closeFriendInfo)

  const toggleFriendStat = (friend: TernaryFriendsProps) => {
    if (
      openInfo &&
      friend.course === openInfo.course &&
      friend.name === openInfo.name
    ) {
      setOpenInfo(null)
    } else {
      setOpenInfo(friend)
    }
  }

  const currentDate = new Date()
  const currentDay = currentDate.toLocaleDateString("en", {
    weekday: "short",
  })

  // get the current day abbreviation that matches iub classtimes
  // const currentDayAbbreviation = dayAbbreviations["Sat"]
  const currentDayAbbreviation = dayAbbreviations[currentDay]

  // get every friend's today's class
  const classesForToday = friends.map((friend) => {
    const courses = friend.courses.filter((item) =>
      item.timeSlot.includes(currentDayAbbreviation)
    )

    return {
      name: friend.name,
      sex: friend.sex,
      img: friend.img,
      courses,
    }
  })

  // check if classes are available or not
  const noClassToday = classesForToday.every(
    (friend) => friend.courses.length === 0
  )

  const friendsClass = (time: string) => {
    // format the time to 24 hour format
    const convertedTime = firey.convertTimeTo24Format(time)

    // get courses based on class times
    const friends = classesForToday.map((friend) => {
      const course = friend.courses.find((course) =>
        course.timeSlot.includes(convertedTime)
      )
      return {
        name: friend.name,
        sex: friend.sex,
        img: friend.img,
        course,
      }
    })

    return friends.filter((friend) => friend.course)
  }

  // retrive friends class details from local storage
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
    <>
      {friends.length > 0 && (
        <FriendsWrapper style={{ zIndex: open ? 100 : 0 }}>
          <button onClick={toggleModal}>
            <Avatar sex={student?.sex} />
          </button>
          <PopupModal
            ref={friendsModalRef}
            className="friends_ui"
            open={open}
            handler={toggleModal}
          >
            <FriendsHeader>
              {friends.map((friend, i) => (
                <div
                  className="friend_avatar"
                  style={{
                    right: `${i * 2.2}rem`,
                    zIndex: `${(i + 1) * 2}`,
                    border: `2px solid ${randomColor}`,
                    background: `${randomColor}`,
                  }}
                  key={`friend_avatar_${i}`}
                >
                  <Image
                    alt={`friend_img_${i}`}
                    fill
                    sizes="(max-width: 768px) 124px, 256px"
                    src={friend.img}
                    style={{
                      border: `2px solid ${randomColor}`,
                    }}
                  />
                </div>
              ))}
            </FriendsHeader>
            {!noClassToday && (
              <FriendClassTimes>
                {friendclassTimes.map((time, i) => (
                  <div key={`friends_class_time__${i}`} className="class_time">
                    <span>{time.split(" ")[0]}</span>
                    <FriendIndicators
                      style={{
                        background:
                          friendsClass(time).length > 0
                            ? indicatorBgs[i]
                            : "transparent",
                        left: `${positions[i]}%`,
                        transform: `translateX(-${positions[i]}%)`,
                      }}
                    >
                      {friendsClass(time).map((friend, idx) => (
                        <div
                          key={`${time}_friend_indicator_${idx}`}
                          className="friend"
                          onClick={() => toggleFriendStat(friend)}
                          style={{
                            right: `${idx * 8}px`,
                            // zIndex: `${(-idx + 1) * 2}`,
                            zIndex: openInfo
                              ? openInfo.course === friend.course &&
                                openInfo.name === friend.name
                                ? `50`
                                : `${(-idx + 1) * 2}`
                              : `${(-idx + 1) * 2}`,
                            filter: openInfo
                              ? openInfo.course === friend.course &&
                                openInfo.name === friend.name
                                ? `grayscale(0)`
                                : `grayscale(1)`
                              : `grayscale(0)`,
                            marginRight: `-${idx * 8}px`,
                          }}
                        >
                          <Image
                            alt={`friend_img_${i}`}
                            fill
                            sizes="(max-width: 768px) 124px, 256px"
                            src={friend.img}
                          />
                          {openInfo &&
                            openInfo.course === friend.course &&
                            openInfo.name === friend.name && (
                              <div className="friend_info">
                                {friend.name} has class in {friend.course?.room}
                              </div>
                            )}
                        </div>
                      ))}
                    </FriendIndicators>
                  </div>
                ))}
              </FriendClassTimes>
            )}

            {noClassToday && (
              <div className="no_class">
                None of your friends has class today! 😳
              </div>
            )}
          </PopupModal>
        </FriendsWrapper>
      )}
      {type && (
        <SharingPermission isInternal={isInternalBrowser} params={params} />
      )}
    </>
  )
}
