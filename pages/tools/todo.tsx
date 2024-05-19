import { LaunchingTemplate, Layout } from "@components"
import { ReactElement } from "react"

export default function TodoPage() {
  return <LaunchingTemplate />
}

TodoPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Todo App - Proxy IRAS, Student Management System">
      {page}
    </Layout>
  )
}
