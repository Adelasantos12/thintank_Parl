import { getPayloadClient } from '@/lib/payload';
import RichText from '@/components/RichText';

export default async function StaticPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'pages',
    locale: locale as any,
    where: {
      slug: { equals: 'about' }
    }
  });

  const page = result.docs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-navy mb-12 border-b border-border-custom pb-6">
          {page?.title || 'About GIPG'}
        </h1>
        {page ? (
          <RichText content={page.content} />
        ) : (
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate leading-relaxed">
              The Geneva Institute for Parliamentary Governance (GIPG) is an independent non-profit
              organization dedicated to the study and promotion of effective parliamentary governance.
            </p>
            <p className="text-slate leading-relaxed mt-6">
              Founded in the heart of international Geneva, we bridge the gap between academic
              research and parliamentary practice, providing world-class insights and capacity
              building to democratic institutions globally.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
