import { useStudent } from "@/hooks/useStudent"
import { StudentProfileProp } from "@/types"
import { useRouter } from "next/router"
import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"
import { PopupModal } from "@components"
import { useClickOutside } from "@/hooks/useClickOutside"

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  name: string
  setName: Dispatch<SetStateAction<string>>
  studentDetails: StudentProfileProp | null
}

export default function ChangeName({
  open,
  setOpen,
  name,
  setName,
  studentDetails,
}: Props) {
  const nameEditingModalRef = useRef<HTMLDivElement>(null)

  // student context
  const { student } = useStudent()

  // router context
  const router = useRouter()

  // close name editing modal
  const closeNameEdit = () => {
    setName("")
    setOpen(false)
  }

  // handle click outside of the name editing modal
  useClickOutside(nameEditingModalRef, closeNameEdit)

  // edit name on change handler
  const handleNameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }

  // handle name change
  const changeName = () => {
    if (!student) return

    // get previous saved local storage informations
    const studentInfo =
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem(`student-info`) || "{}")
        : {}

    // make a new updated object
    const updatedInformation = {
      ...studentInfo,
      studentName: name,
    }

    // set local storage values
    localStorage.setItem(`saved-${student.studentID}-name`, name)
    localStorage.setItem("student-info", JSON.stringify(updatedInformation))

    // close the modal
    setOpen(false)

    // reload the page
    router.reload()
  }

  // reset back to original name
  const changeBackToOgName = () => {
    if (!studentDetails) return
    setName(studentDetails.studentName)
  }

  if (!student) return <div />

  return (
    <PopupModal
      className="edit_name_modal"
      ref={nameEditingModalRef}
      open={open}
      handler={closeNameEdit}
    >
      <input
        name="text"
        placeholder="Change Name"
        value={name}
        onChange={handleNameOnChange}
        autoComplete="off"
      />

      <button className="save_btn" onClick={changeName}>
        Save
      </button>

      {student.studentName.toLowerCase() !==
        studentDetails?.studentName.toLowerCase() && (
        <button className="back_og" onClick={changeBackToOgName}>
          Back to Original
        </button>
      )}
    </PopupModal>
  )
}
