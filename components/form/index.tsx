import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { Input } from "@components"
import { useForm } from "@hooks/useForm"
import { useToast } from "@hooks/useToast"
import { useStudent } from "@hooks/useStudent"
import { services } from "@/lib/services"
import { login } from "@/lib/validation"
import { firey } from "@/lib/utils"
import { greetingLines } from "@/lib/dummy/greetings"
import { LoginFormWrapper } from "./styles"
import { AuthCredentials } from "@types"
import Icon from "@icons"
import Link from "next/link"
import CryptoJS from "crypto-js"

export default function LoginForm() {
  const { addToast } = useToast()
  const { addStudent } = useStudent()
  const router = useRouter()
  const [permission, setPermission] = useState<boolean>(true)
  const greeting = firey.generateRandomValue(greetingLines)

  const callbackURL = router.query.callback as string | undefined

  const handlePermission = (e: ChangeEvent<HTMLInputElement>) =>
    setPermission((prev) => !prev)

  // handle form actions
  const {
    values,
    setValues,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleFormSubmit,
  } = useForm({
    formValues: {
      user: "",
      password: "",
    } as AuthCredentials,
    onSubmit: async function (values) {
      if (!permission) {
        addToast(`You need to agree to the terms and policy to log in 🤐`)
        setIsSubmitting(false)
        return
      }
      // get the csrf token
      const csrfTokenResponse = await fetch(`/api/iub`)
      const csrfToken = await csrfTokenResponse.json()

      // iv key
      const ivUTF8 = CryptoJS.enc.Utf8.parse(
        process.env.NEXT_PUBLIC_AES_IV_KEY as string
      )

      // secret key
      const secretKeyUTF8 = CryptoJS.enc.Utf8.parse(
        process.env.NEXT_PUBLIC_AES_SECRET_KEY as string
      )

      // ecrypt the plain text
      const encrypted = CryptoJS.AES.encrypt(values.password, secretKeyUTF8, {
        iv: ivUTF8,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      })

      // set the encrypted text into base64 format
      const encryptedPass = encrypted.toString()

      // request to fetch student data along with csrf token
      const response = await services.auth(
        { user: values.user, password: encryptedPass },
        csrfToken
      )

      if (response.ok) {
        const { student } = await response.json()
        addStudent(student)

        if (callbackURL) {
          // redirect to the page it logged out from or asked to visit
          setTimeout(() => router.push(`/${callbackURL}`), 2000)
        } else {
          // redirect to home page
          setTimeout(() => router.reload(), 2000)
        }

        addToast(`${greeting} ${student.studentName}`)
        setValues({ user: "", password: "" })
      } else {
        addToast(`user id or password is incorrent😔`)
      }

      setIsSubmitting(false)
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
        name="User"
        placeholder="Student ID"
        value={values.user}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("user")}
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
      <div className="permission_checkbox">
        <input
          type="checkbox"
          id="permission"
          name="scales"
          checked={permission}
          onChange={handlePermission}
        />
        <label htmlFor="permission">
          By signing in, you agree to our{" "}
          <Link href="/terms/privacy">Privacy Policy</Link> and the{" "}
          <Link href="/terms">Terms and Conditions</Link>.
        </label>
      </div>
      <motion.button
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.33 }}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Icon name="spinning-loader" />
        ) : (
          <span className="btn">Login</span>
        )}
      </motion.button>
    </LoginFormWrapper>
  )
}
