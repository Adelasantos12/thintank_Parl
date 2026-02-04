import { getPayloadClient } from '@/lib/payload';
import { notFound } from 'next/navigation';
import RichText from '@/components/RichText';
import TableOfContents from '@/components/publications/TableOfContents';
import Citation from '@/components/publications/Citation';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'publications',
    locale: locale as any,
    where: { slug: { equals: slug } },
  });

  if (result.docs.length === 0) return { title: 'Not Found' };

  const pub = result.docs[0];
  return {
    title: pub.title,
    description: pub.abstract,
    openGraph: {
      title: pub.title,
      description: pub.abstract,
      type: 'article',
    },
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ locale: string, slug: string }>;
}) {
  const { locale, slug } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'publications',
    locale: locale as any,
    where: {
      slug: { equals: slug },
    },
  });

  if (result.docs.length === 0) {
    notFound();
  }

  const pub = result.docs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-[13px] font-heading font-normal text-slate mb-8">
        <Link href="/publications" className="hover:text-navy">Publications</Link>
        <span className="mx-2">/</span>
        <span className="text-navy truncate inline-block max-w-[200px] align-bottom">{pub.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Main Column */}
        <article className="flex-grow max-w-3xl">
          <header className="mb-12">
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-accent mb-4">
              <span>{pub.type?.name}</span>
              <span>•</span>
              <span>{pub.year}</span>
            </div>
            <h1 className="mb-6">
              {pub.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-slate text-[15px] italic">
              {pub.authors?.map((author: any) => author.name).join(', ')}
            </div>
          </header>

          <section className="bg-white p-8 border border-border-custom rounded mb-12 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy mb-4">Abstract</h2>
            <div className="text-slate italic leading-relaxed text-[16px]">
              {pub.abstract}
            </div>
          </section>

          <div className="publication-content">
            <RichText content={pub.content} />
          </div>
        </article>

        {/* Right Rail (Sticky) */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="sticky top-24 space-y-12">
            {/* Download */}
            {pub.pdf && (
              <a
                href={typeof pub.pdf === 'object' ? pub.pdf.url : '#'}
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-bold rounded shadow-sm text-white bg-navy hover:bg-ink focus:outline-none transition-colors"
              >
                Download PDF
              </a>
            )}

            {/* TOC */}
            <TableOfContents content={pub.content} />

            {/* Citation */}
            <Citation publication={pub} />

            {/* Taxonomies */}
            <div className="pt-8 border-t border-border-custom space-y-6">
              {pub.topics?.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-bold uppercase text-slate tracking-widest mb-3">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {pub.topics.map((topic: any) => (
                      <span key={topic.id} className="text-[11px] font-bold bg-white border border-border-custom px-2 py-1 rounded text-slate">
                        {topic.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {pub.regions?.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-bold uppercase text-slate tracking-widest mb-3">Regions</h3>
                  <div className="flex flex-wrap gap-2">
                    {pub.regions.map((region: any) => (
                      <span key={region.id} className="text-[11px] font-bold bg-white border border-border-custom px-2 py-1 rounded text-slate">
                        {region.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
