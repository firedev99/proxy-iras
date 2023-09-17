import type { ReactElement } from "react"
import { Layout, LoginForm } from "@components"
import Scenerio from "@bg"
import { LoginPageWrapper } from "@styles/LoginStyles"
import { useRouter } from "next/router"

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <Scenerio />
      <LoginForm />
    </LoginPageWrapper>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
