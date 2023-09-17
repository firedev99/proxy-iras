import { useState, useEffect } from "react"

type StudentProfileProp = {
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

export function useProfile() {
  const [studentDetails, setStudentDetails] = useState<StudentProfileProp | {}>(
    {}
  )
  const [dummyPictures, setDummyPictures] = useState<string[]>([])

  useEffect(() => {
    ;(async function getProfile() {
      // fetch student profile details from iub api
      const response = await fetch(`/api/iub/profile`)
      if (response.ok) {
        const { student } = await response.json()
        setStudentDetails({
          studentName: student.studentName,
          studentID: student.studentId,
          studentPrimaryImgSrc: `https://iras.iub.edu.bd:8079/photo/${student.studentId}.jpg`,
          studentSecondaryImgSrc: student.googleProfilePicture ?? undefined,
          cgpa: student.cgpa,
          earnedCredit: student.earnedCredit,
          major: student.firstMajor,
          minor: student.minor,
          schoolName: student.minor,
          dob: student.dob,
          birthRegistrationNo: student.birthRegistrationNo,
          nid: student.nid,
          passportNo: student.passportNo,
          bloodGroup: student.bloodGroup,
          cellPhone: student.cellPhone,
          primaryEmail: student.email,
          fathersName: student.fathersName,
          mothersName: student.mothersName,
          presentAddess: student.presentAddess,
          sex: student.sex,
        })

        // generate src links based on their gender
        if (student.sex.toLowerCase() === "male") {
          // generate src links for dummy pictures
          const generatedSrc = [...Array(20)].map(
            (_, i) =>
              `https://res.cloudinary.com/firey/image/upload/v1694607133/iub/male_${
                i + 1
              }.jpg`
          )

          setDummyPictures(generatedSrc)
        } else {
          // generate src links for dummy pictures
          const generatedSrc = [...Array(20)].map(
            (_, i) =>
              `https://res.cloudinary.com/firey/image/upload/v1694607133/iub/female_${
                i + 1
              }.jpg`
          )

          setDummyPictures(generatedSrc)
        }

        // store the google profile picture in localstorage
        if (student.googleProfilePicture && typeof window !== "undefined") {
          localStorage.setItem("google-dp", student.googleProfilePicture)
        }
      }
    })()
  }, [])

  return { studentDetails, dummyPictures }
}
