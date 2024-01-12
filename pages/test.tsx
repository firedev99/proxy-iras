import Layout from "@/components/layout"
import { ReactElement } from "react"
import styled from "styled-components"

export default function TestPage() {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.div``

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="TEST | Proxy IRAS">{page}</Layout>
}
