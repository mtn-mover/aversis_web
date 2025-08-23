import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-aversis-dark mb-6 leading-tight">
              Unsere <span className="text-aversis-orange">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Operative Exzellenz & Kulturentwicklung für zukunftsfähige Unternehmen
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-12 right-12 w-8 h-8 bg-aversis-orange opacity-20 rounded-full"></div>
        <div className="absolute top-6 right-24 w-5 h-5 bg-aversis-blue opacity-30 rounded-full"></div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Operative Exzellenz */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-aversis-dark">Operative Exzellenz</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Prozesse optimieren, Strukturen schaffen, Effizienz steigern. 
                  Hands-on Umsetzung für messbare Ergebnisse in Ihrem Unternehmen.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Prozessoptimierung & Lean Management</h4>
                      <p>Identifikation und Eliminierung von Verschwendung, Aufbau effizienter Arbeitsabläufe</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Qualitätsmanagement & Standards</h4>
                      <p>Implementierung von Qualitätssystemen und kontinuierlichen Verbesserungsprozessen</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Digitalisierung & Automatisierung</h4>
                      <p>Strategische Digitalisierung von Geschäftsprozessen für mehr Effizienz</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Performance-Steigerung & KPIs</h4>
                      <p>Entwicklung messbarer Kennzahlen und nachhaltiger Leistungssteigerung</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-aversis-blue to-blue-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Typische Ergebnisse</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Durchlaufzeit-Reduktion</span>
                      <span className="font-bold text-aversis-orange">30-50%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Qualitätsverbesserung</span>
                      <span className="font-bold text-aversis-orange">60% weniger Fehler</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Produktivitätssteigerung</span>
                      <span className="font-bold text-aversis-orange">25-40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kulturentwicklung */}
          <div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-aversis-dark">Kulturentwicklung</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Menschen entwickeln, Teams stärken, Unternehmenskultur gestalten. 
                  Der Mensch im Zentrum der Entwicklung für nachhaltigen Erfolg.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Führungskräfteentwicklung & Coaching</h4>
                      <p>Entwicklung von Führungskompetenzen und authentischer Führungskultur</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Teamdynamik & Zusammenarbeit</h4>
                      <p>Stärkung der Teamkohäsion und effektiver Kommunikation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Change Management & Kommunikation</h4>
                      <p>Begleitung von Veränderungsprozessen mit klarer Kommunikation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-aversis-dark">Werteentwicklung & Leitbild</h4>
                      <p>Entwicklung gemeinsamer Werte und eines authentischen Leitbilds</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-aversis-orange to-orange-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Kulturelle Verbesserungen</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Mitarbeiterzufriedenheit</span>
                      <span className="font-bold text-blue-100">4.8/5.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fluktuation</span>
                      <span className="font-bold text-blue-100">-70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Führungsqualität</span>
                      <span className="font-bold text-blue-100">+85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}