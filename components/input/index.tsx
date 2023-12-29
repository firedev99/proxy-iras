import { memo, useState } from "react"
import { firey } from "@/lib/utils"
import { InputWrapper, PasswordIconWrapper } from "./styles"
import { InputProps } from "@types"
import Icon from "@/lib/icons"

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
  const [unlockPassword, setUnlockPassword] = useState<boolean>(false)

  return (
    <InputWrapper>
      <input
        type={
          type === "password" ? (unlockPassword ? "text" : "password") : type
        }
        name={_name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          borderColor: errStaus ? "rgba(203, 74, 74, 0.7)" : "initial",
        }}
      />
      {type === "password" && (
        <PasswordIconWrapper onClick={() => setUnlockPassword((prev) => !prev)}>
          {unlockPassword ? (
            <Icon name="eye-open" />
          ) : (
            <Icon name="eye-close" />
          )}
        </PasswordIconWrapper>
      )}
    </InputWrapper>
  )
})

export default CustomInput
