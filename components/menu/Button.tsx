import { useRouter } from "next/router"
import { LogoutBtnWrapper } from "./styles"

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    try {
      await Promise.allSettled([
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/google/logout`, {
          method: "DELETE",
        }),
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/iub/logout`, {
          method: "DELETE",
        }),
      ]).then(() => {
        router.reload()
      })
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.log(err)
      }
    }
  }

  return (
    <LogoutBtnWrapper onClick={handleLogout} whileHover={{ scale: 0.95 }}>
      Signout
    </LogoutBtnWrapper>
  )
}
