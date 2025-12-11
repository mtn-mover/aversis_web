'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/aversis 3D Kugeln.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-amber-400 font-medium tracking-wider uppercase mb-6">Aversis GmbH - Unternehmensberatung</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Kulturwandel,<br />
            <span className="text-amber-400">der sich im Umsatz zeigt.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ihr Unternehmen steckt fest? Wir verbinden operative Transformation mit modernem Marketing -
            und setzen um, statt nur zu beraten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Erstgespräch vereinbaren
            </button>
            <button
              onClick={() => scrollToSection('ansatz')}
              className="px-8 py-4 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-all duration-300"
            >
              Unser Ansatz
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Kennen Sie das?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Die meisten Schweizer KMUs stecken irgendwann fest. Die Frage ist nur: Erkennen Sie es rechtzeitig?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔄',
                title: 'Post-Merger Chaos',
                description: 'Zwei Unternehmen zusammengeführt, aber die Kulturen prallen aufeinander. Teams ziehen nicht am gleichen Strang.'
              },
              {
                icon: '📉',
                title: 'Stagnierender Umsatz',
                description: 'Das Produkt stimmt, aber neue Kunden bleiben aus. Marketing läuft, bringt aber nichts Messbares.'
              },
              {
                icon: '🔀',
                title: 'Führungswechsel',
                description: 'Neue Führung, alte Strukturen. Widerstand im Team. Veränderung wird gebremst statt getragen.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl text-white font-medium mb-4">
              &quot;Wir haben alles versucht&quot; - höre ich oft.
            </p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Meistens liegt es nicht am Willen. Sondern daran, dass Kultur und Marketing als getrennte Welten behandelt werden. Das ändern wir.
            </p>
          </div>
        </div>
      </section>

      {/* Ansatz Section */}
      <section id="ansatz" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-600 font-medium tracking-wider uppercase mb-4">Unser Ansatz</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Transformation beginnt innen - und zeigt sich aussen.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kulturwandel allein bringt keine Kunden. Marketing allein ändert keine Kultur.
                Erst die Verbindung von beidem schafft nachhaltiges Wachstum.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Nicht nur beraten - umsetzen</h3>
                    <p className="text-slate-600">Keine PowerPoints die verstauben. Wir arbeiten operativ mit, bis es läuft.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Digitale Tools sinnvoll einsetzen</h3>
                    <p className="text-slate-600">KI und Automatisierung wo es Sinn macht - nicht als Selbstzweck, sondern für echte Effizienz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Menschen mitnehmen</h3>
                    <p className="text-slate-600">Veränderung funktioniert nur, wenn das Team sie trägt. Das ist kein Soft-Skill - das ist Erfolgsfaktor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-amber-400">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Analyse</h4>
                      <p className="text-slate-400 text-sm">Wo stehen Sie wirklich?</p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-700 ml-8"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-amber-400">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Strategie</h4>
                      <p className="text-slate-400 text-sm">Kultur + Marketing verzahnt</p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-700 ml-8"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-amber-400">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Umsetzung</h4>
                      <p className="text-slate-400 text-sm">Hands-on bis zum Resultat</p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-700 ml-8"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Wachstum</h4>
                      <p className="text-slate-400 text-sm">Messbar im Umsatz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über Stephan Section */}
      <section id="ueber" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-amber-600 font-medium tracking-wider uppercase mb-4">Über mich</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Stephan Zwahlen
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                20+ Jahre operative Führungserfahrung in der Schweizer Industrie.
                Nicht Theorie aus Büchern - sondern aus der Praxis. Als Managing Director
                habe ich Transformationen nicht geplant, sondern durchgezogen.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-3xl font-bold text-amber-500">+80%</p>
                  <p className="text-sm text-slate-600">Revenue Growth erzielt</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-3xl font-bold text-amber-500">20+</p>
                  <p className="text-sm text-slate-600">Jahre Führungserfahrung</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-3xl font-bold text-amber-500">3</p>
                  <p className="text-sm text-slate-600">Digitale Plattformen gebaut</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-3xl font-bold text-amber-500">✓</p>
                  <p className="text-sm text-slate-600">Certified Executive Coach</p>
                </div>
              </div>

              <div className="space-y-3 text-slate-600">
                <p className="flex items-center gap-2">
                  <span className="text-amber-500">▸</span>
                  Post-Merger Integration erfolgreich geleitet
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-500">▸</span>
                  Hintergrund: Precision Engineering & Manufacturing
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-500">▸</span>
                  Dual Swiss/US Citizenship - internationale Perspektive
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/Stephan_new.png"
                  alt="Stephan Zwahlen - Managing Director Aversis GmbH"
                  className="rounded-2xl shadow-xl object-cover w-full aspect-square"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-medium shadow-lg">
                  Praxis statt Theorie
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekte Section */}
      <section id="projekte" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-medium tracking-wider uppercase mb-4">Referenzen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Gebaut. Nicht nur geplant.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diese digitalen Projekte habe ich konzipiert und umgesetzt -
              als Beweis, dass ich nicht nur berate, sondern liefere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">TRC</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">TRC Training Academy</h3>
                <p className="text-slate-600 mb-4">
                  Learning Management System für Mitarbeitertraining. Von der Konzeption bis zum Rollout.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">LMS</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">E-Learning</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">fläsch</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">fläsch.info</h3>
                <p className="text-slate-600 mb-4">
                  Community-Plattform für lokale Vernetzung. Konzept, Design und technische Umsetzung.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Community</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Platform</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">H</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Hostelopia</h3>
                <p className="text-slate-600 mb-4">
                  Booking-Plattform für Unterkünfte. Full-Stack Entwicklung mit modernem Tech-Stack.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Booking</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-medium tracking-wider uppercase mb-4">Leistungen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was wir für Sie tun
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-14 h-14 bg-amber-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interim Management</h3>
              <p className="text-slate-400 mb-4">
                Operative Führung auf Zeit. Für Übergangsphasen, Vakanzen oder gezielte Transformationen.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Geschäftsführung ad interim
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Turnaround Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Post-Merger Integration
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-14 h-14 bg-amber-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Kulturwandel & Transformation</h3>
              <p className="text-slate-400 mb-4">
                Nachhaltige Veränderung, die vom Team getragen wird. Mit klarer Strategie und Begleitung.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Change Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Führungskräfte-Coaching
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Organisationsentwicklung
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-14 h-14 bg-amber-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Marketing & Digitalisierung</h3>
              <p className="text-slate-400 mb-4">
                Moderne Marketing-Strategien umsetzen. Von der Website bis zur Lead-Generierung.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Digital Marketing Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Website & Plattformen
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Marketing Automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-medium tracking-wider uppercase mb-4">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Unverbindliches Erstgespräch - 30 Minuten, in denen wir herausfinden,
              ob und wie ich Ihnen helfen kann.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
