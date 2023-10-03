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
    context: "Classroom Courses",
  },
  {
    icon: "calender",
    href: "/calender",
    context: "View Calender",
  },
  {
    icon: "user",
    href: "/profile",
    context: "View Profile",
  },
  {
    icon: "chart",
    href: "/helpers",
    context: "Plan Schedule & Calculate GPA",
  },
] as { icon: IconProps["name"]; href: string; context: string }[]
