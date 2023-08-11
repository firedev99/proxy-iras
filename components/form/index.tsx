import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Input } from "@components"
import { useForm } from "@hooks/useForm"
import { useToast } from "@hooks/useToast"
import { useStudent } from "@hooks/useStudent"
import { services } from "@/lib/services"
import { login } from "@/lib/validation"
import { firey } from "@/lib/utils"
import { greetingLines } from "@/lib/dummy/greetings"
import Icon from "@icons"
import { LoginFormWrapper } from "./styles"
import { AuthCredentials } from "@types"

export default function LoginForm() {
  const { addToast } = useToast()
  const { addStudent } = useStudent()
  const router = useRouter()
  const greeting = firey.generateRandomValue(greetingLines)

  // handle form actions
  const {
    values,
    setValues,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    handleFormSubmit,
  } = useForm({
    formValues: {
      email: "",
      password: "",
    } as AuthCredentials,
    onSubmit: async function (values) {
      const res = await services.auth(values)
      if (res.message === "Success") {
        setValues({ email: "", password: "" })
        addStudent(res.student)
        addToast(`${greeting} ${res.student.studentName}`)
        setTimeout(() => router.refresh(), 2500)
      } else {
        addToast(`email or password is incorrent😔`)
      }
    },
    validationFunc: login,
  })

  // check if the input has any error status
  function errStatus(key: string): boolean {
    return errors.hasOwnProperty(key) && errors[key] !== null
  }

  return (
    <LoginFormWrapper onSubmit={handleFormSubmit}>
      <h1>Login</h1>
      <span>Enter the details of your IRAS account to log in.</span>
      <Input
        type="text"
        name="Email"
        placeholder="Student ID"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("email")}
      />
      <Input
        type="password"
        name="Password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("password")}
      />
      <motion.button
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.33 }}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Icon name="spinning-loader" /> : <span>Login</span>}
      </motion.button>
    </LoginFormWrapper>
  )
}
