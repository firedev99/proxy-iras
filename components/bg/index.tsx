import { BGSceneWrapper } from "./styles"
import Scenerio from "@/lib/bg"

type Props = {
  classname?: string
}

export default function BGScene({ classname }: Props) {
  return (
    <BGSceneWrapper className={classname}>
      <Scenerio />
    </BGSceneWrapper>
  )
}
