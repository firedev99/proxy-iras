import { ReactElement } from "react"
import { Layout } from "@components"
import { Wrapper } from "@styles/HomeStyles"

export default function Home() {
  return (
    <Wrapper>
      <h1>firedev99</h1>
    </Wrapper>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
