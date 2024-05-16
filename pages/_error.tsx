import { ErrorPageWrapper } from "@/styles/ErrorStyles"
import dynamic from "next/dynamic"
import Link from "next/link"

const WalkingDog = dynamic(() => import("../components/lottie/WalkingDog"), {
  ssr: false,
})

function Error({ statusCode }: any) {
  return (
    <ErrorPageWrapper>
      <div className="animation">
        <WalkingDog />
      </div>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
      <Link href="/">Go back to home page</Link>
    </ErrorPageWrapper>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
