import { Layout } from "@components"
import { ReactElement } from "react"

// https://iras.iub.edu.bd:8079//api/v1/registration/2010047/all-offer-courses

type Props = {}

export default function HelpersPage({}: Props) {
  return <div>Plan Semester Schedule and Calculate CGPA</div>
}

HelpersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout nav={true} title="Helpers | Proxy IRAS">
      {page}
    </Layout>
  )
}
