import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'aversis GmbH - KI-Integration für KMU',
  description: 'KI-Integration und Automatisierung für Schweizer KMUs. Systeme die funktionieren - keine Theorie, keine Pilotprojekte.',
  keywords: 'KI, AI, Automatisierung, Integration, KMU, Schweiz, Workflows, Custom Tools',
  authors: [{ name: 'aversis GmbH' }],
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
    title: 'aversis',
  },
  openGraph: {
    title: 'aversis GmbH - KI-Integration für KMU',
    description: 'KI-Integration und Automatisierung für Schweizer KMUs. Systeme die funktionieren.',
    url: 'https://aversis.com',
    siteName: 'aversis',
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
