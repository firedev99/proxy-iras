import { useEffect, useLayoutEffect, useState } from "react"
import styled from "styled-components"

const tabs = ["greetings", "gender", "avatar"]

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 555;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 400px;
    width: 400px;
    background: red;
    overflow: auto;
  }
`

export default function SetUpModal() {
  const [activeTab, setActiveTab] = useState("greeting")

  useLayoutEffect(() => {
    document.documentElement.style.overflow = "hidden"

    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [])

  return (
    <ModalWrapper>
      <div></div>
    </ModalWrapper>
  )
}
