'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCookieConsent, CookieConsent } from '@/hooks/useCookieConsent'

interface CookieSettingsProps {
  isOpen: boolean
  onClose: () => void
}

export default function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const { consent, updateConsent } = useCookieConsent()
  const [localConsent, setLocalConsent] = useState<CookieConsent>(() => 
    consent || {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
  )

  const handleConsentChange = (category: keyof CookieConsent, value: boolean) => {
    if (category === 'necessary') return // Cannot be changed
    setLocalConsent(prev => ({ ...prev, [category]: value }))
  }

  const handleSave = () => {
    updateConsent(localConsent)
    onClose()
  }

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    setLocalConsent(fullConsent)
    updateConsent(fullConsent)
    onClose()
  }

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    setLocalConsent(minimalConsent)
    updateConsent(minimalConsent)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-aversis-dark">
              Cookie-Einstellungen
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Verwalten Sie Ihre Cookie-Präferenzen. Sie können Ihre Einstellungen jederzeit ändern.
          </p>
          
          <div className="space-y-4 mb-6">
            {/* Necessary Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-aversis-dark">Notwendige Cookies</h3>
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
                Diese Cookies sind für die ordnungsgemäße Funktion der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine persönlich identifizierbaren Informationen.
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-aversis-dark">Funktionale Cookies</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localConsent.functional}
                    onChange={(e) => handleConsentChange('functional', e.target.checked)}
                    className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange"
                  />
                  <span className="ml-2 text-sm">Aktivieren</span>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. das Speichern Ihrer Präferenzen und Spracheinstellungen.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-aversis-dark">Analyse-Cookies</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localConsent.analytics}
                    onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                    className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange"
                  />
                  <span className="ml-2 text-sm">Aktivieren</span>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie kontinuierlich zu verbessern. Alle gesammelten Informationen sind anonym.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-aversis-dark">Marketing-Cookies</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localConsent.marketing}
                    onChange={(e) => handleConsentChange('marketing', e.target.checked)}
                    className="w-4 h-4 text-aversis-orange border-gray-300 rounded focus:ring-aversis-orange"
                  />
                  <span className="ml-2 text-sm">Aktivieren</span>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen. Sie können auch zur Messung der Werbewirksamkeit eingesetzt werden.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={handleSave}
              className="bg-aversis-orange hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Einstellungen speichern
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

          {consent?.timestamp && (
            <p className="text-xs text-gray-400 mt-2">
              Letzte Aktualisierung: {new Date(consent.timestamp).toLocaleDateString('de-CH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}