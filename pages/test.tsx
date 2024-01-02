import { Layout } from "@/components"
import { ReactElement } from "react"
import styled, { css } from "styled-components"

export default function TestPage() {
  return (
    <Wrapper>
      <OptionOne />
      <OptionTwo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;

  height: 100vh;
  height: 100svh;

  @media only screen and (max-width: 768px), (max-height: 600px) {
    height: calc(100vh - 4.2rem); //fallback
    height: calc(100svh - 4.2rem);
  }
`

const common = css`
  margin: 0 2rem;
  width: 200px;
  height: 200px;
  border-radius: 1.25rem;
`

const OptionOne = styled.div`
  ${common}
  background-color: pink;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -1.2rem;
    left: -1.5rem;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    border: 2px solid rgba(241, 245, 249, 1);
  }
`
const OptionTwo = styled.div`
  ${common}
  background-color: coral;
  box-shadow: 4px 4px rgba(241, 245, 249, 1);
`

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="TEST | Proxy IRAS">{page}</Layout>
}
