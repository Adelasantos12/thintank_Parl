import { Link } from '@/i18n/routing';

export default function NewsPage() {
  const newsItems = [
    {
      date: '12 May 2026',
      category: 'ANALYSIS',
      title: 'Citizen-centred budgets: lessons from three parliaments',
      description: 'How finance committees bring in public consultation without losing technical rigour.'
    },
    {
      date: '28 April 2026',
      category: 'NEWS',
      title: 'GCPG signs a cooperation agreement with the Inter-Parliamentary Union',
      description: 'The accord will drive joint training and comparative studies over three years.'
    },
    {
      date: '9 April 2026',
      category: 'BRIEF',
      title: 'Geneva seminar: artificial intelligence and legislative work',
      description: 'Conclusions from the meeting on AI tools in the service of legislative drafting.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
          NEWS &amp; ANALYSIS
        </span>
        <h1 className="text-4xl font-heading font-extrabold text-black mb-4">
          From the Centre
        </h1>
        <p className="subtitle text-lg">
          Latest updates, policy briefs, analysis and institutional announcements from GCPG in Geneva.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">
        {newsItems.map((item, idx) => (
          <div key={idx} className="modern-card p-8 bg-white border border-slate-200">
            <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-slate-500 mb-2">
              <span>{item.date}</span>
              <span>•</span>
              <span className="text-black uppercase">{item.category}</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-black mb-3">
              {item.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {item.description}
            </p>
            <Link
              href="/news"
              className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600 inline-flex items-center gap-1"
            >
              Read full article &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
