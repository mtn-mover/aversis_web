'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CookieConsent {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always required
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already given consent
    const existingConsent = localStorage.getItem('cookieConsent')
    if (!existingConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    saveConsent(fullConsent)
  }

  const handleAcceptSelected = () => {
    saveConsent(consent)
  }

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    saveConsent(minimalConsent)
  }

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...consentData,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
    
    // Here you would typically initialize your tracking services based on consent
    if (consentData.analytics) {
      // Initialize Google Analytics or other analytics
      console.log('Analytics cookies accepted')
    }
    if (consentData.marketing) {
      // Initialize marketing cookies/pixels
      console.log('Marketing cookies accepted')
    }
  }

  const handleConsentChange = (category: keyof CookieConsent, value: boolean) => {
    if (category === 'necessary') return // Cannot be changed
    setConsent(prev => ({ ...prev, [category]: value }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl border border-gray-200">
        {!showDetails ? (
          // Simple Banner
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-aversis-orange mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-aversis-dark mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis auf unserer Website zu bieten. 
                  Einige Cookies sind notwendig für die Funktionalität, andere helfen uns die Website zu verbessern oder personalisierte Inhalte anzuzeigen.
                </p>
                <p className="text-gray-600 text-xs mb-4">
                  Weitere Informationen finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="text-aversis-orange hover:underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-aversis-orange hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="border border-gray-300 hover:border-aversis-orange text-gray-700 font-medium px-6 py-2 rounded-lg transition-colors"
                  >
                    Einstellungen
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="text-gray-600 hover:text-aversis-dark font-medium px-3 py-2 transition-colors"
                  >
                    Nur notwendige
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Detailed Settings
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-aversis-dark">
                Cookie-Einstellungen verwalten
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-aversis-dark">Notwendige Cookies</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-500">Immer aktiv</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies sind für die ordnungsgemäße Funktion der Website erforderlich und können nicht deaktiviert werden.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-aversis-dark">Funktionale Cookies</h4>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={(e) => handleConsentChange('functional', e.target.checked)}
                      className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange"
                    />
                    <span className="ml-2 text-sm">Aktivieren</span>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. das Speichern Ihrer Präferenzen.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-aversis-dark">Analyse-Cookies</h4>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                      className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange"
                    />
                    <span className="ml-2 text-sm">Aktivieren</span>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie kontinuierlich zu verbessern.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-aversis-dark">Marketing-Cookies</h4>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => handleConsentChange('marketing', e.target.checked)}
                      className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange"
                    />
                    <span className="ml-2 text-sm">Aktivieren</span>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleAcceptSelected}
                className="bg-aversis-orange hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={handleAcceptAll}
                className="border border-aversis-orange text-aversis-orange hover:bg-aversis-orange hover:text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={handleRejectAll}
                className="text-gray-600 hover:text-aversis-dark font-medium px-3 py-2 transition-colors"
              >
                Alle ablehnen
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Weitere Informationen zu unserer Datenverarbeitung finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-aversis-orange hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}