import {
  CalenderIcon,
  ChartIcon,
  CheckboardIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FireIcon,
  GoogleClassroomIcon,
  HomeIcon,
  NotAllowedIcon,
  RightArrowIcon,
  SearchFilterIcon,
  SearchInsertionIcon,
  SemiStarShapeIcon,
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

    case "google-classroom":
      return <GoogleClassroomIcon />
    case "semi-star-shape":
      return <SemiStarShapeIcon className={className} />

    case "eye-open":
      return <EyeOpenIcon />

    case "eye-close":
      return <EyeCloseIcon />

    case "search-insertion":
      return <SearchInsertionIcon />

    case "search-filter":
      return <SearchFilterIcon />

    case "not-allowed":
      return <NotAllowedIcon />

    case "fire":
      return <FireIcon />

    default:
      return <div />
  }
}
