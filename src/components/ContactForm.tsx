'use client'

import { useState } from 'react'

interface FormData {
  name: string
  company: string
  position: string
  email: string
  phone: string
  challenge: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    challenge: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
          challenge: formData.challenge,
          usInterest: formData.message,
          language: 'de'
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          position: '',
          email: '',
          phone: '',
          challenge: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Vielen Dank!</h3>
        <p className="text-slate-600 mb-6">
          Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-amber-600 hover:text-amber-700 font-medium"
        >
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900"
            placeholder="Ihr Name"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Unternehmen *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900"
            placeholder="Ihr Unternehmen"
          />
        </div>

        {/* Position */}
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
            Position *
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900"
            placeholder="Ihre Position"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900"
            placeholder="ihre@email.ch"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900"
            placeholder="+41 XX XXX XX XX"
          />
        </div>

        {/* Challenge */}
        <div>
          <label htmlFor="challenge" className="block text-sm font-medium text-slate-700 mb-2">
            Aktuelle Herausforderung *
          </label>
          <select
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-slate-900 bg-white"
          >
            <option value="">Bitte wählen...</option>
            <option value="post-merger">Post-Merger Integration</option>
            <option value="stagnation">Stagnierender Umsatz</option>
            <option value="fuehrung">Führungswechsel / Change</option>
            <option value="marketing">Marketing & Digitalisierung</option>
            <option value="kultur">Kulturwandel</option>
            <option value="andere">Andere Herausforderung</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Ihre Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none text-slate-900"
          placeholder="Beschreiben Sie kurz Ihre Situation und was Sie erreichen möchten..."
        />
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:transform-none disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Wird gesendet...
            </span>
          ) : (
            'Erstgespräch anfragen'
          )}
        </button>

        <p className="text-center text-slate-500 text-sm mt-4">
          Keine Verpflichtung. Unverbindliches 30-Minuten-Gespräch.
        </p>
      </div>
    </form>
  )
}
