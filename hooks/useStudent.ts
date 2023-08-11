import { useContext } from "react"
import { StudentContext } from "@/lib/contexts/studentContext"

export function useStudent() {
  const studentServices = useContext(StudentContext)
  return studentServices
}
