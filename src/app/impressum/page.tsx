import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-aversis-dark mb-12">Impressum</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Angaben gemäss Art. 5 TMG</h2>
              <p>
                aversis GmbH<br/>
                Untere Bönigstrasse 20<br/>
                3800 Interlaken<br/>
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Vertreten durch</h2>
              <p>
                Geschäftsführer: Stephan Zwahlen
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Kontakt</h2>
              <p>
                Telefon: +41 33 823 05 09<br/>
                E-Mail: info@aversis.com<br/>
                Website: www.aversis.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Unternehmensregistereintrag</h2>
              <p>
                Handelsregister: Kanton Bern<br/>
                Registernummer: CHE-XXX.XXX.XXX
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäss §27a Umsatzsteuergesetz:<br/>
                CHE-XXX.XXX.XXX MWST
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Stephan Zwahlen<br/>
                Untere Bönigstrasse 20<br/>
                3800 Interlaken<br/>
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2 mt-4">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}