import { NextApiRequest, NextApiResponse } from "next"
import generateCsrfToken from "@/lib/snippets/generateCsrfToken"
import generateIubAuthFlow from "@/lib/snippets/generateIubAuthFlow"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await generateCsrfToken(res)
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("error generating csrf token", error)
        res.status(400).json({ error: "something went wrong" })
      }
    }
  } else if (req.method === "POST") {
    try {
      await generateIubAuthFlow(req, res)
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error(error)
        res.status(403).json({ error: "something went wrong" })
      }
    }
  } else {
    res.status(405).json({ error: "method not allowed!" })
  }
}