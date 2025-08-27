import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - US Manufacturing Focus */}
      <section className="relative bg-gradient-to-r from-slate-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center items-center mb-8">
              {/* Swiss to US Flag Animation */}
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg">
                {/* Swiss Flag - Quadratisch */}
                <div className="relative">
                  <Image 
                    src="/images/swiss_flag.jpg" 
                    alt="Schweizer Fahne" 
                    width={40}
                    height={40}
                    className="rounded-sm shadow-sm"
                  />
                </div>
                {/* Arrow */}
                <svg className="w-6 h-6 text-aversis-blue animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                {/* US Flag - Rechteckig */}
                <div className="relative">
                  <Image 
                    src="/images/us_flag.svg" 
                    alt="US-Amerikanische Fahne" 
                    width={60}
                    height={40}
                    className="rounded-sm shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-aversis-dark mb-8 leading-tight">
              <span className="text-aversis-blue">US-Marktaufbau für</span><br/>
              <span className="text-aversis-orange">Schweizer KMU&apos;s</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto">
              <strong>Machbarkeitsstudie, Standortwahl, Aufbau und Betriebsführung</strong><br/>
              Strukturierte Projektbegleitung mit praktischer US-Erfahrung - von der Marktanalyse über Standortaufbau bis zur operativen Selbstständigkeit
            </p>
            
            {/* Key Credibility Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-orange">12 Jahre</div>
                <div className="text-sm text-gray-600">US-Marktaufbau Erfahrung</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-blue">#1</div>
                <div className="text-sm text-gray-600">Profitabelste Niederlassung ausgebaut</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-orange">Etabliertes</div>
                <div className="text-sm text-gray-600">US-Partnernetzwerk</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-blue">Dual</div>
                <div className="text-sm text-gray-600">Schweiz-USA Staatsbürger</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <button className="btn-primary text-lg px-8 py-4">
                Unverbindliches Erstgespräch
              </button>
              <a href="/us-readiness-check" className="btn-secondary text-lg px-8 py-4 text-center">
                Expansions-Readiness Check
              </a>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              Limitierte Verfügbarkeit - Hands-on Begleitung bedeutet fokussierte Projektarbeit
            </p>
          </div>
        </div>
        
        {/* Swiss-US Theme Decorative Elements */}
        <div className="absolute top-16 right-16 w-12 h-12 bg-red-600 opacity-20 rounded-full"></div>
        <div className="absolute top-8 right-32 w-8 h-8 bg-blue-600 opacity-30 rounded-full"></div>
        <div className="absolute bottom-24 left-16 w-16 h-16 bg-aversis-blue opacity-15 rounded-full"></div>
        <div className="absolute bottom-16 left-8 w-10 h-10 bg-red-600 opacity-25 rounded-full"></div>
      </section>

      {/* Problem/Opportunity Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              US-Marktchancen strategisch nutzen
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              39% Zölle verwandeln sich in 52 Milliarden CHF Marktpotenzial - wenn Sie es richtig angehen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Opportunities */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aversis-dark">Strategische Chancen</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Wachstumspotenzial:</strong><br/>
                    <span className="text-gray-600">CHF 52 Mrd. Opportunity für Schweizer Fertiger</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Lokale Präsenz:</strong><br/>
                    <span className="text-gray-600">Näher zu amerikanischen Kunden und Supply Chains</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Skalierungsvorteile:</strong><br/>
                    <span className="text-gray-600">US-Produktionskapazitäten für kontinentale Expansion</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">First-Mover-Vorteil:</strong><br/>
                    <span className="text-gray-600">Competitive Advantage gegenüber zögerlicher Konkurrenz</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Proven Success */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-aversis-dark">Bewährt & Erfolgreich</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">US-Niederlassung:</strong><br/>
                    <span className="text-gray-600">Zur profitabelsten Niederlassung weltweit entwickelt</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">Krisenerprobt:</strong><br/>
                    <span className="text-gray-600">Erfolgreiche US-Marktführung durch Finanzkrise 2008/09</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">Skalierungserfahrung:</strong><br/>
                    <span className="text-gray-600">Teams von 0 auf 50+ Mitarbeiter aufgebaut</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">Kulturbrücke:</strong><br/>
                    <span className="text-gray-600">Schweiz-USA Doppelbürger, perfekte Marktkenntnis</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Interim Management Packages */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Ihr erfahrener Partner für US-Marktaufbau
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Strukturierter Interim-Ansatz mit definierten Projektphasen und klaren Erfolgsmeilensteinen
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phase 1: Market Entry Assessment */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aversis-dark">Phase 1</h3>
                  <div className="text-sm text-green-600 font-semibold">3-6 Monate</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-aversis-dark mb-4">Market Entry Assessment</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Marktanalyse & Feasibility Study</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Standortevaluation & Kosten-Nutzen-Analyse</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Regulatory Requirements Mapping</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Business Case Development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Risikobewertung & Mitigation-Strategien</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-sm font-semibold text-green-800">Ziel: Go/No-Go Entscheidung</div>
                <div className="text-xs text-green-600 mt-1">Fundierte Basis für US-Investment</div>
              </div>
            </div>

            {/* Phase 2: Manufacturing Setup */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-aversis-orange text-white px-4 py-1 rounded-full text-xs font-semibold">
                KERN-EXPERTISE
              </div>
              <div className="flex items-center mb-6 mt-2">
                <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aversis-dark">Phase 2</h3>
                  <div className="text-sm text-aversis-orange font-semibold">6-18 Monate</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-aversis-dark mb-4">Manufacturing Setup</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Legal Entity Setup & Corporate Structure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Facility Planning, Design & Equipment Setup</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Supply Chain Establishment & Vendor Qual.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Quality System Implementation (ISO etc.)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Initial Team Recruitment & Training</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <div className="text-sm font-semibold text-orange-800">Ziel: Produktionsstart</div>
                <div className="text-xs text-orange-600 mt-1">Schweizer Qualität in US-Produktion</div>
              </div>
            </div>

            {/* Phase 3: Operations Scaling */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aversis-dark">Phase 3</h3>
                  <div className="text-sm text-aversis-blue font-semibold">12-24 Monate</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-aversis-dark mb-4">Operations Scaling</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Production Optimization & Lean Implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Team Development & Leadership Training</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Customer Relationship Building & Sales Support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Financial Controls & Reporting Systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Knowledge Transfer zu lokalem Management</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm font-semibold text-blue-800">Ziel: Selbständiger Betrieb</div>
                <div className="text-xs text-blue-600 mt-1">Nachhaltiger Wissenstransfer</div>
              </div>
            </div>
          </div>

          {/* Success Timeline */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-aversis-dark">Strukturierter Interim-Ansatz</h3>
              <p className="text-gray-600 mt-2">Von der Machbarkeitsstudie bis zur profitablen US-Produktion</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">1</div>
                <div className="text-sm font-semibold text-gray-600">Assessment</div>
                <div className="text-xs text-green-600">3-6 Mon</div>
              </div>
              <div className="h-1 bg-gray-300 flex-1 mx-4"></div>
              <div className="text-center flex-1">
                <div className="w-12 h-12 bg-aversis-orange rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">2</div>
                <div className="text-sm font-semibold text-gray-600">Setup</div>
                <div className="text-xs text-aversis-orange">6-18 Mon</div>
              </div>
              <div className="h-1 bg-gray-300 flex-1 mx-4"></div>
              <div className="text-center flex-1">
                <div className="w-12 h-12 bg-aversis-blue rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">3</div>
                <div className="text-sm font-semibold text-gray-600">Scaling</div>
                <div className="text-xs text-aversis-blue">12-24 Mon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - US Manufacturing Success Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Bewährt: US-Expansion zur profitabelsten Niederlassung weltweit
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Von der Vision zur realisierten #1 Performance - so entstand eine der erfolgreichsten US-Expansionen in der Schweizer Fertigungsbranche
            </p>
          </div>

          {/* Case Study Hero */}
          <div className="bg-gradient-to-r from-aversis-blue to-blue-700 rounded-3xl p-8 lg:p-12 text-white mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-6 bg-red-600 rounded-sm mr-2"></div>
                  <div className="w-1 h-6 bg-white rounded-sm mr-2"></div>
                  <div className="w-3 h-6 bg-red-600 rounded-sm mr-4"></div>
                  <div className="text-3xl font-bold">→</div>
                  <div className="w-6 h-4 bg-blue-600 ml-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-xs">★</div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">Erfolgsgeschichte US-Expansion</h3>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  &laquo;Als General Manager für US-Operations durfte ich den amerikanischen Marktaufbau von Grund auf leiten 
                  und die US-Niederlassung zur profitabelsten des Unternehmens entwickeln.&raquo;
                </p>
                <div className="text-lg text-blue-200 font-medium">
                  — Stephan Zwahlen, Interim Manager US-Expansion
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6">Messbare Erfolge</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-aversis-orange mb-2">#1</div>
                    <div className="text-sm text-blue-100">Profitabelste Niederlassung weltweit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-aversis-orange mb-2">12+</div>
                    <div className="text-sm text-blue-100">Jahre US-Marktaufbau-Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-aversis-orange mb-2">50+</div>
                    <div className="text-sm text-blue-100">Team-Mitglieder aufgebaut</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-aversis-orange mb-2">2008/09</div>
                    <div className="text-sm text-blue-100">Erfolgreich durch Finanzkrise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Factors */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-aversis-dark mb-4">Strategische Markterschließung</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Systematische US-Marktanalyse und Zielkundenidentifikation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Aufbau lokaler Vertriebspartnerschaften</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Schweizer Qualität an amerikanische Standards adaptiert</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-aversis-dark mb-4">Team-Aufbau & Führung</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Von 0 auf 50+ hochqualifizierte Mitarbeiter</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bikulturelle Führung: Schweizer Präzision + US-Agilität</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Nachhaltiger Wissenstransfer und Local Leadership Development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-aversis-dark mb-4">Operative Exzellenz</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Lean Manufacturing und kontinuierliche Verbesserung</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Qualitätssysteme nach amerikanischen Standards implementiert</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-aversis-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Profitabilität durch Effizienz und Kundenorientierung</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl text-aversis-orange mb-6">&ldquo;</div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                &laquo;Stephans einzigartige Kombination aus Schweizer Präzision und amerikanischer Marktkenntnis war 
                der Schlüssel zum Erfolg. Er hat nicht nur eine profitable Niederlassung aufgebaut, 
                sondern ein nachhaltiges Geschäftsmodell geschaffen, das bis heute Bestand hat.&raquo;
              </p>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold text-aversis-dark">Schweizer Fertigungsunternehmen</div>
                  <div className="text-sm text-gray-600">Präzisionsteile-Hersteller</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Success Metrics */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-aversis-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-aversis-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-aversis-dark mb-2">Krisenfest</div>
              <p className="text-sm text-gray-600">Erfolgreiche Führung durch Finanzkrise 2008/09</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-aversis-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-aversis-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-aversis-dark mb-2">Profitabel</div>
              <p className="text-sm text-gray-600">#1 Performance aller weltweiten Niederlassungen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-aversis-dark mb-2">Skalierbar</div>
              <p className="text-sm text-gray-600">Von Startup-Phase zu 50+ Mitarbeitern</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-aversis-dark mb-2">Nachhaltig</div>
              <p className="text-sm text-gray-600">Wissenstransfer für langfristigen Erfolg</p>
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
                Über Stephan Zwahlen
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                &laquo;Mein Name ist Stephan Zwahlen. Ich glaube fest daran, dass jedes Unternehmen 
                das Potenzial hat, sowohl operativ exzellent als auch ein grossartiger Arbeitsplatz zu sein.&raquo;
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
                    &laquo;Unternehmen sind erfolgreicher, wenn Menschen gern zur Arbeit kommen. 
                    Deshalb entwickle ich nicht nur Prozesse, sondern auch die Kultur, die sie zum Leben erweckt.&raquo;
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
                  &laquo;Ich helfe Schweizer KMU-Inhabern dabei, Unternehmen zu schaffen, 
                  die sowohl wirtschaftlich erfolgreich als auch menschlich bereichernd sind.&raquo;
                </p>
                <div className="mt-3 text-sm text-gray-600">Stephan Zwahlen, Gründer & Geschäftsführer</div>
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
              
              {/* Decorative elements - Logo Theme */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-aversis-orange rounded-full opacity-40"></div>
              <div className="absolute -top-8 -right-12 w-6 h-6 bg-aversis-blue rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-aversis-blue rounded-full opacity-35"></div>
              <div className="absolute -bottom-8 -left-12 w-7 h-7 bg-aversis-orange rounded-full opacity-45"></div>
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
                <p className="text-blue-900">
                  Durchschnittliche Umsatzsteigerung unserer KMU-Kunden innerhalb von 18 Monaten
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8">
                <div className="text-5xl font-bold text-aversis-orange mb-4">95%</div>
                <h3 className="text-xl font-semibold text-white mb-3">On-Time-Delivery</h3>
                <p className="text-blue-900">
                  Verbesserung der Liefertreue durch optimierte Prozesse und klare Verantwortlichkeiten
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8">
                <div className="text-5xl font-bold text-aversis-orange mb-4">4.8</div>
                <h3 className="text-xl font-semibold text-white mb-3">Mitarbeiterzufriedenheit</h3>
                <p className="text-blue-900">
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
                  <div className="text-blue-900">
                    <strong className="text-blue-900">Prozessoptimierung:</strong> 30-50% Reduktion von Durchlaufzeiten
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-900">
                    <strong className="text-blue-900">Qualitätssteigerung:</strong> 60% weniger Reklamationen und Nacharbeit
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-900">
                    <strong className="text-blue-900">Team-Performance:</strong> 40% höhere Produktivität durch bessere Zusammenarbeit
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-blue-900">
                    <strong className="text-blue-900">Fluktuation:</strong> 70% weniger Personalwechsel in Schlüsselpositionen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA Section - US Manufacturing Setup */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-red-600 via-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
          {/* Urgency Header */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🚨 TARIFF IMPACT: 39% auf Schweizer Produkte
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Starten Sie Ihre US-Expansion<br/>
              <span className="text-yellow-300">mit bewährter Expertise</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Während Ihre Konkurrenz noch zögert, sichern Sie sich Ihren Wettbewerbsvorteil im US-Markt. 
              Mit 12 Jahren bewährter US-Marktaufbau-Erfahrung und limitierter Verfügbarkeit.
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strukturierter Interim-Ansatz</h3>
              <p className="text-blue-100 text-sm">Definierte Projektphasen mit klaren Erfolgsmeilensteinen</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Limitierte Verfügbarkeit</h3>
              <p className="text-blue-100 text-sm">Max. 3 parallele US-Setup-Mandate für Qualitätssicherung</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bewährte Methodik</h3>
              <p className="text-blue-100 text-sm">Erprobte Playbooks aus 12 Jahren US-Marktaufbau</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 mb-12 max-w-5xl mx-auto shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-aversis-dark mb-6">
                  Kostenlose US-Markt Machbarkeitsstudie
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong className="text-aversis-orange">90 Minuten strategische US-Marktbewertung</strong><br/>
                  Exklusiv für Schweizer Fertigungsunternehmen ab 20 Mitarbeitern
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-aversis-dark">US-Marktpotenzial Assessment:</strong><br/>
                      <span className="text-gray-600 text-sm">Analyse Ihrer spezifischen Marktchancen</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-aversis-dark">ROI-Schnellberechnung:</strong><br/>
                      <span className="text-gray-600 text-sm">Kostenschätzung vs. erwartete Erträge</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-aversis-dark">Nächste Schritte Roadmap:</strong><br/>
                      <span className="text-gray-600 text-sm">Konkreter Zeitplan für Ihren US-Markteintritt</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center lg:border-l lg:border-gray-200 lg:pl-12">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">Nur noch 2 Plätze</div>
                  <div className="text-sm text-red-700">für Starttermine 2026 verfügbar</div>
                </div>

                <button className="bg-gradient-to-r from-aversis-orange to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full mb-4">
                  🚀 Machbarkeitsstudie sichern (90 Min)
                </button>
                
                <div className="text-xs text-gray-500 mb-4">
                  Wert: CHF 2&apos;500 • Heute kostenlos
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a href="/roi-calculator" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-4 py-3 rounded-lg transition text-center text-sm">
                    📊 ROI Calculator
                  </a>
                  <a href="/us-readiness-check" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-4 py-3 rounded-lg transition text-center text-sm">
                    ✅ Readiness Check
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 opacity-80">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+41 33 823 05 09</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>stephan@aversis.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span>Schweiz-USA Doppelbürger</span>
            </div>
          </div>

          {/* Final Urgency Message */}
          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl inline-block font-bold">
            ⏰ Frühe Reservierung für optimale Projektplanung • Wissenstransfer inklusive
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}