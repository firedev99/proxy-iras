import { useProfile } from "@/hooks/useProfile"
import { Layout, LaunchingTemplate } from "@components"
import { ReactElement } from "react"

export default function ProfilePage() {
  // get user profile details
  const { studentDetails, dummyPictures } = useProfile()
  console.log("studentDetails", studentDetails)
  console.log("dummyPictures", dummyPictures)
  return <LaunchingTemplate />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Student Profile - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
