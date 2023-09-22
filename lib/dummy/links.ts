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
    href: "/courses/all",
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
  {
    icon: "square-stack",
    href: "/preschedule",
    context: "Plan Schedule",
  },
] as { icon: IconProps["name"]; href: string; context: string }[]
