// errors with string as it's key
export type CustomHookFormErrorType = {
  [key: string]: string | null
}

export function login<T extends CustomHookFormErrorType>(values: T) {
  let errors: CustomHookFormErrorType = {}

  if (!values.email) {
    errors.user = "user id required"
  } else {
    errors.email = null
  }

  if (!values.password) {
    errors.password = "password required"
  } else if (values.password.length < 6) {
    errors.password = "password must be atleast 6 characters"
  } else {
    errors.password = null
  }

  return errors
}
