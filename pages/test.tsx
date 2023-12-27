import dynamic from "next/dynamic"
import styled from "styled-components"
import { Layout } from "@components"
import { ReactElement, useState } from "react"
import { useToast } from "@/hooks/useToast"
import { firey } from "@/lib/utils"
import { greetingLines } from "@/lib/dummy/greetings"

type Props = {}

const LaunchingSoon = dynamic(
  () => import("../components/template/LaunchingSoon"),
  {
    ssr: false,
  }
)

export default function TestPage({}: Props) {
  const { addToast } = useToast()
  const greeting = firey.generateRandomValue(greetingLines)

  return (
    <Wrapper>
      <button
        onClick={() => {
          addToast(`${greeting}`)
        }}
      >
        CLICK
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div``

// TestPage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout title="TEST | Proxy IRAS">{page}</Layout>
// }
