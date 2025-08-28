'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  return (
    <footer id="footer" className="bg-gray-100 text-aversis-dark" itemScope itemType="http://schema.org/LocalBusiness">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image 
                src="/images/aversis-logo.jpg" 
                alt="aversis Logo" 
                width={100}
                height={40}
                className="h-10 w-auto"
                itemProp="logo"
              />
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed" itemProp="description">
              {isEnglish 
                ? "Specialist for U.S. market entry of Swiss SMEs. Project-based support from feasibility study to operational independence in America."
                : "Spezialist für U.S.-Marktaufbau Schweizer KMU. Projektbasierte Begleitung von der Machbarkeitsstudie bis zur operativen Selbstständigkeit in Amerika."
              }
            </p>
            
            <div className="space-y-3 text-gray-600">
              <div className="mb-2">
                <strong itemProp="name">aversis GmbH</strong>
              </div>
              <div className="flex items-start" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <svg className="w-5 h-5 mr-3 text-aversis-orange mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <span itemProp="streetAddress">Untere Bönigstrasse 20</span><br/>
                  <span itemProp="postalCode">3800</span> <span itemProp="addressLocality">Interlaken</span>, <span itemProp="addressCountry">Schweiz</span>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+41338230509" className="hover:text-aversis-orange transition-colors" itemProp="telephone">
                  +41 33 823 05 09
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@aversis.com" className="hover:text-aversis-orange transition-colors" itemProp="email">
                  info@aversis.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-aversis-dark">
              {isEnglish ? "Services" : "Leistungen"}
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href={isEnglish ? "/en#services" : "/#services"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "U.S. Feasibility Studies" : "U.S.-Machbarkeitsstudien"}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? "/en#services" : "/#services"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Location Selection & Setup" : "Standortwahl & Setup"}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? "/en#services" : "/#services"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Market Development & Expansion" : "Marktaufbau & Expansion"}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? "/en#services" : "/#services"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Operations Management & Handover" : "Betriebsführung & Übergabe"}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? "/en#services" : "/#services"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Cultural Integration" : "Kulturelle Integration"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-aversis-dark">
              {isEnglish ? "Company" : "Unternehmen"}
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href={isEnglish ? "/en#uber-stephan" : "/#uber-stephan"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "About Us" : "Über uns"}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? "/en#footer" : "/#footer"} className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Contact" : "Kontakt"}
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-aversis-orange transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Privacy Policy" : "Datenschutz"}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-aversis-orange transition-colors">
                  {isEnglish ? "Terms & Conditions" : "AGB"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 py-8">
          <div className="flex justify-center">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} aversis GmbH. {isEnglish ? "All rights reserved." : "Alle Rechte vorbehalten."}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}