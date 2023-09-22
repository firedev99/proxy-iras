import { memo } from "react"
import { firey } from "@/lib/utils"
import { InputWrapper } from "./styles"
import { InputProps } from "@types"

const CustomInput = memo(function CustomInput({
  type,
  name,
  value,
  placeholder,
  errStaus,
  onChange,
  onBlur,
}: InputProps) {
  const _name = firey.camelize(name)

  return (
    <InputWrapper>
      <input
        type={type}
        name={_name}
        placeholder={placeholder}
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
