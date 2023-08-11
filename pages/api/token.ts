import type { NextApiRequest, NextApiResponse } from "next"
import { services } from "@/lib/services"
import { setCookie } from "@/lib/utils/cookies"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // allow only /POST requests
  if (req.method !== "POST") {
    res.status(405).json({ message: "method not allowed!" })
  }

  // check again for the credentials
  const body = req.body
  if (!body.email || !body.password) {
    return res.status(400).json({ data: "credentials are missing" })
  }

  const response = await services.getToken(body)
  const token = response.data[0].access_token
  const expires = response.data[0].expires
  setCookie(res, "user-token", token, { path: "/", expires: new Date(expires) })

  // return the data
  return res
    .status(200)
    .json({ message: response.message, iub: response.data[0] })
}
