import { NextApiResponse } from "next"
import { firey } from "../utils"
import { serialize } from "cookie"

export default async function generateCsrfToken(res: NextApiResponse) {
  // generate a CSRF token
  const csrfToken = firey.uniqueID()

  // set the CSRF token in a SameSite=Lax cookie
  const csrfCookie = serialize("csrfToken", csrfToken, {
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  })

  res.setHeader("Set-Cookie", csrfCookie)
  res.status(200).json(csrfToken)
}
