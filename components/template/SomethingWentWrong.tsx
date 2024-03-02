import { useRouter } from "next/router"
import styled from "styled-components"

type Props = {
  className?: string
}

export default function SomethingWentWrong({ className }: Props) {
  // router context
  const router = useRouter()

  function handleReloading() {
    router.reload()
  }

  return (
    <SomethingWWWrapper className={className}>
      <h3>Something went wrong!</h3>
      <button onClick={handleReloading}>Try Reloading</button>
    </SomethingWWWrapper>
  )
}

export const SomethingWWWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: var(--font-josefin), sans-serif;
    font-size: 1.5rem;
  }

  button {
    margin-top: 8px;
    padding: 0.4rem 1.6rem;
    font-weight: 500;
    font-family: var(--font-display), sans-serif;

    &:hover {
      cursor: pointer;
    }
  }
`
