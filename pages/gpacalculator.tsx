import { Layout } from "@components"
import { ReactElement } from "react"

type Props = {}

export default function GPACalculatorPage({}: Props) {
  return <div>GPACalculatorPage</div>
}

GPACalculatorPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout nav={true}>{page}</Layout>
}
