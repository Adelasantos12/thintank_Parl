import { Link } from '@/i18n/routing';

export default function WorkAreasPage() {
  const workAreas = [
    {
      num: '01',
      title: 'Parliaments and representation',
      description: 'Applied research on how legislative assemblies function, their composition and their link with citizens.'
    },
    {
      num: '02',
      title: 'Legislative good practice',
      description: 'Comparative standards on procedure, executive oversight, parliamentary ethics and open parliaments.'
    },
    {
      num: '03',
      title: 'Capacity-building',
      description: 'Training programmes for parliamentarians, advisers and legislative staff worldwide.'
    },
    {
      num: '04',
      title: 'Applied legislative studies',
      description: 'Analysis of regulatory quality, legislative impact assessment and modernisation of research.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
          WORK AREAS
        </span>
        <h1 className="text-4xl font-heading font-extrabold text-black mb-4">
          Four lines, one purpose
        </h1>
        <p className="subtitle text-lg">
          Each area combines original research, technical cooperation and open dissemination of findings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workAreas.map((area) => (
          <div key={area.num} className="modern-card p-8 bg-white border border-slate-200">
            <span className="text-2xl font-bold font-heading text-slate-400 block mb-3">
              {area.num}
            </span>
            <h2 className="text-2xl font-heading font-bold text-black mb-3">
              {area.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {area.description}
            </p>
            <Link
              href="/publications"
              className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600 inline-flex items-center gap-1"
            >
              Related research &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
