import { useProfile } from "@/hooks/useProfile"
import { Layout } from "@components"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

type Props = {}

export default function ProfilePage({}: Props) {
  const { studentDetails, dummyPictures } = useProfile()
  console.log("studentDetails", studentDetails)
  console.log("dummyPictures", dummyPictures)
  return <div>ProfilePage</div>
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
