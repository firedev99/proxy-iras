import dynamic from "next/dynamic"
import styled from "styled-components"
import { Layout } from "@components"
import { ReactElement } from "react"

type Props = {}

const LaunchingSoon = dynamic(
  () => import("../components/template/LaunchingSoon"),
  {
    ssr: false,
  }
)

export default function TestPage({}: Props) {
  return <Wrapper>{/* <LaunchingSoon /> */}</Wrapper>
}

const Wrapper = styled.div``

TestPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout nav={true} working={true} title="Dashboard | Proxy IRAS">
      {page}
    </Layout>
  )
}
