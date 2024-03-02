import { StudentProfileProp } from "@/types"
import { useState, useEffect } from "react"

export function useProfile() {
  const [studentDetails, setStudentDetails] =
    useState<StudentProfileProp | null>(null)
  const [dummyPictures, setDummyPictures] = useState<string[]>([])

  useEffect(() => {
    ;(async function getProfile() {
      // fetch student profile details from iub api
      const response = await fetch(`/api/iub/profile`)
      if (response.ok) {
        const { student } = await response.json()
        // set the student details
        setStudentDetails({
          studentName: student.studentName,
          studentID: student.studentId,
          studentPrimaryImgSrc: `${process.env.NEXT_PUBLIC_IUB_API}/photo/${student.studentId}.jpg`,
          studentSecondaryImgSrc: student.googleProfilePicture ?? undefined,
          cgpa: student.cgpa,
          earnedCredit: student.earnedCredit,
          major: student.firstMajor,
          minor: student.minor,
          schoolName: student.schoolName,
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
          // generate src links for dummy pictures for male
          const generatedSrc = [...Array(20)].map(
            (_, i) =>
              `https://res.cloudinary.com/firey/image/upload/v1708816390/iub/male_${
                i + 1
              }.jpg`
          )

          // set the dummy pictures in state
          setDummyPictures(generatedSrc)
        } else {
          // generate src links for dummy pictures for female
          const generatedSrc = [...Array(20)].map(
            (_, i) =>
              `https://res.cloudinary.com/firey/image/upload/v1708816390/iub/female_${
                i + 1
              }.jpg`
          )

          // set the dummy pictures in state
          setDummyPictures(generatedSrc)
        }

        // store the google profile picture in localstorage
        if (typeof window !== "undefined" && student.googleProfilePicture) {
          localStorage.setItem(
            `saved-${student.studentId}-gsp`,
            student.googleProfilePicture
          )
        }
      }
    })()
  }, [])

  // return the student details and dummy pictures
  return { studentDetails, dummyPictures }
}
