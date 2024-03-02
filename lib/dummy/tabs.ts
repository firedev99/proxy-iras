import { RoutineTab } from "@/types"

export const routineTabs = [
  { slide: "0", label: "Offered Courses" },
  { slide: "1", label: "Foundation" },
  { slide: "2", label: "Core" },
  { slide: "3", label: "Major" },
  { slide: "4", label: "Minor" },
] as RoutineTab[]

const [all, foundation, core, major, minor] = routineTabs
export const tabs = [all, foundation, core, major, minor]
