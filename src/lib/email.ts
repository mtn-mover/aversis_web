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

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration missing: EMAIL_USER and EMAIL_PASS required')
    }

    const transporter = createTransporter()
    
    const mailOptions = {
      from: `"aversis Contact Form" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
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
          <h2>🇨🇭🇺🇸 Neue U.S.-Marktaufbau Anfrage</h2>
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
            <div class="value"><span class="label">Unternehmensgrösse:</span> ${formData.companySize || 'Nicht angegeben'}</div>
            <div class="value"><span class="label">Aktueller U.S.-Bezug:</span> ${formData.usExport || 'Nicht angegeben'}</div>
          </div>
          
          <div class="section">
            <h3 style="color: #1e5f99; border-bottom: 2px solid #ff7f00; padding-bottom: 5px;">U.S.-Interesse</h3>
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
Neue Anfrage für U.S.-Marktaufbau

KONTAKTDATEN:
Name: ${formData.name}
Position: ${formData.position}
Unternehmen: ${formData.company}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

UNTERNEHMENSDATEN:
Unternehmensgrösse: ${formData.companySize || 'Nicht angegeben'}
Aktueller U.S.-Bezug: ${formData.usExport || 'Nicht angegeben'}

U.S.-INTERESSE:
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

export function formatConfirmationEmail(formData: any, isEnglish: boolean = false) {
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
          <h2>🇨🇭🇺🇸 Vielen Dank für Ihre U.S.-Marktaufbau Anfrage!</h2>
        </div>
        
        <div class="content">
          <p>Liebe(r) <strong>${formData.name}</strong>,</p>
          
          <p>herzlichen Dank für Ihr Interesse an unserem U.S.-Marktaufbau-Service!</p>
          
          <div class="highlight-box">
            <p><strong>✅ Ihre Anfrage wurde erfolgreich übermittelt</strong></p>
            <p>Wir werden uns <strong>innerhalb von 24 Stunden</strong> bei Ihnen melden.</p>
          </div>
          
          <h3 style="color: #1e5f99;">Was passiert als Nächstes?</h3>
          <div class="steps">
            <p><strong>1. Analyse Ihrer Anfrage</strong><br>
            Unser Team prüft Ihre spezifischen U.S.-Marktaufbau-Anforderungen</p>
            
            <p><strong>2. Persönliche Kontaktaufnahme</strong><br>
            Stephan Zwahlen meldet sich persönlich bei Ihnen</p>
            
            <p><strong>3. Terminvereinbarung</strong><br>
            Gemeinsame Terminplanung für Ihr unverbindliches Erstgespräch</p>
          </div>
          
          <p><strong>Ihre Angaben im Überblick:</strong></p>
          <ul>
            <li><strong>Unternehmen:</strong> ${formData.company}</li>
            <li><strong>Position:</strong> ${formData.position}</li>
            <li><strong>U.S.-Interesse:</strong> ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}</li>
          </ul>
          
          <div class="signature">
            <p>Freundliche Grüsse</p>
            <p><strong>Stephan Zwahlen</strong><br>
            Interim Manager für U.S.-Marktaufbau<br>
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

vielen Dank für Ihr Interesse an unserem U.S.-Marktaufbau-Service!

✅ Ihre Anfrage wurde erfolgreich übermittelt
Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.

Was passiert als Nächstes?

1. Analyse Ihrer Anfrage
   Unser Team prüft Ihre spezifischen U.S.-Marktaufbau-Anforderungen

2. Persönliche Kontaktaufnahme  
   Stephan Zwahlen meldet sich persönlich bei Ihnen

3. Terminvereinbarung
   Gemeinsame Terminplanung für Ihr unverbindliches Erstgespräch

Ihre Angaben im Überblick:
- Unternehmen: ${formData.company}
- Position: ${formData.position}  
- U.S.-Interesse: ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}

Freundliche Grüsse
Stephan Zwahlen
Interim Manager für U.S.-Marktaufbau
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

export function formatConfirmationEmailEnglish(formData: any) {
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
          <h2>🇨🇭🇺🇸 Thank You for Your U.S. Market Entry Inquiry!</h2>
        </div>
        
        <div class="content">
          <p>Dear <strong>${formData.name}</strong>,</p>
          
          <p>Thank you for your interest in our U.S. market entry services!</p>
          
          <div class="highlight-box">
            <p><strong>✅ Your inquiry has been successfully submitted</strong></p>
            <p>We will contact you <strong>within 24 hours</strong>.</p>
          </div>
          
          <h3 style="color: #1e5f99;">What happens next?</h3>
          <div class="steps">
            <p><strong>1. Analysis of Your Inquiry</strong><br>
            Our team reviews your specific U.S. market entry requirements</p>
            
            <p><strong>2. Personal Contact</strong><br>
            Stephan Zwahlen will personally reach out to you</p>
            
            <p><strong>3. Appointment Scheduling</strong><br>
            Joint scheduling for your non-binding initial consultation</p>
          </div>
          
          <p><strong>Your details overview:</strong></p>
          <ul>
            <li><strong>Company:</strong> ${formData.company}</li>
            <li><strong>Position:</strong> ${formData.position}</li>
            <li><strong>U.S. Interest:</strong> ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}</li>
          </ul>
          
          <div class="signature">
            <p>Best regards</p>
            <p><strong>Stephan Zwahlen</strong><br>
            Interim Manager for U.S. Market Entry<br>
            aversis GmbH</p>
            
            <p>
              📧 <a href="mailto:info@aversis.com">info@aversis.com</a><br>
              📞 <a href="tel:+41338230509">+41 33 823 05 09</a>
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

Thank you for your interest in our U.S. market entry services!

✅ Your inquiry has been successfully submitted
We will contact you within 24 hours.

What happens next?

1. Analysis of Your Inquiry
   Our team reviews your specific U.S. market entry requirements

2. Personal Contact  
   Stephan Zwahlen will personally reach out to you

3. Appointment Scheduling
   Joint scheduling for your non-binding initial consultation

Your details overview:
- Company: ${formData.company}
- Position: ${formData.position}  
- U.S. Interest: ${formData.usInterest.length > 100 ? formData.usInterest.substring(0, 100) + '...' : formData.usInterest}

Best regards
Stephan Zwahlen
Interim Manager for U.S. Market Entry
aversis GmbH

📧 info@aversis.com
📞 +41 33 823 05 09

---
This email was automatically generated. You can reply directly to this email if you have any questions.
  `.trim()
  
  return {
    html: htmlContent,
    text: textContent
  }
}