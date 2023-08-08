import { firey } from "@/lib/utils"
import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, memo } from "react"
import { InputWrapper } from "./styles"

type InputProps = {
  type: HTMLInputTypeAttribute
  name: string
  value: string
  placeholder?: string
  errStaus?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const CustomInput = memo(function CustomInput({
  type,
  name,
  value,
  placeholder,
  errStaus,
  onChange,
  onBlur,
}: InputProps) {
  // modify the input name
  const _name = firey.camelize(name)

  return (
    <InputWrapper>
      <input
        type={type}
        name={_name}
        placeholder={placeholder}
        spellCheck="false"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          borderColor: errStaus ? "rgba(203, 74, 74, 0.7)" : "initial",
        }}
      />
    </InputWrapper>
  )
})

export default CustomInput
