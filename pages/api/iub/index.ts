import { NextApiRequest, NextApiResponse } from "next"
import generateCsrfToken from "@/lib/snippets/generateCsrfToken"
import generateIubAuthFlow from "@/lib/snippets/generateIubAuthFlow"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "GET") {
    try {
      // generate a csrf token for post request
      await generateCsrfToken(res)
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("error generating csrf token", error)
      }
      res.status(400).json({ error: "something went wrong" })
    }
  } else if (req.method === "POST") {
    try {
      // generate iub auth flow
      await generateIubAuthFlow(req, res)
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error(error)
      }
      res.status(403).json({ error: "something went wrong" })
    }
  } else {
    // enable only get method calls
    res.status(405).json({ error: "method not allowed!" })
  }
}
