import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'hira.metanet.ch',
    port: parseInt(process.env.EMAIL_PORT || '465'),
    secure: process.env.EMAIL_SECURE === 'true' || true, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false // Accept self-signed certificates if needed
    }
  })
}

interface EmailOptions {
  to: string
  subject: string
  text?: string
  html?: string
}

interface ContactFormData {
  name: string
  position: string
  company: string
  email: string
  phone: string
  challenge?: string
  usInterest: string
}

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration missing: EMAIL_USER and EMAIL_PASS required')
    }

    const transporter = createTransporter()

    const mailOptions = {
      from: `"Aversis Contact" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html: html || text
    }

    console.log('Attempting to send email to:', to, 'from:', mailOptions.from)

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId, 'to:', to)

    return {
      success: true,
      messageId: info.messageId
    }
  } catch (error) {
    console.error('Email sending error:', error)
    console.error('Email config check:', {
      EMAIL_HOST: process.env.EMAIL_HOST,
      EMAIL_PORT: process.env.EMAIL_PORT,
      EMAIL_SECURE: process.env.EMAIL_SECURE,
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS
    })

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

export function formatContactEmail(formData: ContactFormData) {
  const challengeLabels: Record<string, string> = {
    'post-merger': 'Post-Merger Integration',
    'stagnation': 'Stagnierender Umsatz',
    'fuehrung': 'Führungswechsel / Change',
    'marketing': 'Marketing & Digitalisierung',
    'kultur': 'Kulturwandel',
    'andere': 'Andere Herausforderung'
  }

  const challengeLabel = challengeLabels[formData.challenge] || formData.challenge || 'Nicht angegeben'

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background-color: #1e293b; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .section { margin-bottom: 25px; }
          .label { font-weight: bold; color: #f59e0b; }
          .value { margin-bottom: 10px; }
          .footer { background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Neue Beratungsanfrage</h2>
        </div>

        <div class="content">
          <div class="section">
            <h3 style="color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 5px;">Kontaktdaten</h3>
            <div class="value"><span class="label">Name:</span> ${formData.name}</div>
            <div class="value"><span class="label">Position:</span> ${formData.position}</div>
            <div class="value"><span class="label">Unternehmen:</span> ${formData.company}</div>
            <div class="value"><span class="label">E-Mail:</span> <a href="mailto:${formData.email}">${formData.email}</a></div>
            <div class="value"><span class="label">Telefon:</span> <a href="tel:${formData.phone}">${formData.phone}</a></div>
          </div>

          <div class="section">
            <h3 style="color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 5px;">Herausforderung</h3>
            <div class="value"><span class="label">Bereich:</span> ${challengeLabel}</div>
          </div>

          <div class="section">
            <h3 style="color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 5px;">Nachricht</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #f59e0b; white-space: pre-wrap;">${formData.usInterest}</div>
          </div>
        </div>

        <div class="footer">
          <p>Diese Anfrage wurde über das Kontaktformular auf aversis.com gesendet.</p>
          <p>Zeitpunkt: ${new Date().toLocaleString('de-CH')}</p>
        </div>
      </body>
    </html>
  `

  const textContent = `
Neue Beratungsanfrage

KONTAKTDATEN:
Name: ${formData.name}
Position: ${formData.position}
Unternehmen: ${formData.company}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

HERAUSFORDERUNG:
${challengeLabel}

NACHRICHT:
${formData.usInterest}

---
Diese Anfrage wurde über das Kontaktformular auf aversis.com gesendet.
Zeitpunkt: ${new Date().toLocaleString('de-CH')}
  `.trim()

  return {
    html: htmlContent,
    text: textContent
  }
}

export function formatConfirmationEmail(formData: ContactFormData, isEnglish: boolean = false) {
  if (isEnglish) {
    return formatConfirmationEmailEnglish(formData)
  }
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #1e293b, #f59e0b); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .highlight-box { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; }
          .steps { background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Vielen Dank für Ihre Anfrage!</h2>
        </div>

        <div class="content">
          <p>Liebe(r) <strong>${formData.name}</strong>,</p>

          <p>herzlichen Dank für Ihr Interesse an einer Zusammenarbeit mit Aversis!</p>

          <div class="highlight-box">
            <p><strong>Ihre Anfrage wurde erfolgreich übermittelt</strong></p>
            <p>Ich werde mich <strong>innerhalb von 24 Stunden</strong> persönlich bei Ihnen melden.</p>
          </div>

          <h3 style="color: #1e293b;">Was passiert als Nächstes?</h3>
          <div class="steps">
            <p><strong>1. Analyse Ihrer Situation</strong><br>
            Ich schaue mir Ihre Anfrage im Detail an</p>

            <p><strong>2. Persönliche Kontaktaufnahme</strong><br>
            Ich melde mich telefonisch oder per E-Mail bei Ihnen</p>

            <p><strong>3. Erstgespräch</strong><br>
            30 Minuten unverbindliches Gespräch - wir finden heraus, ob und wie ich Ihnen helfen kann</p>
          </div>

          <p><strong>Ihre Angaben im Überblick:</strong></p>
          <ul>
            <li><strong>Unternehmen:</strong> ${formData.company}</li>
            <li><strong>Position:</strong> ${formData.position}</li>
            <li><strong>Thema:</strong> ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}</li>
          </ul>

          <div class="signature">
            <p>Freundliche Grüsse</p>
            <p><strong>Stephan Wahlen</strong><br>
            Managing Director<br>
            Aversis GmbH</p>

            <p>
              info@aversis.com<br>
              +41 33 823 05 09
            </p>
          </div>
        </div>

        <div class="footer">
          <p>Diese E-Mail wurde automatisch generiert. Bei Fragen können Sie direkt auf diese E-Mail antworten.</p>
        </div>
      </body>
    </html>
  `

  const textContent = `
Liebe(r) ${formData.name},

vielen Dank für Ihr Interesse an einer Zusammenarbeit mit Aversis!

Ihre Anfrage wurde erfolgreich übermittelt.
Ich werde mich innerhalb von 24 Stunden persönlich bei Ihnen melden.

Was passiert als Nächstes?

1. Analyse Ihrer Situation
   Ich schaue mir Ihre Anfrage im Detail an

2. Persönliche Kontaktaufnahme
   Ich melde mich telefonisch oder per E-Mail bei Ihnen

3. Erstgespräch
   30 Minuten unverbindliches Gespräch - wir finden heraus, ob und wie ich Ihnen helfen kann

Ihre Angaben im Überblick:
- Unternehmen: ${formData.company}
- Position: ${formData.position}
- Thema: ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}

Freundliche Grüsse
Stephan Wahlen
Managing Director
Aversis GmbH

info@aversis.com
+41 33 823 05 09

---
Diese E-Mail wurde automatisch generiert. Bei Fragen können Sie direkt auf diese E-Mail antworten.
  `.trim()

  return {
    html: htmlContent,
    text: textContent
  }
}

export function formatConfirmationEmailEnglish(formData: ContactFormData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #1e293b, #f59e0b); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .highlight-box { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; }
          .steps { background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Thank You for Your Inquiry!</h2>
        </div>

        <div class="content">
          <p>Dear <strong>${formData.name}</strong>,</p>

          <p>Thank you for your interest in working with Aversis!</p>

          <div class="highlight-box">
            <p><strong>Your inquiry has been successfully submitted</strong></p>
            <p>I will personally contact you <strong>within 24 hours</strong>.</p>
          </div>

          <h3 style="color: #1e293b;">What happens next?</h3>
          <div class="steps">
            <p><strong>1. Analysis of Your Situation</strong><br>
            I will review your inquiry in detail</p>

            <p><strong>2. Personal Contact</strong><br>
            I will reach out to you by phone or email</p>

            <p><strong>3. Initial Consultation</strong><br>
            30-minute non-binding conversation - we'll find out if and how I can help you</p>
          </div>

          <p><strong>Your details overview:</strong></p>
          <ul>
            <li><strong>Company:</strong> ${formData.company}</li>
            <li><strong>Position:</strong> ${formData.position}</li>
            <li><strong>Topic:</strong> ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}</li>
          </ul>

          <div class="signature">
            <p>Best regards</p>
            <p><strong>Stephan Wahlen</strong><br>
            Managing Director<br>
            Aversis GmbH</p>

            <p>
              info@aversis.com<br>
              +41 33 823 05 09
            </p>
          </div>
        </div>

        <div class="footer">
          <p>This email was automatically generated. You can reply directly to this email if you have any questions.</p>
        </div>
      </body>
    </html>
  `

  const textContent = `
Dear ${formData.name},

Thank you for your interest in working with Aversis!

Your inquiry has been successfully submitted.
I will personally contact you within 24 hours.

What happens next?

1. Analysis of Your Situation
   I will review your inquiry in detail

2. Personal Contact
   I will reach out to you by phone or email

3. Initial Consultation
   30-minute non-binding conversation - we'll find out if and how I can help you

Your details overview:
- Company: ${formData.company}
- Position: ${formData.position}
- Topic: ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}

Best regards
Stephan Wahlen
Managing Director
Aversis GmbH

info@aversis.com
+41 33 823 05 09

---
This email was automatically generated. You can reply directly to this email if you have any questions.
  `.trim()

  return {
    html: htmlContent,
    text: textContent
  }
}
