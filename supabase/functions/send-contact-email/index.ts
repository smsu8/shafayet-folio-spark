// index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { name, email, message } = await req.json()

  const body = `
    Neue Nachricht von: ${name} (${email})

    Nachricht:
    ${message}
  `

  const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY")!
  const TO_EMAIL = Deno.env.get("TO_EMAIL")!

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: "noreply@deinedomain.de" },
      subject: "Neue Kontaktanfrage",
      content: [{ type: "text/plain", value: body }],
    }),
  })

  if (!response.ok) {
    return new Response("Fehler beim Senden", { status: 500 })
  }

  return new Response("E-Mail gesendet!", { status: 200 })
})
