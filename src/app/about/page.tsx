import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Über <span className="text-blue-600">Aversis</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Erfahrenes Interim Management aus der Schweiz. Wir unterstützen Unternehmen mit professionellen 
              Führungskräften in kritischen Phasen und bei strategischen Herausforderungen.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Bei Aversis glauben wir an die Kraft erfahrener Führung in kritischen Unternehmensphasen. 
                  Unsere Mission ist es, Unternehmen mit erstklassigen Interim Managern zu unterstützen, 
                  die nachhaltige Lösungen entwickeln und umsetzen.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>&quot;Gemeinsam wachsen und stärker werden!&quot;</strong> - Das ist unser Leitspruch. 
                  Wir kombinieren langjährige Führungserfahrung mit strategischem Denken, um Herausforderungen 
                  erfolgreich zu meistern.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600 mb-4">Jahre Erfahrung</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 mb-4">Erfolgreiche Projekte</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Zufriedene Kunden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Werte</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die Prinzipien, die unsere Arbeit leiten und unseren Erfolg ausmachen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schnelligkeit</h3>
                <p className="text-gray-600">In kritischen Situationen zählt jeder Tag. Unsere Interim Manager sind kurzfristig verfügbar und handlungsbereit.</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualität</h3>
                <p className="text-gray-600">Schweizer Qualität und Präzision. Wir liefern nachhaltige Lösungen, die langfristig Wert schaffen.</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnerschaft</h3>
                <p className="text-gray-600">Wir arbeiten als Partner auf Augenhöhe und entwickeln gemeinsam maßgeschneiderte Lösungen für Ihr Unternehmen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The talented professionals behind Aversis&apos;s success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
                <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">Leading the vision and strategy for innovative technology solutions.</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-2">CTO</p>
                <p className="text-gray-600 text-sm">Architecting scalable solutions and leading technical innovation.</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Davis</h3>
                <p className="text-blue-600 font-medium mb-2">Lead Developer</p>
                <p className="text-gray-600 text-sm">Building robust applications with modern technologies and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}