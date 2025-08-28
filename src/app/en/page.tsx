import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - US Manufacturing Focus */}
      <section className="relative py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/countryside_lowres.jpg"
            alt="Countryside Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center items-center mb-8">
              {/* Swiss to US Flag Animation */}
              <div className="flex items-center gap-4 bg-gray-100/80 px-6 py-3 rounded-full shadow-lg">
                {/* Swiss Flag - Quadratisch */}
                <div className="relative">
                  <Image 
                    src="/images/swiss_flag.jpg" 
                    alt="Swiss Flag" 
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
                    alt="US Flag" 
                    width={60}
                    height={40}
                    className="rounded-sm shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg bg-gray-100/50 px-6 py-4 rounded-lg inline-block">
              <span className="text-aversis-blue">U.S. Market Entry for</span><br/>
              <span className="text-aversis-orange">Swiss SMEs</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-6 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
              <strong>Feasibility Study, Site Selection, Setup and Operations Management</strong><br/>
              Structured project guidance with practical U.S. experience - from market analysis to operational independence
            </p>
            
            {/* Key Credibility Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-gray-100/80 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-orange">12 Years</div>
                <div className="text-sm text-gray-800">U.S. Market Entry Experience</div>
              </div>
              <div className="bg-gray-100/80 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-blue">#1</div>
                <div className="text-sm text-gray-800">Most Profitable Subsidiary Built</div>
              </div>
              <div className="bg-gray-100/80 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-orange">Established</div>
                <div className="text-sm text-gray-800">U.S. Partner Network</div>
              </div>
              <div className="bg-gray-100/80 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-aversis-blue">Dual</div>
                <div className="text-sm text-gray-800">Swiss-USA Citizen</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <a href="/en/kontakt" className="btn-primary text-lg px-8 py-4 text-center flex items-center justify-center">
                Free Initial Consultation
              </a>
              <a href="/en/us-readiness-check" className="bg-aversis-blue text-white hover:bg-blue-700 font-semibold px-8 py-4 rounded-lg transition text-center inline-block text-lg hover:-translate-y-0.5 hover:shadow-lg">
                Expansion Readiness Check
              </a>
            </div>
            
            <p className="mt-6 text-sm text-white drop-shadow-md">
              Limited availability - Hands-on guidance with intensive support - contact us early!
            </p>
          </div>
        </div>
        
      </section>

      {/* Problem/Opportunity Section */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Strategically Leverage U.S. Market Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Local presence builds trust - American customers prefer to buy from U.S.-based suppliers
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
                <h3 className="text-2xl font-bold text-aversis-dark">Strategic Opportunities</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Market Position:</strong><br/>
                    <span className="text-gray-600">From exporter to local supplier - sustainable competitive advantage</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Local Presence:</strong><br/>
                    <span className="text-gray-600">American customers prefer U.S.-based suppliers</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Scaling Advantages:</strong><br/>
                    <span className="text-gray-600">North American expansion from central U.S. location</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-800">Market Leadership:</strong><br/>
                    <span className="text-gray-600">Establishment while competition still hesitates</span>
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
                <h3 className="text-2xl font-bold text-aversis-dark">Proven & Successful</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">U.S. Subsidiary:</strong><br/>
                    <span className="text-gray-600">Developed into most profitable subsidiary worldwide</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">Crisis-Tested:</strong><br/>
                    <span className="text-gray-600">Successful U.S. market leadership through 2008/09 financial crisis</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">Scaling Experience:</strong><br/>
                    <span className="text-gray-600">Built teams from 0 to 50+ employees</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-aversis-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-aversis-orange">Cultural Bridge:</strong><br/>
                    <span className="text-gray-600">Swiss-USA dual citizen, perfect market knowledge</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Interim Management Packages */}
      <section id="projektablauf" className="py-20 lg:py-28 bg-gradient-to-r from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
              Your Experienced Partner for U.S. Market Entry
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              U.S. success requires more than good products - cultural understanding and local know-how make the difference
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phase 1: Market Entry Assessment */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aversis-dark">Phase 1</h3>
                  <div className="text-sm text-green-600 font-semibold">3-6 Months</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-aversis-dark mb-4">Market Entry Assessment</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Market Analysis & Feasibility Study</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Site Evaluation & Cost-Benefit Analysis</span>
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
                  <span>Risk Assessment & Mitigation Strategies</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-sm font-semibold text-green-800">Goal: Go/No-Go Decision</div>
                <div className="text-xs text-green-600 mt-1">Solid foundation for U.S. investment</div>
              </div>
            </div>

            {/* Phase 2: Manufacturing Setup */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-aversis-orange text-white px-4 py-1 rounded-full text-xs font-semibold">
                CORE EXPERTISE
              </div>
              <div className="flex items-center mb-6 mt-2">
                <div className="w-16 h-16 bg-aversis-orange rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aversis-dark">Phase 2</h3>
                  <div className="text-sm text-aversis-orange font-semibold">6-18 Months</div>
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
                <div className="text-sm font-semibold text-orange-800">Goal: Production Start</div>
                <div className="text-xs text-orange-600 mt-1">Swiss quality in U.S. production</div>
              </div>
            </div>

            {/* Phase 3: Operations Scaling */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aversis-blue rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aversis-dark">Phase 3</h3>
                  <div className="text-sm text-aversis-blue font-semibold">12-24 Months</div>
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
                  <span>Knowledge Transfer to Local Management</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm font-semibold text-blue-800">Goal: Independent Operations</div>
                <div className="text-xs text-blue-600 mt-1">Sustainable knowledge transfer</div>
              </div>
            </div>
          </div>

          {/* Success Timeline */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-aversis-dark">Structured Interim Approach</h3>
              <p className="text-gray-600 mt-2">From feasibility study to profitable U.S. production</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">1</div>
                <div className="text-sm font-semibold text-gray-600">Assessment</div>
                <div className="text-xs text-green-600">3-6 Months</div>
              </div>
              <div className="h-1 bg-gray-300 flex-1 mx-4"></div>
              <div className="text-center flex-1">
                <div className="w-12 h-12 bg-aversis-orange rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">2</div>
                <div className="text-sm font-semibold text-gray-600">Setup</div>
                <div className="text-xs text-aversis-orange">6-18 Months</div>
              </div>
              <div className="h-1 bg-gray-300 flex-1 mx-4"></div>
              <div className="text-center flex-1">
                <div className="w-12 h-12 bg-aversis-blue rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">3</div>
                <div className="text-sm font-semibold text-gray-600">Scaling</div>
                <div className="text-xs text-aversis-blue">12-24 Months</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="uber-stephan" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aversis-dark mb-6">
                About Us
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                &ldquo;My name is Stephan Zwahlen. In 12 years, I learned in the USA: U.S. success requires more than good products - cultural bridges and local understanding are crucial.&rdquo;
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-aversis-orange pl-6">
                  <h3 className="text-lg font-semibold text-aversis-dark mb-2">My Background</h3>
                  <p className="text-gray-600">
                    12 years of U.S. market entry experience in various roles - from Product Manager to Area Sales Manager to Managing Director. Building distributor networks and leading American teams. Dual Swiss-USA citizenship enables perfect cultural bridge function.
                  </p>
                </div>

                <div className="border-l-4 border-aversis-blue pl-6">
                  <h3 className="text-lg font-semibold text-aversis-dark mb-2">My Experience</h3>
                  <p className="text-gray-600">
                    &ldquo;I have seen Swiss companies fail in the USA - mostly because products were not adapted for the American market. Successful U.S. expansion requires a structured approach.&rdquo;
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-semibold text-aversis-dark mb-2">My Approach</h3>
                  <p className="text-gray-600">
                    Project-based guidance from feasibility study to operational independence. Hands-on implementation combined with knowledge transfer for sustainable local leadership.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl">
                <p className="text-aversis-dark font-medium italic">
                  &ldquo;I help Swiss SMEs successfully and sustainably enter the American market - with structured guidance and cultural competence.&rdquo;
                </p>
                <div className="mt-3 text-sm text-gray-600">Stephan Zwahlen, U.S. Market Entry Specialist</div>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="/images/Steph_low res new.jpg"
                alt="Stephan Zwahlen"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              {/* Decorative elements - Logo Theme */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-aversis-orange rounded-full opacity-40"></div>
              <div className="absolute -top-8 -right-12 w-6 h-6 bg-aversis-blue rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-aversis-blue rounded-full opacity-35"></div>
              <div className="absolute -bottom-8 -left-12 w-7 h-7 bg-aversis-orange rounded-full opacity-45"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Urgency CTA Section - US Manufacturing Setup */}
      <section className="relative py-20 lg:py-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Industrial_building.jpg"
            alt="Industrial Building Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
          {/* Urgency Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Start Your U.S. Expansion<br/>
              <span className="text-yellow-300">with Proven Expertise</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              While your competition still hesitates, secure your competitive advantage in the U.S. market. 
              With 12 years of proven U.S. market entry experience and limited availability.
            </p>
          </div>


          {/* Main CTA */}
          <div className="bg-gray-100/80 rounded-2xl p-6 lg:p-8 mb-12 max-w-3xl mx-auto shadow-lg backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-aversis-dark mb-3">
                Free Initial Consultation
              </h3>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                <strong>Let us understand your U.S. expansion goals</strong><br/>
                Initial assessment of feasibility, effort and timeline<br/>
                <span className="text-lg">Exclusively for Swiss SMEs</span>
              </p>
              
              <a href="/en/kontakt" className="bg-aversis-orange hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 opacity-80">
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}