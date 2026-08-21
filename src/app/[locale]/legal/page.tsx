import { legalTranslations } from '@/data/legalContent';

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = legalTranslations[locale] ? locale : 'en';
  const doc = legalTranslations[currentLocale];

  return (
    <div className="bg-slate-50/50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2537]/5 border border-[#0F2537]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8B261D]" />
            <span className="text-xs font-bold text-[#0F2537] tracking-wider uppercase">
              {currentLocale === 'es' ? 'Información Institucional y Legal' : currentLocale === 'fr' ? 'Informations Institutionnelles et Légales' : 'Institutional & Legal Information'}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F2537] tracking-tight mb-4">
            {currentLocale === 'es' ? 'Estatutos, Privacidad y Términos' : currentLocale === 'fr' ? 'Statuts, Confidentialité et Conditions' : 'Statutes, Privacy & Terms'}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            {currentLocale === 'es'
              ? 'Marco jurídico, principios institucionales de gobernanza, política de protección de datos y términos de uso del Genève Center for Parliamentary Governance.'
              : currentLocale === 'fr'
              ? 'Cadre juridique, principes de gouvernance institutionnelle, politique de protection des données et conditions d’utilisation du Genève Center for Parliamentary Governance.'
              : 'Legal framework, institutional governance principles, privacy protection policy, and terms of use of the Genève Center for Parliamentary Governance.'}
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-16">
          {/* Section 1: Statutes */}
          <section id="statutes" className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
            <div className="border-b border-slate-100 pb-6 mb-8 flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2537]">
                {doc.statutes.title}
              </h2>
              <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-md">
                Canton of Geneva, Switzerland
              </span>
            </div>
            <div className="space-y-8">
              {doc.statutes.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-[#0F2537] tracking-tight">
                    {sec.heading}
                  </h3>
                  <div className="text-slate-600 leading-relaxed space-y-3 font-normal whitespace-pre-line text-[15px]">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Privacy Policy */}
          <section id="privacy" className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
            <div className="border-b border-slate-100 pb-6 mb-8 flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2537]">
                {doc.privacy.title}
              </h2>
              <span className="text-xs font-semibold px-3 py-1 bg-[#8B261D]/10 text-[#8B261D] rounded-md">
                Effective: {doc.privacy.effectiveDate}
              </span>
            </div>
            <div className="space-y-8">
              {doc.privacy.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-[#0F2537] tracking-tight">
                    {sec.heading}
                  </h3>
                  <div className="text-slate-600 leading-relaxed space-y-3 font-normal whitespace-pre-line text-[15px]">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Terms of Use */}
          <section id="terms" className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
            <div className="border-b border-slate-100 pb-6 mb-8 flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2537]">
                {doc.terms.title}
              </h2>
              <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-md">
                Effective: {doc.terms.effectiveDate}
              </span>
            </div>
            <div className="space-y-8">
              {doc.terms.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-[#0F2537] tracking-tight">
                    {sec.heading}
                  </h3>
                  <div className="text-slate-600 leading-relaxed space-y-3 font-normal whitespace-pre-line text-[15px]">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
