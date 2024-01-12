import type { ReactElement } from "react"
import { LoginForm, SimpleLayout } from "@components"
import Scenerio from "@bg"
import { LoginBGSceneWrapper, LoginPageWrapper } from "@styles/LoginStyles"
import { navFooter } from "@/lib/dummy/links"
import Link from "next/link"

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginBGSceneWrapper>
        <Scenerio />
      </LoginBGSceneWrapper>
      <LoginForm />
      {/* <footer>
        {navFooter.map((link, i) => (
          <Link key={`login_footer_link_${i}`} href={link.href}>
            {link.title}
          </Link>
        ))}
      </footer> */}
    </LoginPageWrapper>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SimpleLayout
      title="Login - Proxy IRAS "
      description="Login to your iras account using iub's student credentials! Simple and Easy 🍻"
    >
      {page}
    </SimpleLayout>
  )
}
