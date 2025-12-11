'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/aversis-logo.jpg"
                alt="aversis Logo"
                width={100}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Unternehmensberatung für Schweizer KMUs. Kulturwandel und Marketing vereint -
              für nachhaltiges Wachstum und messbare Ergebnisse.
            </p>

            <div className="space-y-3 text-slate-400">
              <div className="mb-2">
                <strong className="text-white">Aversis GmbH</strong>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  Untere Bönigstrasse 20<br />
                  3800 Interlaken, Schweiz
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+41338230509" className="hover:text-amber-400 transition-colors">
                  +41 33 823 05 09
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@aversis.com" className="hover:text-amber-400 transition-colors">
                  info@aversis.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Leistungen
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Interim Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Kulturwandel & Transformation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Marketing & Digitalisierung
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Führungskräfte-Coaching
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Unternehmen
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('ueber')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projekte')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Referenzen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-amber-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-amber-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Aversis GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="text-slate-500 text-sm">
              Kulturwandel, der sich im Umsatz zeigt.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
