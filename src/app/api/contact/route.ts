import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, formatContactEmail, formatConfirmationEmail } from '@/lib/email'

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

    // Send notification email to aversis
    const contactContent = formatContactEmail(formData)
    const notificationResult = await sendEmail({
      to: 'info@aversis.com',
      subject: `Anfrage US-Marktaufbau - ${formData.company}`,
      text: contactContent.text,
      html: contactContent.html
    })

    if (!notificationResult.success) {
      console.error('Failed to send notification email:', notificationResult.error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Fehler beim Senden der E-Mail: ' + notificationResult.error,
          details: notificationResult.error
        },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const confirmationContent = formatConfirmationEmail(formData)
    const confirmationResult = await sendEmail({
      to: formData.email,
      subject: 'Bestätigung Ihrer US-Marktaufbau Anfrage - aversis',
      text: confirmationContent.text,
      html: confirmationContent.html
    })

    // Even if confirmation email fails, we still consider it a success
    // since the main notification was sent
    if (!confirmationResult.success) {
      console.error('Failed to send confirmation email:', confirmationResult.error)
    }

    console.log(`Contact form submission from ${formData.company} (${formData.name}) processed successfully`)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Anfrage erfolgreich versendet',
      notificationSent: notificationResult.success,
      confirmationSent: confirmationResult.success
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Server-Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    )
  }
}