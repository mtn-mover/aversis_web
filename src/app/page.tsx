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
              <span className="text-aversis-orange">Hands-on umgesetzt</span> = 
              <span className="text-aversis-blue"> bereit für die Zukunft</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Operative Exzellenz & Kulturentwicklung für zukunftsfähige Unternehmen. 
              Speziell für Schweizer KMU-Inhaber, die nachhaltiges Wachstum anstreben.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Erstgespräch vereinbaren
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

      {/* Services Section - 2 Pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Zwei Säulen für Ihren Erfolg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Operative Exzellenz und Kulturentwicklung - Hand in Hand für nachhaltige Transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Operative Exzellenz Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aversis-dark">Operative Exzellenz</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Prozesse optimieren, Strukturen schaffen, Effizienz steigern. 
                Hands-on Umsetzung für messbare Ergebnisse.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Prozessoptimierung & Lean Management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Qualitätsmanagement & Standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Digitalisierung & Automatisierung</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Performance-Steigerung & KPIs</span>
                </li>
              </ul>
            </div>

            {/* Kulturentwicklung Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aversis-dark">Kulturentwicklung</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Menschen entwickeln, Teams stärken, Unternehmenskultur gestalten. 
                Der Mensch im Zentrum der Transformation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Führungskräfteentwicklung & Coaching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Teamdynamik & Zusammenarbeit</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Change Management & Kommunikation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Werteentwicklung & Leitbild</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section - Unternehmenskultur */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Unternehmenskultur als Erfolgsfaktor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Warum Kultur und Operative Exzellenz untrennbar zusammengehören
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-6xl text-aversis-orange mb-6">“</div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 italic">
                  Erfolgreiche Unternehmen haben eine Kultur, die operativ exzellente Leistung nicht nur ermöglicht, 
                  sondern als Selbstverständlichkeit lebt. Ohne diese kulturelle Basis bleibt jede 
                  Prozessverbesserung oberflächlich.
                </p>
                <div className="text-sm text-aversis-dark font-semibold">
                  – Stephan Zahler, Geschäftsführer aversis
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-aversis-dark mb-6">Der entscheidende Unterschied</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-aversis-blue rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-aversis-dark mb-2">Menschen vor Prozessen</h4>
                    <p className="text-gray-600">
                      Operative Exzellenz funktioniert nur, wenn Menschen sie verstehen, mittragen und leben.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-aversis-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-aversis-orange rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-aversis-dark mb-2">Nachhaltigkeit durch Kultur</h4>
                    <p className="text-gray-600">
                      Veränderungen, die in der Unternehmenskultur verankert sind, überdauern jeden Beratereinsatz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-aversis-blue to-aversis-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-r from-aversis-blue to-aversis-orange rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-aversis-dark mb-2">Hands-on & Herz</h4>
                    <p className="text-gray-600">
                      Wir optimieren nicht nur Abläufe, sondern entwickeln die Menschen, die sie ausführen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-aversis-dark mb-4">Unser einzigartiger Ansatz</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                «Wir verbinden operative Exzellenz mit authentischer Kulturentwicklung. 
                Das Ergebnis: Unternehmen, die nicht nur effizienter arbeiten, 
                sondern auch ein Arbeitsumfeld schaffen, in dem Menschen gern ihr Bestes geben.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Über Stephan Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
                Über Stephan Zahler
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                «Mein Name ist Stephan Zahler. Ich glaube fest daran, dass jedes Unternehmen 
                das Potenzial hat, sowohl operativ exzellent als auch ein grossartiger Arbeitsplatz zu sein.»
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-aversis-orange pl-6">
                  <h3 className="text-lg font-semibold text-aversis-dark mb-2">Mein Werdegang</h3>
                  <p className="text-gray-600">
                    15+ Jahre Führungserfahrung in verschiedenen Branchen, von Start-ups bis zu internationalen Konzernen. 
                    Spezialisiert auf die Verbindung von operativer Exzellenz und authentischer Kulturentwicklung.
                  </p>
                </div>

                <div className="border-l-4 border-aversis-blue pl-6">
                  <h3 className="text-lg font-semibold text-aversis-dark mb-2">Meine Überzeugung</h3>
                  <p className="text-gray-600">
                    «Unternehmen sind erfolgreicher, wenn Menschen gern zur Arbeit kommen. 
                    Deshalb entwickle ich nicht nur Prozesse, sondern auch die Kultur, die sie zum Leben erweckt.»
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-semibold text-aversis-dark mb-2">Mein Ansatz</h3>
                  <p className="text-gray-600">
                    Hands-on Mentalität gepaart mit empathischer Führung. 
                    Ich arbeite nicht über, sondern mit Ihren Teams - für Veränderungen, die nachhaltig wirken.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl">
                <p className="text-aversis-dark font-medium italic">
                  «Ich helfe Schweizer KMU-Inhabern dabei, Unternehmen zu schaffen, 
                  die sowohl wirtschaftlich erfolgreich als auch menschlich bereichernd sind.»
                </p>
                <div className="mt-3 text-sm text-gray-600">Stephan Zahler, Gründer & Geschäftsführer</div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-aversis-blue to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Qualifikationen & Erfahrung</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>MBA Executive Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>Certified Change Manager</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aversis-orange rounded-full mr-3"></div>
                    <span>Lean Six Sigma Black Belt</span>
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
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-aversis-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-aversis-blue rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-aversis-blue to-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Konkrete Erfolge für unsere Kunden
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Messbare Ergebnisse, die den Unterschied machen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8">
                <div className="text-5xl font-bold text-aversis-orange mb-4">80%</div>
                <h3 className="text-xl font-semibold text-white mb-3">Umsatzwachstum</h3>
                <p className="text-blue-100">
                  Durchschnittliche Umsatzsteigerung unserer KMU-Kunden innerhalb von 18 Monaten
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8">
                <div className="text-5xl font-bold text-aversis-orange mb-4">95%</div>
                <h3 className="text-xl font-semibold text-white mb-3">On-Time-Delivery</h3>
                <p className="text-blue-100">
                  Verbesserung der Liefertreue durch optimierte Prozesse und klare Verantwortlichkeiten
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8">
                <div className="text-5xl font-bold text-aversis-orange mb-4">4.8</div>
                <h3 className="text-xl font-semibold text-white mb-3">Mitarbeiterzufriedenheit</h3>
                <p className="text-blue-100">
                  Steigerung der Mitarbeiterzufriedenheit (Skala 1-5) durch authentische Kulturentwicklung
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Typische Projektergebnisse</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-100">
                    <strong className="text-white">Prozessoptimierung:</strong> 30-50% Reduktion von Durchlaufzeiten
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-100">
                    <strong className="text-white">Qualitätssteigerung:</strong> 60% weniger Reklamationen und Nacharbeit
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-100">
                    <strong className="text-white">Team-Performance:</strong> 40% höhere Produktivität durch bessere Zusammenarbeit
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-100">
                    <strong className="text-white">Fluktuation:</strong> 70% weniger Personalwechsel in Schlüsselpositionen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Swiss SME Focus */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-slate-800 to-aversis-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bereit für operative Exzellenz & eine stärkere Unternehmenskultur?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Als Schweizer KMU-Inhaber verdienen Sie einen Partner, der sowohl Ihre operativen Herausforderungen versteht 
            als auch weiss, wie wichtig eine authentische Unternehmenskultur für nachhaltigen Erfolg ist.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-aversis-orange mb-4">Kostenloses Erstgespräch - Speziell für KMU-Inhaber</h3>
            <p className="text-gray-200 mb-6">
              In 30 Minuten analysieren wir gemeinsam Ihre grössten operativen Herausforderungen 
              und zeigen Ihnen konkrete Ansatzpunkte für mehr Effizienz und eine stärkere Unternehmenskultur.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-aversis-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Jetzt Erstgespräch vereinbaren
              </button>
              <button className="border-2 border-aversis-orange text-aversis-orange hover:bg-aversis-orange hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                Mehr über unseren Ansatz
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+41 33 823 05 09</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>stephan.zahler@aversis.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-aversis-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span>Bern & Interlaken, Schweiz</span>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Exklusiv für Schweizer KMU mit 20-500 Mitarbeitenden
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}