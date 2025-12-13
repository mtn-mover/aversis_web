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
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/aversis 3D Kugeln.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            Kein Schwätzer.<br />
            <span className="text-amber-400">Macher.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Ich übernehme. Ich setze um. Ich liefere Resultate.<br />
            Keine Folien. Keine Ausreden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-none transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Klartext reden
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="px-8 py-4 border border-gray-600 hover:border-white text-white font-medium rounded-none transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Was ich anders mache
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-amber-400"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gray-500 line-through">Reden</span>{' '}
            <span className="text-amber-400">Machen</span>
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="text-amber-400 text-3xl font-bold">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">CHF 50k für eine Präsentation?</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Die meisten liefern PowerPoints. Ich liefere Ergebnisse.
                  Der Unterschied: Ich bleibe, bis es funktioniert.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-900"></div>

            <div className="flex gap-6 items-start">
              <div className="text-amber-400 text-3xl font-bold">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Change-Projekt ohne Change?</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Transformation scheitert nicht an der Strategie. Sie scheitert an der Umsetzung.
                  Ich kenne beide Seiten - als GL-Mitglied habe ich Veränderungen selbst durchgezogen.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-900"></div>

            <div className="flex gap-6 items-start">
              <div className="text-amber-400 text-3xl font-bold">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Marketing ohne Wirkung?</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Klicks sind keine Kunden. Ich baue Marketing-Systeme, die verkaufen -
                  nicht solche, die nur gut aussehen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was ich mache Section */}
      <section id="ansatz" className="py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-400 font-mono text-sm mb-4">// MODUS OPERANDI</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Ich komme rein.<br />
                Ich übernehme.<br />
                Ich liefere.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                20 Jahre in der Industrie. Immer als Macher.
                Als Managing Director habe ich Firmen nach vorne gebracht, nicht analysiert.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-400"></div>
                  <span className="text-gray-300">Interim-Führung wenn&apos;s brennt</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-400"></div>
                  <span className="text-gray-300">Teams motivieren statt Folien zeigen</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-400"></div>
                  <span className="text-gray-300">Marketing das Umsatz bringt</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-400"></div>
                  <span className="text-gray-300">Digitale Systeme die funktionieren</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/Stephan_new.png"
                alt="Stephan Zwahlen"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-2xl font-bold">Stephan Zwahlen</p>
                <p className="text-gray-400">20+ Jahre Umsetzung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-32 bg-gray-950 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-400 font-mono text-sm mb-4 text-center">// NICHT NUR GEREDET</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Gemacht. Geliefert.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-gray-800 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-5xl font-bold text-amber-400 mb-4">+80%</div>
              <p className="text-xl font-bold mb-2">Revenue Growth</p>
              <p className="text-gray-500">Als Managing Director. Mittendrin, nicht daneben.</p>
            </div>

            <div className="group p-8 border border-gray-800 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-5xl font-bold text-amber-400 mb-4">3</div>
              <p className="text-xl font-bold mb-2">Plattformen gebaut</p>
              <p className="text-gray-500">LMS, Community, Booking. Konzipiert und deployed.</p>
            </div>

            <div className="group p-8 border border-gray-800 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-5xl font-bold text-amber-400 mb-4">20+</div>
              <p className="text-xl font-bold mb-2">Jahre Praxis</p>
              <p className="text-gray-500">Precision Engineering. Manufacturing. Führung.</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <a href="https://trc-academy.com" target="_blank" rel="noopener noreferrer"
               className="block p-6 bg-black border border-gray-800 hover:border-gray-600 transition-all group">
              <div className="text-gray-500 font-mono text-xs mb-2">PROJEKT 01</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">TRC Academy</h3>
              <p className="text-gray-500 text-sm">Learning Management System</p>
            </a>

            <a href="https://flaesch.info" target="_blank" rel="noopener noreferrer"
               className="block p-6 bg-black border border-gray-800 hover:border-gray-600 transition-all group">
              <div className="text-gray-500 font-mono text-xs mb-2">PROJEKT 02</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">fläsch.info</h3>
              <p className="text-gray-500 text-sm">Community Platform</p>
            </a>

            <a href="https://hostelopia.com" target="_blank" rel="noopener noreferrer"
               className="block p-6 bg-black border border-gray-800 hover:border-gray-600 transition-all group">
              <div className="text-gray-500 font-mono text-xs mb-2">PROJEKT 03</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">Hostelopia</h3>
              <p className="text-gray-500 text-sm">Booking Platform</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-32 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Kein Bullshit.<br />
              <span className="text-amber-400">Nur Resultate.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              30 Minuten. Wir reden Klartext. Sie entscheiden, ob&apos;s passt.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
