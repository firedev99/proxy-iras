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

  // remove the google tokens that was saved in cookies
  res.setHeader("Set-Cookie", [
    serialize("g-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(1),
    }),

    // remove the refresh token that was saved in cookies
    serialize("r-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(1),
    }),

    // remove the profile picture that was saved in cookies
    serialize("gsp", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(1),
    }),
  ])

  // Send a response indicating that the cookies have been cleared
  res.status(200).json({ message: "Cookies cleared successfully" })
}
