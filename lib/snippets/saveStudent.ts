import path from "path"
import fs from "fs"

type Props = {
  studentID: string
  studentName: string
  email: string
  createdAt: string
}

export async function saveStudent({
  studentID,
  studentName,
  email,
  createdAt,
}: Props) {
  // get the file in the directory
  const filePath = path.join(process.cwd(), "lib/dummy", "students.json")
  let studentList = []

  // get the json file
  const fileContent = fs.readFileSync(filePath, "utf-8")
  studentList = JSON.parse(fileContent)

  // look for the user
  const existingUser = studentList.find(
    (user: any) => user.studentID === studentID
  )

  // save if the user does not exits
  if (!existingUser) {
    const newStudent = {
      studentID,
      studentName,
      email,
      createdAt,
    }

    // write in json file
    studentList.push(newStudent)
    fs.writeFileSync(filePath, JSON.stringify(studentList, null, 2))
  }
}
