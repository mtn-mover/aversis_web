import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Stephan() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-aversis-dark mb-6 leading-tight">
              Über <span className="text-aversis-orange">Stephan Zwahlen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              «Mein Name ist Stephan Zwahlen. Ich glaube fest daran, dass jedes Unternehmen 
              das Potenzial hat, sowohl operativ exzellent als auch ein grossartiger Arbeitsplatz zu sein.»
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-12 right-12 w-8 h-8 bg-aversis-orange opacity-20 rounded-full"></div>
        <div className="absolute top-6 right-24 w-5 h-5 bg-aversis-blue opacity-30 rounded-full"></div>
      </section>

      {/* About Stephan Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Personal Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-aversis-dark mb-8">Mein Weg zu aversis</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-aversis-orange pl-6">
                  <h3 className="text-xl font-semibold text-aversis-dark mb-3">Mein Werdegang</h3>
                  <p className="text-gray-600 leading-relaxed">
                    15+ Jahre Führungserfahrung in verschiedenen Branchen, von Start-ups bis zu internationalen Konzernen. 
                    Spezialisiert auf die Verbindung von operativer Exzellenz und authentischer Kulturentwicklung.
                  </p>
                </div>

                <div className="border-l-4 border-aversis-blue pl-6">
                  <h3 className="text-xl font-semibold text-aversis-dark mb-3">Meine Überzeugung</h3>
                  <p className="text-gray-600 leading-relaxed">
                    «Unternehmen sind erfolgreicher, wenn Menschen gern zur Arbeit kommen. 
                    Deshalb entwickle ich nicht nur Prozesse, sondern auch die Kultur, die sie zum Leben erweckt.»
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-xl font-semibold text-aversis-dark mb-3">Mein Ansatz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hands-on Mentalität gepaart mit empathischer Führung. 
                    Ich arbeite nicht über, sondern mit Ihren Teams - für Entwicklungen, die nachhaltig wirken.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-aversis-blue to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Qualifikationen & Erfahrung</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>Executive Leadership Erfahrung</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>Certified Coach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>Certified Executive Coach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>Systemischer Business Coach</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-400">
                  <h4 className="text-lg font-semibold mb-4">Branchen-Expertise</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>Produktion</div>
                    <div>Technologie</div>
                    <div>Gesundheit</div>
                    <div>Handel</div>
                    <div>Logistik</div>
                    <div>Dienstleistung</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-aversis-orange rounded-full opacity-40"></div>
              <div className="absolute -top-8 -right-12 w-6 h-6 bg-aversis-blue rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-aversis-dark mb-4">Meine Mission</h3>
              <p className="text-xl text-aversis-dark font-medium italic leading-relaxed">
                «Ich helfe Schweizer KMU-Inhabern dabei, Unternehmen zu schaffen, 
                die sowohl wirtschaftlich erfolgreich als auch menschlich bereichernd sind.»
              </p>
              <div className="mt-4 text-gray-600">Stephan Zwahlen, Gründer & Geschäftsführer</div>
            </div>
          </div>

          {/* Values & Approach */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-aversis-dark mb-3">Hands-on Mentalität</h4>
              <p className="text-gray-600">
                Ich packe mit an und arbeite direkt mit Ihren Teams. 
                Theorie ist nur so gut wie ihre praktische Umsetzung.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-aversis-dark mb-3">Empathische Führung</h4>
              <p className="text-gray-600">
                Menschen stehen im Zentrum. 
                Jede Veränderung muss bei den Menschen ankommen und von ihnen gelebt werden.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-aversis-blue to-aversis-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-aversis-dark mb-3">Nachhaltige Wirkung</h4>
              <p className="text-gray-600">
                Ziel ist nicht nur die kurzfristige Verbesserung, 
                sondern der Aufbau von Strukturen, die langfristig funktionieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}