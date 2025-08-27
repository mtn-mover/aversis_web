'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

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

export default function Kontakt() {
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

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich'
    if (!formData.position.trim()) newErrors.position = 'Position ist erforderlich'
    if (!formData.company.trim()) newErrors.company = 'Unternehmen ist erforderlich'
    if (!formData.email.trim()) newErrors.email = 'E-Mail ist erforderlich'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Gültige E-Mail-Adresse erforderlich'
    if (!formData.phone.trim()) newErrors.phone = 'Telefonnummer ist erforderlich'
    if (!formData.usInterest.trim()) newErrors.usInterest = 'Bitte beschreiben Sie Ihr US-Interesse'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
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
        setErrorMessage('')
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unbekannter Fehler' }))
        const message = errorData.error || 'Fehler beim Senden der Nachricht'
        setErrorMessage(message)
        console.error('API Error:', response.status, errorData)
      }
    } catch (error) {
      console.error('Network Error:', error)
      setErrorMessage('Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.')
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
                Vielen Dank für Ihre Anfrage!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen. 
                Unser Team bereitet bereits eine erste Einschätzung für Ihr US-Marktaufbau-Projekt vor.
              </p>
              <div className="bg-blue-50 border-l-4 border-aversis-blue p-6 mb-8 text-left">
                <h3 className="font-semibold text-aversis-dark mb-2">Was passiert als Nächstes?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Analyse Ihrer US-Marktaufbau-Anfrage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Persönliche Kontaktaufnahme durch Stephan Zwahlen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Terminvorschlag für unverbindliches Erstgespräch</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => window.location.href = '/'}
                className="btn-primary px-8 py-4"
              >
                Zurück zur Startseite
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
                    alt="Schweizer Fahne" 
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
                    alt="US-Amerikanische Fahne" 
                    width={60}
                    height={40}
                    className="rounded-sm shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-aversis-dark mb-6 leading-tight">
              <span className="text-aversis-blue">Unverbindliches</span><br/>
              <span className="text-aversis-orange">Erstgespräch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Besprechen Sie Ihre US-Marktaufbau-Pläne mit einem erfahrenen Interim Manager. 
              Kostenlose Erstberatung mit konkreten Empfehlungen für Ihren nächsten Schritt.
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
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Ihre Kontaktdaten</h2>
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
                      placeholder="Ihr vollständiger Name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
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
                      placeholder="Geschäftsführer, CEO, etc."
                    />
                    {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position}</p>}
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Unternehmensdaten</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen *
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
                      placeholder="Ihr Firmenname"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                        Unternehmensgröße
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="< 10 Mitarbeiter">&lt; 10 Mitarbeiter</option>
                        <option value="10-50 Mitarbeiter">10-50 Mitarbeiter</option>
                        <option value="50-200 Mitarbeiter">50-200 Mitarbeiter</option>
                        <option value="> 200 Mitarbeiter">&gt; 200 Mitarbeiter</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="usExport" className="block text-sm font-medium text-gray-700 mb-2">
                        Aktueller US-Bezug
                      </label>
                      <select
                        id="usExport"
                        name="usExport"
                        value={formData.usExport}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="Kein US-Export">Kein US-Export</option>
                        <option value="< 10% US-Export">&lt; 10% US-Export</option>
                        <option value="10-30% US-Export">10-30% US-Export</option>
                        <option value="> 30% US-Export">&gt; 30% US-Export</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Kontakt</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
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
                      placeholder="ihre.email@unternehmen.ch"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
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
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* US Interest */}
              <div>
                <h2 className="text-2xl font-bold text-aversis-dark mb-8">Ihr US-Projekt</h2>
                <div>
                  <label htmlFor="usInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihr US-Interesse *
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
                    placeholder="Beschreiben Sie kurz Ihre Pläne oder Fragen zum US-Marktaufbau..."
                  />
                  {errors.usInterest && <p className="mt-1 text-sm text-red-600">{errors.usInterest}</p>}
                </div>
              </div>

              {/* Submit Button */}
              {/* Error Message */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  <strong>Fehler:</strong> {errorMessage}
                </div>
              )}

              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Kostenloses Erstgespräch anfragen'}
                </button>
                
                <p className="mt-4 text-sm text-gray-500">
                  * Pflichtfelder | Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
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