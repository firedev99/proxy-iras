import { useScript } from "@hooks/useScript"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

declare const google: any

export default function Component() {
  const [loaded, setLoaded] = useState<boolean>(false)
  const router = useRouter()

  // load gsi client script
  const status = useScript(`https://accounts.google.com/gsi/client`, {
    removeOnMount: false,
  })

  // load content after 1.2s for any sort of UI conflict w google
  useEffect(() => {
    if (status !== "ready") return
    const timerID = setTimeout(() => {
      setLoaded(true)
    }, 1200)

    return () => {
      clearTimeout(timerID)
    }
  }, [status])

  async function handleGoogleLogin() {
    router.push({
      pathname: "/api/google",
      query: { callbackURL: router.pathname },
    })
  }

  useEffect(() => {
    if (typeof google !== "undefined" && status === "ready") {
      new google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        ux_mode: "redirect",
        context: "signin",
        cancel_on_tap_outside: false,
        auto_select: true,
        prompt_parent_id: "oneTap",
        callback: handleGoogleLogin,
      })

      google.accounts.id.renderButton(document.getElementById("googleBtn"), {
        theme: "filled_black",
        text: "continue_with",
        type: "standard",
        logo_alignment: "left",
        click_listener: handleGoogleLogin,
      })

      // implement google one tap authentication flow
      // google.accounts.id.prompt((notification: any) => {
      //   if (notification.isNotDisplayed()) {
      //     console.log(`not displayed - ${notification.getNotDisplayedReason()}`)
      //   } else if (notification.isSkippedMoment()) {
      //     console.log(`skipped - ${notification.getSkippedReason()}`)
      //   } else if (notification.isDismissedMoment()) {
      //     console.log(`skipped - ${notification.getDismissedReason()}`)
      //   }
      // })
    }
    // eslint-disable-next-line
  }, [status])

  return (
    <div>
      {/* <p>{`current status: ${status}`}</p>
      <p>You can use the script here!</p>
      <div id="oneTap" style={{ visibility: loaded ? "visible" : "hidden" }} /> */}
      <div
        id="googleBtn"
        style={{ visibility: loaded ? "visible" : "hidden" }}
      />
    </div>
  )
}
