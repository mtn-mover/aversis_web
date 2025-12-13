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
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/aversis-logo-dark.png"
                alt="aversis Logo"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              KI-Integration für KMU.<br />
              Systeme die funktionieren.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-amber-400 uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="space-y-3 text-gray-500">
              <div className="mb-2">
                <strong className="text-white">Aversis GmbH</strong>
              </div>
              <div>
                Untere Bönigstrasse 20<br />
                3800 Interlaken
              </div>
              <div>
                <a href="tel:+41338230509" className="hover:text-amber-400 transition-colors">
                  +41 33 823 05 09
                </a>
              </div>
              <div>
                <a href="mailto:info@aversis.com" className="hover:text-amber-400 transition-colors">
                  info@aversis.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-amber-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <button
                  onClick={() => scrollToSection('problem')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Problem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ansatz')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Ansatz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('proof')}
                  className="hover:text-amber-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Proof
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
        <div className="border-t border-gray-900 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Aversis GmbH
            </div>
            <div className="text-gray-600 text-sm">
              KI. Automatisierung. Umsetzung.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
