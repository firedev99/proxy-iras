import { SpinningLoader } from "./icons"

type IconType = {
  name: "spinning-loader"
}

export default function Icon({ name }: IconType) {
  switch (name) {
    case "spinning-loader":
      return <SpinningLoader />

    default:
      return <div />
  }
}
