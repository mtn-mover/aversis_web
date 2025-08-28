'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/aversis-logo.jpg" 
              alt="aversis Logo" 
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={isEnglish ? "/en" : "/"} 
              className="nav-link font-medium text-base"
            >
              {isEnglish ? "Home" : "Home"}
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="nav-link font-medium text-base bg-transparent border-none cursor-pointer"
            >
              {isEnglish ? "U.S. Market Entry" : "U.S.-Marktaufbau"}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('projektablauf')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="nav-link font-medium text-base bg-transparent border-none cursor-pointer"
            >
              {isEnglish ? "Process" : "Projektablauf"}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('uber-stephan')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="nav-link font-medium text-base bg-transparent border-none cursor-pointer"
            >
              {isEnglish ? "About Us" : "Über uns"}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('footer')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="nav-link font-medium text-base bg-transparent border-none cursor-pointer"
            >
              {isEnglish ? "Contact" : "Kontakt"}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <Link 
                href={pathname.replace(/^\/en/, '') || '/'}
                className={`px-3 py-1 rounded transition-colors ${!isEnglish ? 'bg-aversis-orange text-white' : 'text-gray-600 hover:text-aversis-orange'}`}
              >
                DE
              </Link>
              <Link 
                href={pathname.startsWith('/en') ? pathname : `/en${pathname === '/' ? '' : pathname}`}
                className={`px-3 py-1 rounded transition-colors ${isEnglish ? 'bg-aversis-orange text-white' : 'text-gray-600 hover:text-aversis-orange'}`}
              >
                EN
              </Link>
            </div>
            
            {/* CTA Button */}
            <Link href={isEnglish ? "/en/kontakt" : "/kontakt"} className="btn-primary ml-4">
              {isEnglish ? "Initial Consultation" : "Erstgespräch"}
            </Link>
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
                href={isEnglish ? "/en" : "/"} 
                className="nav-link font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {isEnglish ? "Home" : "Home"}
              </Link>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  const element = document.getElementById('services')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="nav-link font-medium py-2 bg-transparent border-none cursor-pointer text-left"
              >
                {isEnglish ? "U.S. Market Entry" : "U.S.-Marktaufbau"}
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  const element = document.getElementById('projektablauf')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="nav-link font-medium py-2 bg-transparent border-none cursor-pointer text-left"
              >
                {isEnglish ? "Process" : "Projektablauf"}
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  const element = document.getElementById('uber-stephan')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="nav-link font-medium py-2 bg-transparent border-none cursor-pointer text-left"
              >
                {isEnglish ? "About Us" : "Über uns"}
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  const element = document.getElementById('footer')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="nav-link font-medium py-2 bg-transparent border-none cursor-pointer text-left"
              >
                {isEnglish ? "Contact" : "Kontakt"}
              </button>
              {/* Language Switcher Mobile */}
              <div className="flex items-center space-x-2 mt-4">
                <Link 
                  href={pathname.replace(/^\/en/, '') || '/'}
                  className={`px-3 py-1 rounded transition-colors ${!isEnglish ? 'bg-aversis-orange text-white' : 'text-gray-600 hover:text-aversis-orange'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  DE
                </Link>
                <Link 
                  href={pathname.startsWith('/en') ? pathname : `/en${pathname === '/' ? '' : pathname}`}
                  className={`px-3 py-1 rounded transition-colors ${isEnglish ? 'bg-aversis-orange text-white' : 'text-gray-600 hover:text-aversis-orange'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </Link>
              </div>
              
              <Link 
                href={isEnglish ? "/en/kontakt" : "/kontakt"} 
                className="btn-primary w-fit mt-4 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                {isEnglish ? "Initial Consultation" : "Erstgespräch"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}