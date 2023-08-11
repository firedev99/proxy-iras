import { SpinningLoader } from "./icons"
import { IconProps } from "@types"

export default function Icon({ name }: IconProps) {
  switch (name) {
    case "spinning-loader":
      return <SpinningLoader />

    default:
      return <div />
  }
}
