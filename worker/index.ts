import { EmailMessage } from 'cloudflare:email'
import { createMimeMessage } from 'mimetext'

interface Env {
  ASSETS: Fetcher
  EMAIL: SendEmail
  FROM_EMAIL: string
  TO_EMAIL: string
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method == 'POST' && url.pathname == '/api/inquiry') {
      return handleInquiry(request, env)
    }

    return env.ASSETS.fetch(request)
  }
} satisfies ExportedHandler<Env>

async function handleInquiry(request: Request, env: Env): Promise<Response> {
  const { email, message } = await request.json<{ email: string; message: string }>()

  const msg = createMimeMessage()
  const fromAddr = env.FROM_EMAIL.trim()
  const toAddr = env.TO_EMAIL.trim()

  msg.setSender({ name: 'Fedistar Inquiry', addr: fromAddr })
  msg.setRecipient(toAddr)
  msg.setSubject('Receive inquiry')
  msg.addMessage({
    contentType: 'text/plain',
    data: `Body: ${message}\n\nEmail: ${email}`
  })

  const emailMessage = new EmailMessage(fromAddr, toAddr, msg.asRaw())

  try {
    await env.EMAIL.send(emailMessage)
    return new Response(JSON.stringify({}), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({}), { status: 500 })
  }
}
