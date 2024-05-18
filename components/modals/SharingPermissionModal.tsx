import { useState } from "react"
import { useRouter } from "next/router"
import { useStudent } from "@hooks/useStudent"
import { useToast } from "@hooks/useToast"
import { PopupModal } from "@components"
import { SharingPermissionWrapper } from "./styles/SharingPermissionStyles"
import { useClipboard } from "@/hooks/useClipboard"
import Icon from "@/lib/icons"

type Props = {
  params: URLSearchParams
  isInternal: boolean
}

export default function SharingPermissionModal({ params, isInternal }: Props) {
  const [status, setStatus] = useState<boolean>(true)

  // router context
  const router = useRouter()

  // toast context
  const { addToast } = useToast()

  // clipboard context
  const clipboard = useClipboard()

  // student context
  const { student } = useStudent()

  // scrap the type, name, sex from url params
  const type = params.get("type")
  const name = params.get("name") ?? "proxy"
  const sex = params.get("sex") ?? "proxy"
  const img =
    params.get("img") ??
    "https://res.cloudinary.com/firey/image/upload/v1708816390/iub/male_1.jpg"

  // save the information in localstorage based on type
  function saveInformation() {
    if (typeof window === "undefined" || !student) return

    // modify friends's course from url params
    const courses = params.getAll("course").map((courseName, i) => {
      const id = params.getAll("id")[i]
      const room = params.getAll("room")[i]
      const sec = params.getAll("sec")[i]
      const classTime = params.getAll("time")[i]

      return {
        courseName,
        section: sec,
        courseId: id,
        // replace undefined rooms
        room: room === "undefined" ? "" : room,
        timeSlot: classTime,
      }
    })

    // re-structure friend object
    const newFriend = {
      name,
      sex,
      img,
      courses,
    }

    // if the type is schedule then save the friend details into friends list
    if (type === "schedule") {
      // get the current friend list
      const oldFriend = localStorage.getItem(`${student.studentID}_friends`)

      // handle adding a new friend when friend data in local storage if it's not emty
      if (oldFriend) {
        // parse the friend data as an array
        const friends = JSON.parse(oldFriend)

        const alreadyExists = friends.find(
          (friend: any) => friend.name === name
        )

        if (alreadyExists) {
          setStatus(false)
          addToast(`${name} has been already added 😳`)
          return
        }

        if (friends.length === 5) {
          setStatus(false)
          addToast(`You only can track class timings of 5 friends max 😳`)
          return
        }

        // push new friend to friends array
        friends.push(newFriend)

        // store friends in local storage
        localStorage.setItem(
          `${student.studentID}_friends`,
          JSON.stringify(friends)
        )
      } else {
        // initial insertion when there is no friend data in local storage
        localStorage.setItem(
          `${student.studentID}_friends`,
          JSON.stringify([newFriend])
        )
      }

      // toast a status
      addToast(`${name} has been added your class tracks 🥷🏼`)
    }

    // if the type is rotuine then save the friend's saved routine into your routine list
    if (type === "routine") {
      // get the old stored routines
      const routineData = localStorage.getItem(`${student.studentID}_routine`)

      if (routineData) {
        // parse routine data as array
        const routine = JSON.parse(routineData)

        if (routine.length === 5) {
          setStatus(false)
          addToast(`Delete some of your previous routines to save this one 😳`)
          return
        }

        routine.push(courses)

        // store routines in local storage
        localStorage.setItem(
          `${student.studentID}_routine`,
          JSON.stringify(routine)
        )
      } else {
        // initial insertion when there is no routine data in local storage
        localStorage.setItem(
          `${student.studentID}_routine`,
          JSON.stringify([courses])
        )
      }

      // toast a status
      addToast(
        `${name} shared ${
          sex === "Male" ? `his` : `her`
        } saved routine with you. 🥷🏼`
      )
    }

    setStatus(false)
    router.push(router.pathname)
  }

  function handleUrlCopy() {
    clipboard.copy(`${process.env.NEXT_PUBLIC_URL}${router.asPath}`)
  }

  const ignoreModal = () => setStatus(false)

  return (
    <SharingPermissionWrapper>
      <PopupModal open={status} className="schedule_sharing_modal" overlay>
        <h3>
          {!isInternal
            ? `${name} has shared ${sex === "Male" ? `his` : `her`} ${
                type === "schedule" ? `class timings` : `saved rotuine`
              } with you 🥺😳`
            : `To enable all the features, you need to open the website in an external browser like Chrome or Safari.`}
        </h3>
        <div className="schedule_sharing_controls">
          {isInternal && (
            <button onClick={handleUrlCopy}>
              {clipboard.status === "SUCCESS" ? `Copy Done 🦈` : `Copy Link 🔗`}
            </button>
          )}
          {!isInternal && (
            <button onClick={saveInformation}>Save Schedule</button>
          )}
          {!isInternal && <button onClick={ignoreModal}>Ignore it</button>}
        </div>
      </PopupModal>
    </SharingPermissionWrapper>
  )
}
