// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs'

type Data = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true
  })

  try {
    const message = await client.sendAsync({
      text: `Body: ${req.body.message}\n\nEmail: ${req.body.email}`,
      from: process.env.EMAIL as string,
      to: process.env.TO_EMAIL as string,
      subject: 'Receive inquiry'
    })
    console.debug(message)
    res.status(200).json({})
    return
  } catch (err) {
    console.error(err)
    res.status(500).json({})
    return
  }
}
