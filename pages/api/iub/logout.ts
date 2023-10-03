import { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // enable only delete method calls
  if (req.method !== "DELETE") {
    res.status(405).json({ message: "method not allowed!" })
  }

  res.setHeader("Set-Cookie", [
    // remove the user tokens of iub that was saved in cookies
    serialize("user-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(1),
    }),

    // remove the student id that was saved in cookies
    serialize("_id", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(1),
    }),
  ])

  // Send a response indicating that the cookies have been cleared
  res.status(200).json({ message: "Cookies cleared successfully" })
}
