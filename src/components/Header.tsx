'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/aversis-logo-dark.png"
              alt="aversis Logo"
              width={100}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-gray-400 hover:text-amber-400 font-medium text-sm transition-colors bg-transparent border-none cursor-pointer uppercase tracking-wider"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('ansatz')}
              className="text-gray-400 hover:text-amber-400 font-medium text-sm transition-colors bg-transparent border-none cursor-pointer uppercase tracking-wider"
            >
              Ansatz
            </button>
            <button
              onClick={() => scrollToSection('proof')}
              className="text-gray-400 hover:text-amber-400 font-medium text-sm transition-colors bg-transparent border-none cursor-pointer uppercase tracking-wider"
            >
              Proof
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-none transition-all text-sm uppercase tracking-wider"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu öffnen"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-gray-400 hover:text-amber-400 font-medium py-2 text-left bg-transparent border-none cursor-pointer uppercase tracking-wider"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('ansatz')}
              className="text-gray-400 hover:text-amber-400 font-medium py-2 text-left bg-transparent border-none cursor-pointer uppercase tracking-wider"
            >
              Ansatz
            </button>
            <button
              onClick={() => scrollToSection('proof')}
              className="text-gray-400 hover:text-amber-400 font-medium py-2 text-left bg-transparent border-none cursor-pointer uppercase tracking-wider"
            >
              Proof
            </button>

            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-none transition-all text-center mt-2 uppercase tracking-wider"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
