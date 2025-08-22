import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aversis GmbH - Interim Management',
  description: 'Professionelles Interim Management für nachhaltigen Erfolg. Executive Transformation und strategische Führung für Schweizer Unternehmen.',
  keywords: 'Interim Management, Executive Transformation, Schweiz, Führungskräfte, C-Level, Turnaround, Change Management',
  authors: [{ name: 'Aversis GmbH' }],
  openGraph: {
    title: 'Aversis GmbH - Interim Management',
    description: 'Professionelles Interim Management für nachhaltigen Erfolg',
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
      </body>
    </html>
  )
}