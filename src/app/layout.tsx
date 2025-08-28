import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Aversis GmbH - U.S.-Marktaufbau für Schweizer KMU',
  description: 'Strukturierter U.S.-Marktaufbau mit erfahrenem Interim Management. Von der Machbarkeitsstudie bis zur operativen Selbstständigkeit.',
  keywords: 'U.S.-Marktaufbau, Interim Management, Schweizer KMU, USA Expansion, Manufacturing Setup, Executive Transformation',
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
    title: 'Aversis GmbH - U.S.-Marktaufbau für Schweizer KMU',
    description: 'Strukturierter U.S.-Marktaufbau mit erfahrenem Interim Management',
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