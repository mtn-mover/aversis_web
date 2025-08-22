import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Aversis</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Professionelles Interim Management aus der Schweiz. 
              Gemeinsam wachsen und stärker werden!
            </p>
            <div className="text-gray-300">
              <p>📍 Interlaken, Schweiz</p>
              <p>📞 +41 33 823 05 09</p>
              <p>📧 info@aversis.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <div className="space-y-2 text-gray-300">
              <Link href="#" className="block hover:text-white">Interim Management</Link>
              <Link href="#" className="block hover:text-white">Strategic Consulting</Link>
              <Link href="#" className="block hover:text-white">Change Management</Link>
              <Link href="#" className="block hover:text-white">Krisenmanagement</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <div className="space-y-2 text-gray-300">
              <Link href="/about" className="block hover:text-white">Über uns</Link>
              <Link href="/contact" className="block hover:text-white">Kontakt</Link>
              <Link href="#" className="block hover:text-white">Impressum</Link>
              <Link href="#" className="block hover:text-white">Datenschutz</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Aversis GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="text-gray-300 text-sm">
            Schweizweit verfügbar
          </div>
        </div>
      </div>
    </footer>
  )
}