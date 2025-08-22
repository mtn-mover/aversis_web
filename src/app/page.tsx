import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Professionelles <span className="text-blue-600">Interim Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Erfahrene Führungskräfte für kritische Unternehmensphasen. 
              Wir bringen sofort verfügbare Expertise in Ihr Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md">
                Beratungsgespräch
              </button>
              <button className="border border-gray-300 text-gray-700 hover:border-gray-400 font-medium px-8 py-3 rounded-md">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Projekte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Kunden</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24h</div>
              <div className="text-gray-600">Reaktion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600">
              Professionelle Führungskräfte für jede Herausforderung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interim Management</h3>
              <p className="text-gray-600 mb-4">
                Temporäre Führungsrollen in kritischen Phasen
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• C-Level und Geschäftsführung</li>
                <li>• Projekt- und Programmleitung</li>
                <li>• Krisen- und Turnaround Management</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategische Beratung für nachhaltiges Wachstum
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Change Management</li>
                <li>• Strategieentwicklung</li>
                <li>• Innovation Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum Aversis?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Schnell verfügbar</h3>
              <p className="text-gray-600">Kurzfristige Verfügbarkeit unserer Manager</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bewährt</h3>
              <p className="text-gray-600">15+ Jahre Erfahrung in verschiedenen Branchen</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kosteneffizient</h3>
              <p className="text-gray-600">Flexible Lösungen ohne langfristige Bindung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Vereinbaren Sie ein unverbindliches Beratungsgespräch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+41338230509" className="bg-white text-blue-600 font-medium px-8 py-3 rounded-md hover:bg-gray-50">
              +41 33 823 05 09
            </a>
            <a href="mailto:info@aversis.com" className="border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700">
              info@aversis.com
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            Interlaken, Schweiz | Schweizweit verfügbar
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}