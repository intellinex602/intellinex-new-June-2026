export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { firstName, lastName, email, phone, company, service, message } = req.body

  if (!firstName || !lastName || !email || !message || !company) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    // Send email to admin
    const adminEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL_TO || 'sales.services@intellinex.in'],
        subject: `New Inquiry from ${company}`,
        html: adminEmailHtml,
      }),
    })

    if (!response.ok) {
      throw new Error(`Resend API returned ${response.status}`)
    }

    // Also send a thank you email to the user
    const userEmailHtml = `
      <h2>Thank you for contacting Intellinex Technologies, ${firstName}!</h2>
      <p>We have received your inquiry and our enterprise team will get back to you within 2 business hours.</p>
      <p><strong>Your Message:</strong></p>
      <p>${message}</p>
      <br />
      <p>Best Regards,</p>
      <p>The Intellinex Team</p>
    `

    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'Acme <onboarding@resend.dev>',
    //     to: [email],
    //     subject: 'We received your inquiry - Intellinex Technologies',
    //     html: userEmailHtml,
    //   }),
    // })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
