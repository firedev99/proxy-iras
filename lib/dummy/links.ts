import { IconProps } from "@/types"

export const upperLinks = [
  {
    icon: "home",
    href: "/",
    context: "Dashboard",
  },
  {
    icon: "checkboard",
    href: "/courses",
    context: "View Courses",
  },
  {
    icon: "calender",
    href: "/courses/works",
    context: "Works & Announcements",
  },
  {
    icon: "user",
    href: "/profile",
    context: "View Profile",
  },
  {
    icon: "chart",
    href: "/gpacalculator",
    context: "Calculate GPA",
  },
] as { icon: IconProps["name"]; href: string; context: string }[]
