import { useEffect, useState, createContext } from "react"
import { StudentContextProps, StudentProps, StudentProviderType } from "@types"

export const StudentContext = createContext<StudentContextProps>({
  student: null,
  addStudent: () => {},
  removeStudent: () => {},
})

export function StudentProvider({ children }: StudentProviderType) {
  const [student, setStudent] = useState<StudentProps | null>(null)

  // get the student informations from browser storage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage && !student) {
      let studentInfo = JSON.parse(
        localStorage.getItem("student-info") as string
      )
      setStudent(studentInfo)
    }
  }, [student])

  // assign a student in the context and localstorage
  function addStudent(student: StudentProps) {
    if (typeof window !== "undefined" && window.localStorage) {
      setStudent(student)
      localStorage.setItem("student-info", JSON.stringify(student))
    }
  }

  // remove a student in the context and localstorage
  function removeStudent() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("student-info")
      setStudent(null)
    }
  }

  return (
    <StudentContext.Provider value={{ student, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  )
}
