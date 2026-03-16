export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  const body = await readBody(event)

  // Validate form data
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }

  try {
    // TODO: Send email to admin
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({...})
    // await transporter.sendMail({...})

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      artistName: body.artistName,
      timestamp: new Date().toISOString()
    })

    return {
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon.'
    }
  } catch (error) {
    console.error('Contact form error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit contact form'
    })
  }
})
