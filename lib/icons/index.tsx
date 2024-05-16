import {
  AddIcon,
  BoxCopiedIcon,
  BrushIcon,
  CalculatorIcon,
  CalenderIcon,
  ChartIcon,
  CheckboardIcon,
  CrossIcon,
  ExitIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FireIcon,
  FontIcon,
  FrameArtIcon,
  GoogleClassroomIcon,
  HomeIcon,
  LeftArrow,
  LinkIcon,
  NotAllowedIcon,
  PlusIcon,
  ResetIcon,
  RightArrowIcon,
  SearchFilterIcon,
  SearchInsertionIcon,
  SemiStarShapeIcon,
  SpinningLoader,
  SqaureStackIcon,
  TrashIcon,
  UserIcon,
  WebPageSceneIcon,
} from "./icons"
import { IconProps } from "@types"

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "spinning-loader":
      return <SpinningLoader />

    case "frame-art-icon":
      return <FrameArtIcon />

    case "font-icon":
      return <FontIcon />

    case "brush-icon":
      return <BrushIcon />

    case "add-icon":
      return <AddIcon />

    case "reset-icon":
      return <ResetIcon />

    case "calculator-icon":
      return <CalculatorIcon />

    case "left-arrow":
      return <LeftArrow />

    case "trash":
      return <TrashIcon />

    case "right-arrow":
      return <RightArrowIcon />

    case "cross-icon":
      return <CrossIcon />

    case "web-page-scene":
      return <WebPageSceneIcon />

    case "copied-clipboard":
      return <BoxCopiedIcon />

    case "link-icon":
      return <LinkIcon />

    case "square-stack":
      return <SqaureStackIcon />

    case "home":
      return <HomeIcon />

    case "checkboard":
      return <CheckboardIcon />

    case "plus":
      return <PlusIcon />

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
