import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    // get previously saved picture for profile icon
    if (typeof window !== "undefined" && window.localStorage) {
      let student = JSON.parse(localStorage.getItem("student-info") as string)

      let previouslySavedPicture = localStorage.getItem(
        `saved-${student.studentID}-picture` as string
      )

      // set the img src in state
      setImgSrc(previouslySavedPicture)
    }
  }, [])

  useEffect(() => {
    // if the router was not triggered by clicking the nav menu
    if (active !== router.pathname) {
      setActive(router.pathname)
    }
  }, [active, router.pathname])

  return <></>
}
