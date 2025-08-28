'use client'

import { useState, useEffect } from 'react'

export interface CookieConsent {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
  timestamp?: string
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load existing consent from localStorage
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent)
        setConsent(parsed)
      } catch (error) {
        console.error('Error parsing cookie consent:', error)
      }
    }
    setLoading(false)
  }, [])

  const updateConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: new Date().toISOString()
    }
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentWithTimestamp))
    setConsent(consentWithTimestamp)

    // Trigger Google Analytics or other services based on consent
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (newConsent.analytics && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
      } else if (!newConsent.analytics && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        })
      }

      // Marketing/Advertising
      if (newConsent.marketing && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'granted'
        })
      } else if (!newConsent.marketing && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'denied'
        })
      }
    }
  }

  const hasConsent = (category: keyof CookieConsent): boolean => {
    if (!consent) return false
    return consent[category] === true
  }

  const revokeConsent = () => {
    localStorage.removeItem('cookieConsent')
    setConsent(null)
  }

  return {
    consent,
    loading,
    updateConsent,
    hasConsent,
    revokeConsent,
    hasGivenConsent: consent !== null
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}