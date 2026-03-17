import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  // Raw body read for logging
  // Robust body parsing
  let body: any
  try {
    const rawBody = await readBody(event)
    if (rawBody) {
      body = rawBody
    } else {
      // Fallback: try raw body reading
      const textBody = await readRawBody(event, 'utf-8')
      if (textBody) {
        body = JSON.parse(textBody)
      } else {
        body = {}
      }
    }
  } catch (e) {
    console.error('Error parsing body:', e)
    body = {}
  }

  console.log('--- DEBUG: PROCESSED BODY ---')
  console.log(JSON.stringify(body, null, 2))

  // Validate form data - check individual fields with logging
  if (!body.name) console.error('Missing field: name')
  if (!body.email) console.error('Missing field: email')
  if (!body.message) console.error('Missing field: message')

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Vui lòng điền đầy đủ các trường bắt buộc (Tên, Email, Tin nhắn).'
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Địa chỉ email không hợp lệ.'
    })
  }

  try {
    // Check if configuration is missing
    if (!config.smtpUser || !config.smtpPass) {
      console.error('SMTP configuration is missing in runtimeConfig')
      throw new Error('Cấu hình SMTP chưa hoàn tất trong tệp .env')
    }

    // Send email to admin
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort,
      secure: config.smtpPort === 465,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      },
      connectionTimeout: 10000, 
      greetingTimeout: 10000
    })

    const mailOptions = {
      from: `"${body.name}" <${config.smtpUser}>`,
      replyTo: body.email,
      to: config.adminEmail,
      subject: `[OMGFamily Contact] - ${body.subject || 'No Subject'} - From: ${body.name}`,
      text: `
        Họ và tên: ${body.name}
        Nghệ danh: ${body.artistName || 'N/A'}
        Email: ${body.email}
        Chủ đề: ${body.subject || 'N/A'}
        
        Nội dung:
        ${body.message}
      `,
      html: `
        <h3>Thông tin liên hệ từ Oscar Music Group</h3>
        <p><strong>Họ và tên:</strong> ${body.name}</p>
        <p><strong>Nghệ danh:</strong> ${body.artistName || 'N/A'}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Chủ đề:</strong> ${body.subject || 'N/A'}</p>
        <br>
        <p><strong>Nội dung:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    console.log('Contact form submission sent via email successfully')

    return {
      success: true,
      message: 'Cảm ơn! Chúng tôi đã nhận được yêu cầu và sẽ phản hồi sớm nhất qua email.'
    }
  } catch (error: any) {
    console.error('SERVER CONTACT API ERROR:', error.message)
    throw createError({
      statusCode: 500,
      statusMessage: `Lỗi: ${error.message}. Vui lòng thử lại sau.`
    })
  }
})
