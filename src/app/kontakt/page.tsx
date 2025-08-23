import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-aversis-dark mb-6 leading-tight">
              <span className="text-aversis-orange">Kontakt</span> & Erstgespräch
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Bereit für operative Exzellenz & eine stärkere Unternehmenskultur?
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-12 right-12 w-8 h-8 bg-aversis-orange opacity-20 rounded-full"></div>
        <div className="absolute top-6 right-24 w-5 h-5 bg-aversis-blue opacity-30 rounded-full"></div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Contact Info */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-aversis-dark mb-8">Lassen Sie uns sprechen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-aversis-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aversis-dark mb-2">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+41338230509" className="hover:text-aversis-orange transition-colors">
                        +41 33 823 05 09
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aversis-dark mb-2">E-Mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@aversis.com" className="hover:text-aversis-orange transition-colors">
                        info@aversis.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-aversis-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aversis-dark mb-2">Standort</h3>
                    <p className="text-gray-600">Bern & Interlaken, Schweiz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-aversis-blue to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Kostenloses Erstgespräch</h3>
                <p className="text-blue-100 mb-6">
                  In 30 Minuten analysieren wir gemeinsam Ihre grössten operativen Herausforderungen 
                  und zeigen Ihnen konkrete Ansatzpunkte für mehr Effizienz und eine stärkere Unternehmenskultur.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span className="text-sm">Unverbindlich & kostenlos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span className="text-sm">Telefonisch oder vor Ort</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span className="text-sm">Konkrete Handlungsempfehlungen</span>
                  </div>
                </div>
                
                <button className="bg-aversis-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-6 w-full">
                  Jetzt Erstgespräch vereinbaren
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-aversis-orange rounded-full opacity-40"></div>
              <div className="absolute -top-8 -right-12 w-6 h-6 bg-aversis-blue rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-aversis-dark mb-6">Speziell für Schweizer KMU-Inhaber</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Als Schweizer KMU-Inhaber verdienen Sie einen Partner, der sowohl Ihre operativen Herausforderungen versteht 
                als auch weiss, wie wichtig eine authentische Unternehmenskultur für nachhaltigen Erfolg ist.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-aversis-blue mb-3">Ideale Unternehmensgrösse</h4>
                  <p className="text-gray-600">20-500 Mitarbeitende</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-aversis-orange mb-3">Fokus-Branchen</h4>
                  <p className="text-gray-600">Produktion, Technologie, Handel, Dienstleistung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-aversis-dark mb-12">So arbeiten wir zusammen</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-semibold text-aversis-dark mb-2">Erstgespräch</h4>
                <p className="text-gray-600 text-sm">Analyse Ihrer Situation und Herausforderungen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-semibold text-aversis-dark mb-2">Detailanalyse</h4>
                <p className="text-gray-600 text-sm">Tiefere Untersuchung der Prozesse und Kultur</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-semibold text-aversis-dark mb-2">Umsetzung</h4>
                <p className="text-gray-600 text-sm">Hands-on Implementierung mit Ihren Teams</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="text-lg font-semibold text-aversis-dark mb-2">Nachhaltigkeit</h4>
                <p className="text-gray-600 text-sm">Verankerung in der Unternehmenskultur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}