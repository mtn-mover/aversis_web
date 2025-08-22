import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aversis',
  description: 'Welcome to Aversis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}