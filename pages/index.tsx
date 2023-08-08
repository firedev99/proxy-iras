import { ReactElement } from "react"
import { Layout } from "@components"
import { HomePageWrapper } from "@styles/HomeStyles"

export default function Home() {
  return (
    <HomePageWrapper>
      <h1>firedev99</h1>
    </HomePageWrapper>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
