import { useState, type ReactElement } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { LoginForm, SimpleLayout } from "@components"
import Scenerio from "@bg"
import { LoginBGSceneWrapper, LoginPageWrapper } from "@styles/LoginStyles"

const PopupModal = dynamic(() => import("../components/modals/SimpleModal"), {
  ssr: false,
})

export default function LoginPage() {
  const [showWarning, setShowWarning] = useState<boolean>(true)

  // router context
  const router = useRouter()
  const hasWarning = router.query.warn === "outsider"

  // close warning handler
  const closeWarning = () => {
    setShowWarning(false)
    router.replace(router.pathname)
  }

  return (
    <LoginPageWrapper>
      <LoginBGSceneWrapper>
        <Scenerio />
      </LoginBGSceneWrapper>
      <LoginForm />
      <PopupModal
        className="login_warning"
        open={showWarning && hasWarning}
        handler={closeWarning}
      >
        <h4>
          Only students from IUB can use this app with a valid student id and
          @iub.edu.bd account
        </h4>
      </PopupModal>
    </LoginPageWrapper>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SimpleLayout title="Login - Proxy IRAS, Student Management System">
      {page}
    </SimpleLayout>
  )
}
