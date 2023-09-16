import { Layout } from "@components"
import { GetServerSideProps } from "next"
import { ReactElement, useEffect } from "react"

type Props = {}

export default function ProfilePage({}: Props) {
  // useEffect(() => {
  //   async function request() {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_URL}/api/google/profile`
  //     )
  //     const data = await res.json()
  //   }

  //   request()
  // }, [])

  return <div>ProfilePage</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies["g-token"]
  const refreshToken = ctx.req.cookies["r-token"]

  if (token || refreshToken) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/google/profile`,
      {
        headers: {
          Cookie: ctx.req.headers.cookie as string,
        },
      }
    )

    // sent the cookie along w the header that needs to be stored
    const cookies = res.headers.getSetCookie()
    ctx.res.setHeader("Set-Cookie", cookies)
  }

  return {
    props: {},
  }
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
