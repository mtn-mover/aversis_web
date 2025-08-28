'use client'

import { useState, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'

interface FormData {
  name: string
  position: string
  company: string
  email: string
  phone: string
  usInterest: string
  companySize: string
  usExport: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    position: '',
    company: '',
    email: '',
    phone: '',
    usInterest: '',
    companySize: '',
    usExport: ''
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showValidationErrors, setShowValidationErrors] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.position.trim()) newErrors.position = 'Position is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email address required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.usInterest.trim()) newErrors.usInterest = 'Please describe your U.S. interest'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setShowValidationErrors(true)
    
    if (!validateForm()) {
      setErrorMessage('Please fill in all required fields.')
      return
    }
    
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !captchaToken) {
      setErrorMessage('Please confirm that you are not a robot.')
      return
    }
    
    setIsSubmitting(true)
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // Reset form
        setFormData({
          name: '',
          position: '',
          company: '',
          email: '',
          phone: '',
          usInterest: '',
          companySize: '',
          usExport: ''
        })
        setCaptchaToken(null)
        recaptchaRef.current?.reset()
        setShowValidationErrors(false)
        setErrorMessage('')
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        const message = errorData.error || 'Error sending message'
        setErrorMessage(message)
        console.error('API Error:', response.status, errorData)
      }
    } catch (error) {
      console.error('Network Error:', error)
      setErrorMessage('Network error. Please check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-20 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-aversis-dark mb-6">
                Thank You for Your Inquiry!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We have received your message and will contact you within 24 hours. 
                Our team is already preparing an initial assessment for your U.S. market entry project.
              </p>
              <div className="bg-blue-50 border-l-4 border-aversis-blue p-6 mb-8 text-left">
                <h3 className="font-semibold text-aversis-dark mb-2">What happens next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Analysis of your U.S. market entry inquiry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Personal contact by Stephan Zwahlen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Appointment proposal for non-binding initial consultation</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => window.location.href = '/en'}
                className="btn-primary px-8 py-4"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center mb-8">
              {/* Swiss to US Flag Animation */}
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg">
                <div className="relative">
                  <Image 
                    src="/images/swiss_flag.jpg" 
                    alt="Swiss Flag" 
                    width={40}
                    height={40}
                    className="rounded-sm shadow-sm"
                  />
                </div>
                <svg className="w-6 h-6 text-aversis-blue animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                <div className="relative">
                  <Image 
                    src="/images/us_flag.svg" 
                    alt="U.S. Flag" 
                    width={60}
                    height={40}
                    className="rounded-sm shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-aversis-dark mb-6 leading-tight">
              <span className="text-aversis-blue">Non-binding</span><br/>
              <span className="text-aversis-orange">Initial Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discuss your U.S. market entry plans with an experienced interim manager. 
              Free initial consultation with concrete recommendations for your next step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Your Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {showValidationErrors && errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue ${
                        errors.position ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Managing Director, CEO, etc."
                    />
                    {showValidationErrors && errors.position && <p className="mt-1 text-sm text-red-600">{errors.position}</p>}
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Company Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {showValidationErrors && errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                      >
                        <option value="">Please select</option>
                        <option value="< 10 employees">&lt; 10 employees</option>
                        <option value="10-50 employees">10-50 employees</option>
                        <option value="50-200 employees">50-200 employees</option>
                        <option value="> 200 employees">&gt; 200 employees</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="usExport" className="block text-sm font-medium text-gray-700 mb-2">
                        Current U.S. Connection
                      </label>
                      <select
                        id="usExport"
                        name="usExport"
                        value={formData.usExport}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                      >
                        <option value="">Please select</option>
                        <option value="No U.S. exports">No U.S. exports</option>
                        <option value="< 10% U.S. exports">&lt; 10% U.S. exports</option>
                        <option value="10-30% U.S. exports">10-30% U.S. exports</option>
                        <option value="> 30% U.S. exports">&gt; 30% U.S. exports</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Contact</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {showValidationErrors && errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+41 XX XXX XX XX"
                    />
                    {showValidationErrors && errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* US Interest */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Your U.S. Project</h2>
                <div>
                  <label htmlFor="usInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Your U.S. Interest *
                  </label>
                  <textarea
                    id="usInterest"
                    name="usInterest"
                    rows={4}
                    value={formData.usInterest}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue resize-vertical ${
                      errors.usInterest ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Briefly describe your plans or questions about U.S. market entry..."
                  />
                  {showValidationErrors && errors.usInterest && <p className="mt-1 text-sm text-red-600">{errors.usInterest}</p>}
                </div>
              </div>

              {/* reCAPTCHA */}
              {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(token) => {
                      console.log('reCAPTCHA token received:', token ? 'Valid' : 'Null')
                      setCaptchaToken(token)
                    }}
                    onExpired={() => {
                      console.log('reCAPTCHA expired')
                      setCaptchaToken(null)
                    }}
                    onError={(error) => {
                      console.error('reCAPTCHA error:', error)
                      setErrorMessage('reCAPTCHA error. Please reload the page.')
                    }}
                  />
                </div>
              )}
              
              {/* Debug Info */}
              {process.env.NODE_ENV === 'development' && (
                <div className="text-xs text-gray-500 text-center">
                  reCAPTCHA Site Key: {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? 'Configured' : 'Not set'}
                  <br />
                  Domain: {typeof window !== 'undefined' ? window.location.hostname : 'Server'}
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  <strong>Error:</strong> {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request Free Initial Consultation'}
                </button>
                
                <p className="mt-4 text-sm text-gray-500">
                  * Required fields | Your data will be treated confidentially and not shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}