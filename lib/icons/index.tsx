import {
  CalenderIcon,
  ChartIcon,
  CheckboardIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  HomeIcon,
  LogoutIcon,
  RightArrowIcon,
  SemiStarShapeIcon,
  SettingsIcon,
  SpinningLoader,
  SqaureStackIcon,
  UserIcon,
} from "./icons"
import { IconProps } from "@types"

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "spinning-loader":
      return <SpinningLoader />

    case "right-arrow":
      return <RightArrowIcon />

    case "square-stack":
      return <SqaureStackIcon />

    case "logout":
      return <LogoutIcon />

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

    case "eye-open":
      return <EyeOpenIcon />

    case "eye-close":
      return <EyeCloseIcon />

    default:
      return <div />
  }
}
