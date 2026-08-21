import { getPayloadClient } from '@/lib/payload';
import RichText from '@/components/RichText';

export default async function GovernancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const payload = await getPayloadClient();

  let page = null;
  if (payload) {
    try {
      const result = await payload.find({
        collection: 'pages',
        locale: locale as unknown as 'en' | 'fr' | 'es',
        where: {
          slug: { equals: 'governance' }
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
            Institutional Organization
          </span>
          <h1 className="text-4xl font-heading font-extrabold text-navy mb-4">
            {page?.title || 'Governance & Leadership'}
          </h1>
          <p className="subtitle max-w-2xl mx-auto">
            Independence, non-partisanship, and scientific integrity in parliamentary governance.
          </p>
        </div>

        {page ? (
          <RichText content={page.content} />
        ) : (
          <div className="space-y-10">
            <section className="sketch-box p-8">
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                Non-Profit Governance Principles
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                In accordance with <strong>Art. 1 &amp; Art. 4 of the GCPG Statutes</strong>, the Association operates on an independent, non-partisan, and non-profit basis.
              </p>
              <div className="pen-quote my-6 p-4">
                &quot;No income, surplus, or economic benefit resulting from the Association&apos;s activities may be distributed to Members, founders, or Committee members, except reimbursement of justified expenses or reasonable remuneration for actual services aligned with the Association&apos;s purpose.&quot; (Art. 4.5)
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border-custom p-6 bg-white rounded-md">
                <h3 className="text-xl font-bold text-navy mb-3">Seat &amp; Administration</h3>
                <p className="text-slate text-sm leading-relaxed mb-3">
                  The seat of the Association is located in the Canton of Geneva, Switzerland (Art. 2).
                </p>
                <p className="text-slate text-sm leading-relaxed">
                  The Committee manages administrative affairs, international partnerships, technical cooperation agreements, and statutory oversight.
                </p>
              </div>

              <div className="border border-border-custom p-6 bg-white rounded-md">
                <h3 className="text-xl font-bold text-navy mb-3">Scientific &amp; Non-Partisan Integrity</h3>
                <p className="text-slate text-sm leading-relaxed mb-3">
                  All collaborations with public authorities, academic institutions, parliaments, private entities, or civil society must maintain strict independence and scientific rigor (Art. 4.6).
                </p>
                <p className="text-slate text-sm leading-relaxed">
                  Research products and training modules adhere to evidence-based comparative methodologies.
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
