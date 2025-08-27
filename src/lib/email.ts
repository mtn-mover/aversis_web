import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // Always use explicit SMTP settings for better compatibility
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports like 587
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

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration missing: EMAIL_USER and EMAIL_PASS required')
    }

    const transporter = createTransporter()
    
    const mailOptions = {
      from: `"Aversis Kontaktformular" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
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
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      EMAIL_SERVICE: process.env.EMAIL_SERVICE
    })
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

export function formatContactEmail(formData: any) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background-color: #1e5f99; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .section { margin-bottom: 25px; }
          .label { font-weight: bold; color: #1e5f99; }
          .value { margin-bottom: 10px; }
          .footer { background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>🇨🇭🇺🇸 Neue US-Marktaufbau Anfrage</h2>
        </div>
        
        <div class="content">
          <div class="section">
            <h3 style="color: #1e5f99; border-bottom: 2px solid #ff7f00; padding-bottom: 5px;">Kontaktdaten</h3>
            <div class="value"><span class="label">Name:</span> ${formData.name}</div>
            <div class="value"><span class="label">Position:</span> ${formData.position}</div>
            <div class="value"><span class="label">Unternehmen:</span> ${formData.company}</div>
            <div class="value"><span class="label">E-Mail:</span> <a href="mailto:${formData.email}">${formData.email}</a></div>
            <div class="value"><span class="label">Telefon:</span> <a href="tel:${formData.phone}">${formData.phone}</a></div>
          </div>
          
          <div class="section">
            <h3 style="color: #1e5f99; border-bottom: 2px solid #ff7f00; padding-bottom: 5px;">Unternehmensdaten</h3>
            <div class="value"><span class="label">Unternehmensgröße:</span> ${formData.companySize || 'Nicht angegeben'}</div>
            <div class="value"><span class="label">Aktueller US-Bezug:</span> ${formData.usExport || 'Nicht angegeben'}</div>
          </div>
          
          <div class="section">
            <h3 style="color: #1e5f99; border-bottom: 2px solid #ff7f00; padding-bottom: 5px;">US-Interesse</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #ff7f00; white-space: pre-wrap;">${formData.usInterest}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Diese Anfrage wurde über das Kontaktformular auf aversis-web.vercel.app gesendet.</p>
          <p>Zeitpunkt: ${new Date().toLocaleString('de-CH')}</p>
        </div>
      </body>
    </html>
  `
  
  const textContent = `
Neue Anfrage für US-Marktaufbau

KONTAKTDATEN:
Name: ${formData.name}
Position: ${formData.position}
Unternehmen: ${formData.company}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

UNTERNEHMENSDATEN:
Unternehmensgröße: ${formData.companySize || 'Nicht angegeben'}
Aktueller US-Bezug: ${formData.usExport || 'Nicht angegeben'}

US-INTERESSE:
${formData.usInterest}

---
Diese Anfrage wurde über das Kontaktformular auf aversis-web.vercel.app gesendet.
Zeitpunkt: ${new Date().toLocaleString('de-CH')}
  `.trim()
  
  return {
    html: htmlContent,
    text: textContent
  }
}

export function formatConfirmationEmail(formData: any) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #1e5f99, #ff7f00); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .highlight-box { background-color: #e3f2fd; border-left: 4px solid #1e5f99; padding: 20px; margin: 20px 0; }
          .steps { background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>🇨🇭🇺🇸 Vielen Dank für Ihre US-Marktaufbau Anfrage!</h2>
        </div>
        
        <div class="content">
          <p>Liebe(r) <strong>${formData.name}</strong>,</p>
          
          <p>herzlichen Dank für Ihr Interesse an unserem US-Marktaufbau-Service!</p>
          
          <div class="highlight-box">
            <p><strong>✅ Ihre Anfrage wurde erfolgreich übermittelt</strong></p>
            <p>Wir werden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen melden.</p>
          </div>
          
          <h3 style="color: #1e5f99;">Was passiert als Nächstes?</h3>
          <div class="steps">
            <p><strong>1. Analyse Ihrer Anfrage</strong><br>
            Unser Team prüft Ihre spezifischen US-Marktaufbau-Anforderungen</p>
            
            <p><strong>2. Persönliche Kontaktaufnahme</strong><br>
            Stephan Zwahlen meldet sich persönlich bei Ihnen</p>
            
            <p><strong>3. Terminvereinbarung</strong><br>
            Gemeinsame Terminplanung für Ihr unverbindliches Erstgespräch</p>
          </div>
          
          <p><strong>Ihre Angaben im Überblick:</strong></p>
          <ul>
            <li><strong>Unternehmen:</strong> ${formData.company}</li>
            <li><strong>Position:</strong> ${formData.position}</li>
            <li><strong>US-Interesse:</strong> ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}</li>
          </ul>
          
          <div class="signature">
            <p>Mit besten Grüssen aus der Schweiz</p>
            <p><strong>Stephan Zwahlen</strong><br>
            Interim Manager für US-Marktaufbau<br>
            aversis GmbH</p>
            
            <p>
              📧 <a href="mailto:info@aversis.com">info@aversis.com</a><br>
              📞 <a href="tel:+41338230509">+41 33 823 05 09</a>
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

vielen Dank für Ihr Interesse an unserem US-Marktaufbau-Service!

✅ Ihre Anfrage wurde erfolgreich übermittelt
Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.

Was passiert als Nächstes?

1. Analyse Ihrer Anfrage
   Unser Team prüft Ihre spezifischen US-Marktaufbau-Anforderungen

2. Persönliche Kontaktaufnahme  
   Stephan Zwahlen meldet sich persönlich bei Ihnen

3. Terminvereinbarung
   Gemeinsame Terminplanung für Ihr unverbindliches Erstgespräch

Ihre Angaben im Überblick:
- Unternehmen: ${formData.company}
- Position: ${formData.position}  
- US-Interesse: ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}

Mit besten Grüssen aus der Schweiz
Stephan Zwahlen
Interim Manager für US-Marktaufbau
aversis GmbH

📧 info@aversis.com
📞 +41 33 823 05 09

---
Diese E-Mail wurde automatisch generiert. Bei Fragen können Sie direkt auf diese E-Mail antworten.
  `.trim()
  
  return {
    html: htmlContent,
    text: textContent
  }
}