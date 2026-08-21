import { Link } from '@/i18n/routing';

export default function TrainingPage() {
  const courses = [
    {
      title: 'Senior parliamentary leadership programme',
      description: 'For secretaries-general and directors of legislative services.',
      details: 'GENEVA • 5 DAYS • IN PERSON'
    },
    {
      title: 'Legislative drafting course',
      description: 'Normative technique, legal clarity and impact assessment.',
      details: 'ONLINE & IN PERSON'
    },
    {
      title: 'Geneva summer school',
      description: 'Two weeks immersed in comparative parliamentary governance.',
      details: 'JULY 2026 • SCHOLARSHIPS AVAILABLE'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-200 pb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            TRAINING
          </span>
          <h1 className="text-4xl font-heading font-extrabold text-black mb-4">
            Capacity-building for those who make the law
          </h1>
          <p className="subtitle text-lg max-w-2xl">
            Programmes designed with partner parliaments and universities, in person in Geneva and online.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-800 transition-colors"
        >
          Request information &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="tag-badge mb-4 block w-fit">{course.details}</span>
              <h2 className="text-xl font-heading font-bold text-black mb-3">
                {course.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {course.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600 inline-flex items-center gap-1"
            >
              Inquire &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
