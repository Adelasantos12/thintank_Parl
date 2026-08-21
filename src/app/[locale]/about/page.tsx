import { getPayloadClient } from '@/lib/payload';
import RichText from '@/components/RichText';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const payload = await getPayloadClient();

  let page = null;
  if (payload) {
    try {
      const result = await payload.find({
        collection: 'pages',
        locale: locale as unknown as 'en' | 'fr' | 'es',
        where: {
          slug: { equals: 'about' }
        }
      });
      page = result.docs[0];
    } catch {
      page = null;
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center border-b border-border-custom pb-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent block mb-2">
            Swiss Civil Code (Art. 60 et seq.)
          </span>
          <h1 className="text-4xl font-heading font-extrabold text-navy mb-4">
            {page?.title || 'About GCPG'}
          </h1>
          <p className="subtitle max-w-2xl mx-auto">
            Geneva Center for Parliamentary Governance / Centre de Genève pour la Gouvernance Parlementaire
          </p>
        </div>

        {page ? (
          <RichText content={page.content} />
        ) : (
          <div className="space-y-12">
            <section className="sketch-box p-8">
              <h2 className="text-2xl font-heading font-bold text-navy mb-4 border-b border-border-custom pb-2">
                Legal Status &amp; Identity
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                The <strong>Geneva Center for Parliamentary Governance (GCPG)</strong> is an independent, non-partisan, non-profit association of private law constituted in accordance with Articles 60 and following of the Swiss Civil Code.
              </p>
              <p className="text-slate leading-relaxed">
                Headquartered in the Canton of Geneva, Switzerland, GCPG leverages Geneva&apos;s position as a global center of international governance, diplomacy, and normative expertise to link research, training, institutional learning, and public dialogue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6 text-center">
                Preamble &amp; Guiding Principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="sketch-box p-6">
                  <span className="text-accent font-bold text-sm block mb-1">Principle 1</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Foundational Institutions</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Legislative and parliamentary institutions are fundamental infrastructures of representative democracy, the rule of law, human rights protection, and public governance.
                  </p>
                </div>

                <div className="sketch-box p-6">
                  <span className="text-accent font-bold text-sm block mb-1">Principle 2</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Normative Translation</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Parliaments translate international commitments into national, regional, and subnational normative frameworks, public policies, and oversight mechanisms.
                  </p>
                </div>

                <div className="sketch-box p-6">
                  <span className="text-accent font-bold text-sm block mb-1">Principle 3</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Public Goods &amp; Accountability</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Representative institutions contribute to good governance, public goods production, and accountability through legislation, oversight, deliberation, and budget allocation.
                  </p>
                </div>

                <div className="sketch-box p-6">
                  <span className="text-accent font-bold text-sm block mb-1">Principle 4</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Institutional Adaptation</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Parliaments face major transformations driven by technological evolution, policy complexity, global crises, and modern normative production modes.
                  </p>
                </div>

                <div className="sketch-box p-6">
                  <span className="text-accent font-bold text-sm block mb-1">Principle 5</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Evidence-Based Capacity</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Strengthening parliamentary capacities requires comparative, interdisciplinary, and evidence-based approaches grounded in rigorous empirical data.
                  </p>
                </div>

                <div className="sketch-box p-6">
                  <span className="text-accent font-bold text-sm block mb-1">Principle 6</span>
                  <h3 className="text-lg font-bold text-navy mb-2">Geneva Ecosystem</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Geneva offers a unique environment linking research, executive education, institutional learning, and multi-stakeholder dialogue.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
