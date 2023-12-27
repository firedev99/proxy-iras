import LaunchingSoon from "@/components/template/LaunchingSoon"
import { useProfile } from "@/hooks/useProfile"
import { Layout } from "@components"
import { ReactElement } from "react"

type Props = {}

export default function ProfilePage({}: Props) {
  // get user profile details
  const { studentDetails, dummyPictures } = useProfile()
  console.log("studentDetails", studentDetails)
  console.log("dummyPictures", dummyPictures)
  return <LaunchingSoon />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Student Profile | Proxy IRAS">{page}</Layout>
}
