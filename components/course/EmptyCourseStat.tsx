import { EmptyRoutine } from "@/components/modals/styles"
import Image from "next/image"

export default function EmptyCourse() {
  return (
    <EmptyRoutine>
      <div className="empty_illustration_all">
        <Image
          src="https://res.cloudinary.com/firey/image/upload/v1707759937/iub/empty.svg"
          alt="undraw-empty"
          fill
          priority
        />
      </div>
      <h3>No data!</h3>
    </EmptyRoutine>
  )
}
