import { LaunchingTemplate, Layout } from "@components"
import { ReactElement } from "react"

// https://iras.iub.edu.bd:8079//api/v1/registration/2010047/all-offer-courses

type Props = {}

export default function HelpersPage({}: Props) {
  return <LaunchingTemplate />
}

HelpersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Proxy-IRAS Assistant - Proxy IRAS">{page}</Layout>
}
