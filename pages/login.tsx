import type { ReactElement } from "react"
import { LoginForm, SimpleLayout } from "@components"
import Scenerio from "@bg"
import { LoginPageWrapper } from "@styles/LoginStyles"

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <Scenerio />
      <LoginForm />
    </LoginPageWrapper>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SimpleLayout
      title="Login | Proxy IRAS "
      description="Login to your iras account using iub's student credentials! Simple and Easy 🍻"
    >
      {page}
    </SimpleLayout>
  )
}
