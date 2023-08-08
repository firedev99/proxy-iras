import { login } from "@/lib/validation"
import { useForm } from "@hooks/useForm"
import { Input } from "@components"
import { motion } from "framer-motion"
import { LoginFormWrapper } from "./styles"
import Icon from "@icons"
import { services } from "@/lib/services"

export type AuthCredentials = {
  email: string
  password: string
}

// handle request
async function getUser(values: AuthCredentials) {
  const res = await services.auth(values)
  return res
}

export default function LoginForm() {
  const {
    values,
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
      const res = await getUser(values)
      console.log(res, "client")
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
