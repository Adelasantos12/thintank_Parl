import { Link } from '@/i18n/routing';

export default function EventsPage() {
  const events = [
    {
      date: '9 April 2026',
      location: 'GENEVA & ONLINE',
      title: 'Geneva seminar: artificial intelligence and legislative work',
      description: 'Examining conclusions and comparative findings on AI tools in the service of legislative drafting and parliamentary oversight.'
    },
    {
      date: 'JULY 2026',
      location: 'GENEVA',
      title: 'Geneva Summer School on Comparative Parliamentary Governance',
      description: 'Two weeks of intensive seminars and workshops with leading scholars and international parliamentary experts.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
          EVENTS &amp; SEMINARS
        </span>
        <h1 className="text-4xl font-heading font-extrabold text-black mb-4">
          Conferences &amp; Academic Seminars
        </h1>
        <p className="subtitle text-lg">
          Connecting researchers, parliamentarians, and practitioners in Geneva and online.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">
        {events.map((evt, idx) => (
          <div key={idx} className="modern-card p-8 bg-white border border-slate-200">
            <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-slate-500 mb-2">
              <span className="text-black uppercase">{evt.date}</span>
              <span>•</span>
              <span>{evt.location}</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-black mb-3">
              {evt.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {evt.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-800 transition-colors"
            >
              Register / Inquire &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
