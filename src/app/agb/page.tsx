'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AGB() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-aversis-orange hover:text-orange-600 transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück
            </button>
          </div>
          <h1 className="text-4xl font-bold text-aversis-dark mb-12">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-500">Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long' })}</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 1 Geltungsbereich</h2>
              <p className="mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &ldquo;AGB&rdquo;) gelten für alle Geschäftsbeziehungen zwischen der aversis GmbH, Untere Bönigstrasse 20, 3800 Interlaken, Schweiz (nachfolgend &ldquo;aversis&rdquo;) und ihren Kunden (nachfolgend &ldquo;Auftraggeber&rdquo;).
              </p>
              <p>
                (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 2 Leistungsumfang</h2>
              <p className="mb-4">
                (1) aversis erbringt Beratungs- und Unterstützungsleistungen im Bereich U.S.-Marktaufbau für Schweizer KMU. Der genaue Umfang der Leistungen wird in einem separaten Beratungsvertrag oder Projektauftrag festgelegt.
              </p>
              <p className="mb-4">
                (2) Die Leistungen umfassen insbesondere:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>U.S.-Machbarkeitsstudien und Marktanalysen</li>
                <li>Standortwahl und Unternehmenssetup in den USA</li>
                <li>Marktaufbau und Expansionsbegleitung</li>
                <li>Betriebsführung und Übergabemanagement</li>
                <li>Kulturelle Integration und Schulungen</li>
              </ul>
              <p>
                (3) aversis ist berechtigt, zur Erfüllung ihrer Verpflichtungen Dritte einzusetzen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 3 Vertragsschluss</h2>
              <p className="mb-4">
                (1) Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar.
              </p>
              <p className="mb-4">
                (2) Der Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Unterzeichnung eines Beratungsvertrages zustande.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 4 Mitwirkungspflichten des Auftraggebers</h2>
              <p className="mb-4">
                (1) Der Auftraggeber verpflichtet sich, aversis alle zur ordnungsgemäßen Durchführung des Auftrags erforderlichen Informationen und Unterlagen rechtzeitig und vollständig zur Verfügung zu stellen.
              </p>
              <p className="mb-4">
                (2) Der Auftraggeber benennt einen kompetenten Ansprechpartner, der aversis während der Projektlaufzeit zur Verfügung steht und befugt ist, notwendige Entscheidungen zu treffen oder herbeizuführen.
              </p>
              <p>
                (3) Verzögerungen aufgrund mangelnder Mitwirkung des Auftraggebers gehen zu dessen Lasten und können zu Mehrkosten führen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 5 Vergütung und Zahlungsbedingungen</h2>
              <p className="mb-4">
                (1) Die Vergütung richtet sich nach der individuellen Vereinbarung im Beratungsvertrag.
              </p>
              <p className="mb-4">
                (2) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="mb-4">
                (3) Reisekosten und Spesen werden gesondert nach Aufwand berechnet, sofern nicht anders vereinbart.
              </p>
              <p>
                (4) Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 6 Vertraulichkeit</h2>
              <p className="mb-4">
                (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen streng vertraulich zu behandeln und nur für die vereinbarten Zwecke zu verwenden.
              </p>
              <p>
                (2) Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 7 Haftung</h2>
              <p className="mb-4">
                (1) aversis haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung von Leben, Körper und Gesundheit.
              </p>
              <p className="mb-4">
                (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p>
                (3) Eine weitergehende Haftung ist ausgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 8 Kündigung</h2>
              <p className="mb-4">
                (1) Die Kündigungsfristen richten sich nach den Vereinbarungen im jeweiligen Beratungsvertrag.
              </p>
              <p>
                (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">§ 9 Schlussbestimmungen</h2>
              <p className="mb-4">
                (1) Es gilt schweizerisches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mb-4">
                (2) Gerichtsstand ist Interlaken, Schweiz, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p>
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <p className="font-semibold text-aversis-dark mb-2">Kontakt bei Fragen:</p>
              <p>
                aversis GmbH<br/>
                Untere Bönigstrasse 20<br/>
                3800 Interlaken<br/>
                Schweiz<br/>
                Tel: +41 33 823 05 09<br/>
                E-Mail: info@aversis.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}