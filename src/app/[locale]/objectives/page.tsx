import { getPayloadClient } from '@/lib/payload';
import RichText from '@/components/RichText';

export default async function ObjectivesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const payload = await getPayloadClient();

  let page = null;
  if (payload) {
    try {
      const result = await payload.find({
        collection: 'pages',
        locale: locale as unknown as 'en' | 'fr' | 'es',
        where: {
          slug: { equals: 'objectives' }
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
            Statutes Arts. 3 &amp; 4
          </span>
          <h1 className="text-4xl font-heading font-extrabold text-navy mb-4">
            {page?.title || 'Statutory Objectives & Means'}
          </h1>
          <p className="subtitle max-w-2xl mx-auto">
            Promoting independent, non-partisan, and evidence-based analysis of parliamentary and legislative processes from Geneva.
          </p>
        </div>

        {page ? (
          <RichText content={page.content} />
        ) : (
          <div className="space-y-12">
            {/* Article 3: Statutory Purpose */}
            <section className="sketch-box p-8">
              <span className="text-xs font-bold uppercase text-accent tracking-wider block mb-2">Article 3</span>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                Statutory Purpose (But)
              </h2>
              <p className="text-slate leading-relaxed mb-6">
                The primary purpose of the GCPG is to promote independent, non-partisan, and evidence-based analysis of parliamentary, legislative, and institutional processes, as well as to develop training, capacity building, and institutional learning activities.
              </p>

              <div className="space-y-4">
                <div className="border-l-2 border-navy pl-4 py-1">
                  <h3 className="text-base font-bold text-navy">Target Audiences (Art. 3.2)</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Parliamentarians, parliamentary staff, legislative institutions, public authorities, local &amp; subnational entities, civil society organizations, researchers, students, and governance stakeholders.
                  </p>
                </div>

                <div className="border-l-2 border-navy pl-4 py-1">
                  <h3 className="text-base font-bold text-navy">Dialogue Platform (Art. 3.3)</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Serving as a global platform for exchange and cooperation between legislators, experts, academia, public institutions, private sector, and international actors.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-custom">
                <h3 className="text-lg font-bold text-navy mb-4">Core Areas of Research &amp; Application (Art. 3.4)</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Legislative &amp; parliamentary processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Adaptation &amp; transformation of representative bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Democratic, institutional &amp; regulatory resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Governance of technological innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Anticipatory legislation &amp; regulation under uncertainty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Multi-level &amp; global governance</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Article 4: Means & Resources */}
            <section className="sketch-box p-8">
              <span className="text-xs font-bold uppercase text-accent tracking-wider block mb-2">Article 4</span>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                Operational Means (Moyens)
              </h2>
              <p className="text-slate leading-relaxed mb-6">
                To achieve its statutory goals, GCPG carries out research, capacity building, technical assistance, policy notes, diagnostic studies, conferences, and institutional partnerships (Art. 4.1–4.4).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-background-custom p-4 rounded border border-border-custom">
                  <h4 className="font-bold text-navy mb-1">Applied Research Projects</h4>
                  <p className="text-slate">Comparative and prospective research programs addressing contemporary legislative challenges.</p>
                </div>
                <div className="bg-background-custom p-4 rounded border border-border-custom">
                  <h4 className="font-bold text-navy mb-1">Executive Education</h4>
                  <p className="text-slate">Tailored capacity-building programs and knowledge transfer workshops for institutions.</p>
                </div>
                <div className="bg-background-custom p-4 rounded border border-border-custom">
                  <h4 className="font-bold text-navy mb-1">Publications &amp; Policy Papers</h4>
                  <p className="text-slate">Diagnostic studies, policy notes, comparative analyses, and evidence-based reports.</p>
                </div>
                <div className="bg-background-custom p-4 rounded border border-border-custom">
                  <h4 className="font-bold text-navy mb-1">Institutional Partnerships</h4>
                  <p className="text-slate">Cooperation agreements with parliaments, universities, international organizations, and think tanks.</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
