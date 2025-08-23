'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/aversis-logo.jpg" 
              alt="aversis Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="nav-link font-medium text-base"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="nav-link font-medium text-base"
            >
              Services
            </Link>
            <Link 
              href="/philosophie" 
              className="nav-link font-medium text-base"
            >
              Philosophie
            </Link>
            <Link 
              href="/stephan" 
              className="nav-link font-medium text-base"
            >
              Über Stephan
            </Link>
            <Link 
              href="/kontakt" 
              className="nav-link font-medium text-base"
            >
              Kontakt
            </Link>
            
            {/* CTA Button */}
            <button className="btn-primary ml-4">
              Erstgespräch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu öffnen"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`block h-0.5 w-6 bg-aversis-dark transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-aversis-dark transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-aversis-dark transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="nav-link font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="nav-link font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/philosophie" 
                className="nav-link font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Philosophie
              </Link>
              <Link 
                href="/stephan" 
                className="nav-link font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Über Stephan
              </Link>
              <Link 
                href="/kontakt" 
                className="nav-link font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <button className="btn-primary w-fit mt-4">
                Erstgespräch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}