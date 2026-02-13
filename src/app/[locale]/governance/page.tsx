import { getPayloadClient } from '@/lib/payload';
import RichText from '@/components/RichText';

export default async function GovernancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'pages',
    locale: locale as any,
    where: {
      slug: { equals: 'governance' }
    }
  });

  const page = result.docs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-navy mb-12 border-b border-border-custom pb-6">
          {page?.title || 'Governance'}
        </h1>
        {page ? (
          <RichText content={page.content} />
        ) : (
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate leading-relaxed">
              The Genève Center for Parliamentary Governance is governed by an International Board of Trustees and an Executive Committee
              based in Geneva.
            </p>
            <h2 className="text-2xl font-bold text-navy mt-12 mb-6">Our Structure</h2>
            <p className="text-slate leading-relaxed">
              Our governance model ensures independence, academic rigor, and practical relevance.
              The Board of Trustees includes former parliamentarians, distinguished scholars,
              and governance experts from diverse regions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
