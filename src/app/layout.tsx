import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Aversis GmbH - Kulturwandel, der sich im Umsatz zeigt',
  description: 'Unternehmensberatung für Schweizer KMUs. Wir verbinden Kulturwandel mit modernem Marketing - für nachhaltiges Wachstum und messbare Ergebnisse.',
  keywords: 'Unternehmensberatung, Kulturwandel, Transformation, Interim Management, Marketing, KMU, Schweiz, Change Management, Coaching',
  authors: [{ name: 'Aversis GmbH' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Aversis',
  },
  openGraph: {
    title: 'Aversis GmbH - Kulturwandel, der sich im Umsatz zeigt',
    description: 'Unternehmensberatung für Schweizer KMUs. Kulturwandel und Marketing vereint.',
    url: 'https://aversis.com',
    siteName: 'Aversis',
    locale: 'de_CH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
