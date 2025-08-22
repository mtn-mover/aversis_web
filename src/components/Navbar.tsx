'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Aversis
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              Über uns
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Leistungen
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Kontakt
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md">
              Beratung
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 font-medium">
                Über uns
              </Link>
              <Link href="/services" className="text-gray-700 font-medium">
                Leistungen
              </Link>
              <Link href="/contact" className="text-gray-700 font-medium">
                Kontakt
              </Link>
              <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md w-fit">
                Beratung
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}