import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Philosophie() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-aversis-dark mb-6 leading-tight">
              Unsere <span className="text-aversis-blue">Philosophie</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Warum Kultur und Operative Exzellenz untrennbar zusammengehören
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-12 right-12 w-8 h-8 bg-aversis-blue opacity-20 rounded-full"></div>
        <div className="absolute top-6 right-24 w-5 h-5 bg-aversis-orange opacity-30 rounded-full"></div>
      </section>

      {/* Philosophy Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Main Quote */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto relative">
              <div className="absolute top-4 right-4 w-3 h-3 bg-aversis-orange rounded-full opacity-30"></div>
              <div className="absolute top-2 right-8 w-2 h-2 bg-aversis-blue rounded-full opacity-40"></div>
              
              <div className="text-6xl text-aversis-orange mb-6">"</div>
              <p className="text-2xl text-gray-600 leading-relaxed mb-6 italic">
                Erfolgreiche Unternehmen haben eine Kultur, die operativ exzellente Leistung nicht nur ermöglicht, 
                sondern als Selbstverständlichkeit lebt. Ohne diese kulturelle Basis bleibt jede 
                Prozessverbesserung oberflächlich.
              </p>
              <div className="text-sm text-aversis-dark font-semibold">
                – Stephan Zwahlen, Geschäftsführer aversis
              </div>
            </div>
          </div>

          {/* Philosophy Pillars */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-aversis-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Menschen vor Prozessen</h3>
              <p className="text-gray-600 leading-relaxed">
                Operative Exzellenz funktioniert nur, wenn Menschen sie verstehen, mittragen und leben. 
                Deshalb starten wir immer bei den Menschen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-aversis-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Nachhaltigkeit durch Kultur</h3>
              <p className="text-gray-600 leading-relaxed">
                Veränderungen, die in der Unternehmenskultur verankert sind, überdauern jeden Beratereinsatz 
                und entwickeln sich eigenständig weiter.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aversis-blue to-aversis-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Hands-on & Herz</h3>
              <p className="text-gray-600 leading-relaxed">
                Wir optimieren nicht nur Abläufe, sondern entwickeln die Menschen, die sie ausführen. 
                Mit praktischer Umsetzung und empathischer Führung.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-aversis-dark mb-8">Unser einzigartiger Ansatz</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                «Wir verbinden operative Exzellenz mit authentischer Kulturentwicklung. 
                Das Ergebnis: Unternehmen, die nicht nur effizienter arbeiten, 
                sondern auch ein Arbeitsumfeld schaffen, in dem Menschen gern ihr Bestes geben.»
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-aversis-blue mb-3">Unsere Überzeugung</h4>
                  <p className="text-gray-600">
                    Unternehmen sind erfolgreicher, wenn Menschen gern zur Arbeit kommen. 
                    Deshalb entwickeln wir nicht nur Prozesse, sondern auch die Kultur, die sie zum Leben erweckt.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-aversis-orange mb-3">Unser Versprechen</h4>
                  <p className="text-gray-600">
                    Hands-on Mentalität gepaart mit empathischer Führung. 
                    Wir arbeiten nicht über, sondern mit Ihren Teams - für Entwicklungen, die nachhaltig wirken.
                  </p>
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