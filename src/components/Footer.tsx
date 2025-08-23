import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-aversis-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-6">
              <span className="text-aversis-blue">aversis</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Professionelles Interim Management und Executive Transformation für nachhaltigen Unternehmenserfolg. 
              Ihre Schweizer Partner für kritische Führungsaufgaben.
            </p>
            
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Interlaken, Schweiz</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+41338230509" className="hover:text-aversis-orange transition-colors">
                  +41 33 823 05 09
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@aversis.com" className="hover:text-aversis-orange transition-colors">
                  info@aversis.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-aversis-dark">Leistungen</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/services" className="hover:text-aversis-orange transition-colors">
                  Interim Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-aversis-orange transition-colors">
                  Executive Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-aversis-orange transition-colors">
                  Change Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-aversis-orange transition-colors">
                  Krisenmanagement
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-aversis-orange transition-colors">
                  Turnaround Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-aversis-dark">Unternehmen</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-aversis-orange transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-aversis-orange transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-aversis-orange transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-aversis-orange transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-aversis-orange transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Aversis GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <span className="mr-4">Schweizweit verfügbar</span>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 rounded-sm mr-1"></div>
                <span className="text-xs">Made in Switzerland</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}