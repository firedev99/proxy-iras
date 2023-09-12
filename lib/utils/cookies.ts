import { serialize, CookieSerializeOptions } from "cookie"
import { NextApiResponse } from "next"

export const SetCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object" ? JSON.stringify(value) : String(value)

  res.setHeader(
    "Set-Cookie",
    serialize(name, stringValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      ...options,
    })
  )
}
