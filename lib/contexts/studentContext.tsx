import { useEffect, useState, createContext } from "react"
import { StudentContextProps, StudentProps, StudentProviderType } from "@types"

export const StudentContext = createContext<StudentContextProps>({
  student: null,
  addStudent: () => {},
  removeStudent: () => {},
})

export function StudentProvider({ children }: StudentProviderType) {
  const [student, setStudent] = useState<StudentProps | null>(null)

  // get the student informations from  localstorage
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
      // get previously saved picture
      const previouslySavedPicture = localStorage.getItem(
        `saved-${student.studentID}-picture`
      )

      // get previously saved name
      const previouslySavedName = localStorage.getItem(
        `saved-${student.studentID}-name`
      )

      // assign student in the state
      setStudent({
        ...student,
        studentName: previouslySavedName ?? student.studentName,
        picture: previouslySavedPicture ?? student.picture,
      })

      // set student details in the local storage
      localStorage.setItem(
        "student-info",
        JSON.stringify({
          ...student,
          studentName: previouslySavedName ?? student.studentName,
          picture: previouslySavedPicture ?? student.picture,
        })
      )

      // store the profile picture in the local storage
      if (!previouslySavedPicture) {
        localStorage.setItem(
          `saved-${student.studentID}-picture`,
          student.picture
        )
      }
    }
  }

  // remove a student from the context and localstorage
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
