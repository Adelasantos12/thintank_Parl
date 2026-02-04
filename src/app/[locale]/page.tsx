import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('Index');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="max-w-3xl">
        <h1 className="mb-8">
          {t('title')}
        </h1>
        <p className="subtitle mb-12 max-w-2xl">
          {t('description')} The GIPG is a leading institution dedicated to strengthening parliamentary
          institutions through research, capacity building, and expert governance consulting.
          Based in Geneva, we serve as a global hub for parliamentary excellence.
        </p>
        <div className="flex space-x-6">
          <Link
            href="/publications"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded shadow-sm text-white bg-navy hover:bg-ink focus:outline-none transition-colors"
          >
            {t('explore')}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-border-custom text-sm font-bold rounded text-navy bg-white hover:bg-background-custom focus:outline-none transition-colors"
          >
            {t('learn')}
          </Link>
        </div>
      </section>

      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-custom pt-16">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.05em] text-accent mb-4">{t('researchTitle')}</h2>
          <p className="text-slate text-[15px] leading-relaxed">
            {t('researchText')}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.05em] text-accent mb-4">{t('advisoryTitle')}</h2>
          <p className="text-slate text-[15px] leading-relaxed">
            {t('advisoryText')}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.05em] text-accent mb-4">{t('networkTitle')}</h2>
          <p className="text-slate text-[15px] leading-relaxed">
            {t('networkText')}
          </p>
        </div>
      </section>
    </div>
  );
}
