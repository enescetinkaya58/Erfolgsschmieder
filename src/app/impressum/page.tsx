import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-brand-dark mb-10">
            Impressum
          </h1>

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                CTN Immobilien und Versicherung GmbH
                <br />
                Frohnauer Str. 3
                <br />
                13467 Berlin, Deutschland
              </p>
              <p>
                <strong>Vertreten durch:</strong>
                <br />
                Enes Cetinkaya (Geschäftsführer)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">
                Kontakt
              </h2>
              <p>
                Telefon: 030 1210 8372
                <br />
                E-Mail: info@erfolgsschmieder.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">
                Handelsregister
              </h2>
              <p>
                Registergericht: Amtsgericht Charlottenburg, Berlin
                <br />
                Registernummer: HRB 235172 B
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                DE348809822
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Enes Cetinkaya
                <br />
                Frohnauer Str. 3
                <br />
                13467 Berlin, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">
                Haftungsausschluss
              </h2>
              <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen.
              </p>

              <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
