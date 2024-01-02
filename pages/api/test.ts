import { NextApiRequest, NextApiResponse } from "next"
import { sql } from "@vercel/postgres"

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const id = request.query.id as string
    const name = request.query.name as string
    const email = request.query.email as string
    const contact = request.query.contact as string

    // if (!petName || !ownerName) throw new Error("Pet and owner names required")
    await sql`
      INSERT INTO Pets (id, name, email, contact)
      VALUES (${id}, ${name}, ${email}, ${contact});
    `
    // await sql`
    //   UPDATE Students
    //     SET image = 'agunbhaiershundorpicture.jpg'
    //     WHERE id = ${id}
    // `
  } catch (error) {
    return response.status(500).json({ error })
  }

  const students = await sql`SELECT * FROM Students;`
  return response.status(200).json({ students })
}

// export default async function handler(
//   request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   try {
//     const result = await sql`CREATE TABLE Students (
//         id VARCHAR(50) PRIMARY KEY NOT NULL,
//         name VARCHAR NOT NULL,
//         email VARCHAR(100) UNIQUE NOT NULL,
//         contact VARCHAR(50),
//         image VARCHAR,
//         joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       );`

//     return response.status(200).json({ result })
//   } catch (error) {
//     return response.status(500).json({ error })
//   }
// }
