import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, formatContactEmail, formatConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // CAPTCHA validation (only if configured)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!formData.captchaToken) {
        return NextResponse.json(
          { success: false, error: 'CAPTCHA-Verifizierung erforderlich' },
          { status: 400 }
        )
      }

      // Verify CAPTCHA with Google
      const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${formData.captchaToken}`
      })

      const captchaResult = await captchaResponse.json()
      
      if (!captchaResult.success) {
        console.error('CAPTCHA verification failed:', captchaResult)
        return NextResponse.json(
          { success: false, error: 'CAPTCHA-Verifizierung fehlgeschlagen' },
          { status: 400 }
        )
      }
    }
    
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
      subject: `Anfrage U.S.-Marktaufbau - ${formData.company}`,
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

    // Determine language from form data or referer
    const isEnglish = formData.language === 'en' || 
                     (typeof formData.referer === 'string' && formData.referer.includes('/en'))
    
    // Send confirmation email to user
    const confirmationContent = formatConfirmationEmail(formData, isEnglish)
    const subject = isEnglish 
      ? 'Confirmation of Your U.S. Market Entry Inquiry - aversis'
      : 'Bestätigung Ihrer U.S.-Marktaufbau Anfrage - aversis'
    
    const confirmationResult = await sendEmail({
      to: formData.email,
      subject: subject,
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