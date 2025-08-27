import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Basic validation
    const requiredFields = ['name', 'position', 'company', 'email', 'phone', 'usInterest']
    const missingFields = requiredFields.filter(field => !formData[field]?.trim())
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Pflichtfelder fehlen: ' + missingFields.join(', ') },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Create email content
    const subject = `Anfrage US-Marktaufbau - ${formData.company}`
    
    const emailBody = `
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

    // Here you would normally send the email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For now, we'll log the email and return success
    console.log('Email to send to info@aversis.com:')
    console.log('Subject:', subject)
    console.log('Body:', emailBody)
    
    // Simulate sending confirmation email to user
    const confirmationSubject = 'Bestätigung Ihrer US-Marktaufbau Anfrage'
    const confirmationBody = `
Liebe(r) ${formData.name},

vielen Dank für Ihr Interesse an unserem US-Marktaufbau-Service!

Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.

Ihre Angaben im Überblick:
- Unternehmen: ${formData.company}
- US-Interesse: ${formData.usInterest.substring(0, 100)}${formData.usInterest.length > 100 ? '...' : ''}

Mit besten Grüssen
Stephan Zwahlen
aversis GmbH

---
Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht auf diese E-Mail.
    `.trim()

    console.log('Confirmation email to send to', formData.email)
    console.log('Subject:', confirmationSubject)
    console.log('Body:', confirmationBody)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Anfrage erfolgreich versendet'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Server-Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    )
  }
}