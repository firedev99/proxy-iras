import { classroom_v1 } from "googleapis"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type {
  ChangeEvent,
  FocusEvent,
  HTMLInputTypeAttribute,
  ReactElement,
  ReactNode,
} from "react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type AuthCredentials = {
  user: string
  password: string
}

export type InputProps = {
  type: HTMLInputTypeAttribute
  name: string
  value: string
  placeholder?: string
  errStaus?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

export type LayoutType = {
  children: ReactNode
  title?: string
  description?: string
  icon?: string
  footer?: boolean
}

export type ToastContextType = {
  addToast: (content: string) => void
  removeToast: (id: string) => void
}

export type ToastProviderType = {
  children: ReactNode
}

export type ToastStateValues = {
  id: string
  content: string
}

export type ToastStateProps = {
  notifications: ToastStateValues[]
}

export type ToastContainerType = {
  toasts: ToastStateValues[]
}

export type CustomHookFormErrorType = {
  [key: string]: string | null
}

export type IconProps = {
  name:
    | "frame-art-icon"
    | "brush-icon"
    | "font-icon"
    | "add-icon"
    | "reset-icon"
    | "calculator-icon"
    | "left-arrow"
    | "trash"
    | "plus"
    | "spinning-loader"
    | "home"
    | "checkboard"
    | "calender"
    | "user"
    | "chart"
    | "settings"
    | "semi-star-shape"
    | "logout"
    | "square-stack"
    | "right-arrow"
    | "eye-open"
    | "eye-close"
    | "google-classroom"
    | "search-insertion"
    | "search-filter"
    | "fire"
    | "not-allowed"
    | "link-icon"
    | "copied-clipboard"
    | "web-page-scene"
    | "cross-icon"

  className?: string
  active?: boolean
}

export type StudentCreditStatus = {
  courseGroupId: string
  courseGroupName: string
  doneCredit: number
  minRequirement: number
}

export type StudentProps = {
  studentID: string
  studentName: string
  major?: string
  minor?: string
  // notificationMessages: {
  //   messages: string
  // }[]
  semesterByYear: string
  semesterName: string
  year: string
  cgpa: string
  advisorName?: string
  creditEarned: string
  picture: string
  sex?: string
  creditStatus: StudentCreditStatus[]
}

export type RoutineTab = {
  slide: string
  label: string
}

export type StudentProfileProp = {
  studentName: string
  studentID: string
  studentPrimaryImgSrc: string
  studentSecondaryImgSrc?: string
  cgpa: number
  earnedCredit: number
  major: string
  minor: string
  schoolName: string
  dob: string
  birthRegistrationNo: string
  nid: string
  passportNo: string
  bloodGroup: string
  cellPhone: string
  primaryEmail: string
  secondaryEmail?: string
  fathersName: string
  mothersName: string
  presentAddess: string
  sex: string
}

export type StudentContextProps = {
  student: StudentProps | null
  addStudent: (student: StudentProps) => void
  removeStudent: () => void
}

export type StudentProviderType = {
  children: ReactNode
}

export type IUBCourseProps = {
  data: {
    attend?: number
    classCount?: number
    classTime: string
    courseId: string
    courseName: string
    grade: string
    regSemester: string
    regYear: string
    roomId: string
    section: number
    wExpCount: number
  }[]
}

// redesigned course data
export type CourseProps = {
  courseName: string
  courseID: string
  section: number
  attendedClasses?: number
  totalClasses?: number
  classTime: string
  roomID?: string
  grade?: string
  semesterByYear?: string
  year?: string
  classroomLink?: string
}

export type HomePageType = {
  courses: CourseProps[]
  classroomCourses: classroom_v1.Schema$Course[]
  isInternalBrowser: boolean
}

export type GoogleDueTimeProps = {
  day: number
  month: number
  year: number
}

export type FunckyStickerProps = {
  src: string
  top_lg?: string
  top_sm?: string
  right_lg?: string
  right_sm?: string
  bottom_lg?: string
  bottom_sm?: string
  left_lg?: string
  left_sm?: string
}

export interface CourseOffering {
  capacity?: number
  catalogId?: string
  catalogTypeId?: string
  coOfferCourseId?: string
  concentrationId?: string
  courseCategoryId?: string
  courseCode?: string
  courseGroupId?: string
  courseId?: string
  courseName: string
  creditHour?: number
  enrolled?: number
  facualtyName?: string
  gp?: number
  grade?: string
  isMandatoryFail?: number
  monTimeString?: string
  programId?: number
  regSemester?: string
  regYear?: string
  roomCapacity?: number
  section?: number
  seqNo?: string
  status?: number
  timeSlot: string
  timeString?: string
  vacancy?: number
  wedTimeString?: string
}

export interface RoutineCourseOffering extends CourseOffering {
  firey: string
}

export type RoutineCourseSelection = {
  course: CourseOffering
  cb: () => void
}

export type RoutineCourseSelectionCallback = ({
  course,
  cb,
}: RoutineCourseSelection) => void

export type CalculatorCourseProps = {
  name: string
  credit: number
  gp: number
  grade: string
}

export type CalculatorResultProps = {
  gp: number
  credits: number
  cgpa: number
}

export type HoveredModalProps = {
  isOpen: boolean
  direction: "left" | "right"
}

export type FriendsCourse = {
  courseName: string
  courseId: string
  section: string
  room: string
  timeSlot: string
}

export type FriendsProps = {
  name: string
  sex: string
  img: string
  courses: FriendsCourse[]
}

// cause url have two types and both them contains different properties
export type TernaryFriendsProps = {
  name: string
  sex: string
  img: string
  course?: FriendsCourse
}
