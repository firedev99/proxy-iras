import { Layout } from "@components"
import { ReactElement } from "react"

type Props = {}

export default function PreSchedulePage({}: Props) {
  return <div>PreSchedulePage</div>
}

PreSchedulePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
