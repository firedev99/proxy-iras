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
  email: string
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
  name: "spinning-loader"
}

export type StudentProps = {
  studentID: string
  studentName: string
  major: string
  minor?: string
  notificationMessages: {
    messages: string
  }[]
  semesterByYear: string
  year: string
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
    attend: number
    classCount: number
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
  totalClasses: number
  classTime: string
  roomID: string
  grade: string
  semesterByYear: string
  year: string
}
