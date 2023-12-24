import { useProfile } from "@/hooks/useProfile"
import { Layout } from "@components"
import { ReactElement } from "react"

type Props = {}

export default function ProfilePage({}: Props) {
  // get user profile details
  const { studentDetails, dummyPictures } = useProfile()
  console.log("studentDetails", studentDetails)
  console.log("dummyPictures", dummyPictures)
  return <div />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout nav={true} working={true} title="Profile | Proxy IRAS">
      {page}
    </Layout>
  )
}
