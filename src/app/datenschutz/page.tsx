import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-aversis-dark mb-12">Datenschutzerklärung & Cookie-Richtlinie</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br/>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              
              <p className="mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Externes Hosting</h3>
              <p className="mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              
              <p className="mb-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/><br/>
                aversis GmbH<br/>
                Stephan Zwahlen<br/>
                Untere Bönigstrasse 20<br/>
                3800 Interlaken<br/>
                Schweiz<br/><br/>
                Telefon: +41 33 823 05 09<br/>
                E-Mail: info@aversis.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Cookies</h3>
              <p className="mb-4">
                Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
              </p>
              
              <p className="mb-4">
                Wir verwenden auf unserer Website folgende Arten von Cookies:<br/><br/>
                <strong>Notwendige Cookies:</strong> Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.<br/><br/>
                <strong>Analyse-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden.<br/><br/>
                <strong>Marketing-Cookies:</strong> Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen bereitzustellen.
              </p>
              
              <p className="mb-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
              </p>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Anfrage per E-Mail oder Telefon</h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">5. Analyse-Tools und Werbung</h2>
              
              <h3 className="text-lg font-semibold text-aversis-dark mb-2">Google reCAPTCHA</h3>
              <p className="mb-4">
                Wir nutzen &ldquo;Google reCAPTCHA&rdquo; (im Folgenden &ldquo;reCAPTCHA&rdquo;) auf dieser Website. Anbieter ist die Google Ireland Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              
              <p className="mb-4">
                Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z.B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">6. Ihre Rechte</h2>
              
              <p className="mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
              
              <p className="mb-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-aversis-dark mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}