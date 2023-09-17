import {
  CalenderIcon,
  ChartIcon,
  CheckboardIcon,
  HomeIcon,
  SemiStarShapeIcon,
  SettingsIcon,
  SpinningLoader,
  UserIcon,
} from "./icons"
import { IconProps } from "@types"

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "spinning-loader":
      return <SpinningLoader />

    case "home":
      return <HomeIcon />

    case "checkboard":
      return <CheckboardIcon />

    case "calender":
      return <CalenderIcon />

    case "user":
      return <UserIcon />

    case "chart":
      return <ChartIcon />

    case "settings":
      return <SettingsIcon />

    case "semi-star-shape":
      return <SemiStarShapeIcon className={className} />

    default:
      return <div />
  }
}