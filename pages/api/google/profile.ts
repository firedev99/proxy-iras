import generateClient from "@/lib/google/generateClient"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // generate the auth client
  const oAuth2Client = await generateClient(req, res)

  try {
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: oAuth2Client.credentials.id_token as string,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    // get the profile informations from payload
    const payload = ticket.getPayload()
    console.log("payload from profile", payload)

    res.status(200).json({ success: true })
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.log(err)
    }
    res.status(400).json({ success: false })
  }
}
