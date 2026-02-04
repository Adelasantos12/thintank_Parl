import { getPayloadClient } from '@/lib/payload';
import PublicationFilters from '@/components/publications/PublicationFilters';
import { Link } from '@/i18n/routing';

export default async function PublicationsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const payload = await getPayloadClient();

  // Fetch taxonomies for filters
  const [types, topics, regions] = await Promise.all([
    payload.find({ collection: 'publication-types', locale: locale as any, limit: 100 }),
    payload.find({ collection: 'topics', locale: locale as any, limit: 100 }),
    payload.find({ collection: 'regions', locale: locale as any, limit: 100 }),
  ]);

  // Static years for now or could be dynamic
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  // Build query
  const query: any = {
    and: [],
  };

  if (resolvedSearchParams.type) {
    query.and.push({ type: { equals: resolvedSearchParams.type } });
  }
  if (resolvedSearchParams.topic) {
    query.and.push({ topics: { contains: resolvedSearchParams.topic } });
  }
  if (resolvedSearchParams.region) {
    query.and.push({ regions: { contains: resolvedSearchParams.region } });
  }
  if (resolvedSearchParams.year) {
    query.and.push({ year: { equals: Number(resolvedSearchParams.year) } });
  }
  if (resolvedSearchParams.q) {
    query.and.push({ title: { like: resolvedSearchParams.q } });
  }

  const publications = await payload.find({
    collection: 'publications',
    locale: locale as any,
    where: query.and.length > 0 ? query : {},
    sort: '-year',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Rail */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <PublicationFilters
            types={types.docs}
            topics={topics.docs}
            regions={regions.docs}
            years={years}
          />
        </aside>

        {/* Results */}
        <main className="flex-grow">
          <h1 className="mb-8 border-b border-border-custom pb-4">
            Publications
          </h1>

          {publications.docs.length === 0 ? (
            <p className="text-slate italic py-12 text-center">No publications found matching your criteria.</p>
          ) : (
            <div className="space-y-12">
              {publications.docs.map((pub: any) => (
                <article key={pub.id} className="group">
                  <div className="flex flex-col md:flex-row gap-6">
                    {pub.featuredImage && (
                      <div className="w-full md:w-48 h-32 bg-background-custom rounded overflow-hidden flex-shrink-0">
                        {/* Image would go here */}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-accent mb-2">
                        <span>{pub.type?.name}</span>
                        <span>•</span>
                        <span>{pub.year}</span>
                      </div>
                      <Link href={`/publications/${pub.slug}`}>
                        <h2 className="mb-3 group-hover:text-accent transition-colors">
                          {pub.title}
                        </h2>
                      </Link>
                      <p className="text-slate text-[15px] leading-relaxed line-clamp-3 mb-4">
                        {pub.abstract}
                      </p>
                      <div className="flex items-center space-x-4">
                         <Link href={`/publications/${pub.slug}`} className="text-sm font-bold text-navy hover:underline">
                            Read more
                         </Link>
                         {pub.pdf && (
                           <a href={typeof pub.pdf === 'object' ? pub.pdf.url : '#'} className="text-sm font-bold text-navy hover:underline flex items-center">
                             PDF
                           </a>
                         )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
