import { getPayloadClient } from '@/lib/payload';
import RichText from '@/components/RichText';

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'pages',
    locale: locale as any,
    where: {
      slug: { equals: 'legal' }
    }
  });

  const page = result.docs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-navy mb-12 border-b border-border-custom pb-6">
          {page?.title || 'Legal Information'}
        </h1>
        {page ? (
          <RichText content={page.content} />
        ) : (
          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold text-navy mt-8 mb-4">Privacy Policy</h2>
            <p className="text-slate leading-relaxed">
              We respect your privacy and are committed to protecting your personal data in accordance
              with Swiss data protection laws.
            </p>
            <h2 className="text-xl font-bold text-navy mt-12 mb-4">Terms of Service</h2>
            <p className="text-slate leading-relaxed">
              All publications and research content are the property of the Genève Center unless otherwise stated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
