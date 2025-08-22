import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-aversis-dark mb-8 leading-tight">
              Interim Management für 
              <span className="text-aversis-blue"> nachhaltigen Erfolg</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Erfahrene Führungskräfte und Executive Transformation für kritische Unternehmensphasen. 
              Schnelle Lösungen, langfristige Wirkung.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Kostenloses Erstgespräch
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-aversis-orange opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-aversis-blue opacity-10 rounded-full"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Unsere Kernkompetenzen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Interim Management Lösungen für jede Phase Ihres Unternehmens
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interim Management Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aversis-dark">Interim Management</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Sofortige Verfügbarkeit erfahrener Führungskräfte für kritische Unternehmensphasen. 
                Von C-Level bis Projektleitung.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>CEO, CFO, COO Positionen</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Krisenmanagement & Turnaround</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Projektleitung & Transformation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Überbrückung von Vakanzen</span>
                </li>
              </ul>
            </div>

            {/* Executive Transformation Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aversis-dark">Executive Transformation</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Strategische Veränderungsprozesse erfolgreich gestalten. 
                Change Management mit nachhaltiger Wirkung.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strategieentwicklung & -umsetzung</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Organisationsentwicklung</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Digitale Transformation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Kulturwandel & Leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section - Warum Aversis */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Warum Aversis wählen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf bewährte Expertise und nachhaltige Lösungen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-aversis-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Schnelle Verfügbarkeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Sofortige Einsatzbereitschaft durch unser Netzwerk erfahrener Manager. 
                Kurzfristige Lösungen für dringende Herausforderungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-aversis-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Bewährte Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                15+ Jahre Erfahrung in verschiedenen Branchen und Führungsebenen. 
                Nachgewiesener Track Record in komplexen Situationen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aversis-blue to-aversis-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Schweizer Qualität</h3>
              <p className="text-gray-600 leading-relaxed">
                Höchste Standards in Beratung und Umsetzung. 
                Langfristige Partnerschaften basierend auf Vertrauen und Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Expertise Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
                Expertise & Erfahrung für Ihren Erfolg
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Als erfahrene Interim Manager und Change-Experten bringen wir die notwendige 
                Expertise mit, um Ihr Unternehmen durch kritische Phasen zu führen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-aversis-blue rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aversis-dark mb-2">C-Level Erfahrung</h3>
                    <p className="text-gray-600">
                      Langjährige Führungserfahrung in verschiedenen Branchen und Unternehmensgrößen
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-aversis-orange rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aversis-dark mb-2">Transformation Expertise</h3>
                    <p className="text-gray-600">
                      Spezialisiert auf komplexe Veränderungsprozesse und digitale Transformation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-aversis-blue to-aversis-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-r from-aversis-blue to-aversis-orange rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aversis-dark mb-2">Nachhaltiger Erfolg</h3>
                    <p className="text-gray-600">
                      Fokus auf langfristige Lösungen und nachhaltige Unternehmensentwicklung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-aversis-blue to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Unsere Erfolgsbilanz</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-blue-100">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-blue-100">Projekte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Kunden</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24h</div>
                    <div className="text-blue-100">Reaktionszeit</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-aversis-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-aversis-blue rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-aversis-blue to-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch. 
            Gemeinsam entwickeln wir die optimale Lösung für Ihre Herausforderung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-aversis-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Kostenloses Erstgespräch
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-aversis-blue font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              Mehr erfahren
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+41 33 823 05 09</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>info@aversis.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span>Interlaken, Schweiz</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}