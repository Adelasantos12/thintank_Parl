import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('Index');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="max-w-3xl">
        <h1 className="text-5xl font-serif font-bold text-navy leading-tight mb-8">
          {t('title')}
        </h1>
        <p className="text-xl text-slate leading-relaxed mb-12">
          {t('description')} The GIPG is a leading institution dedicated to strengthening parliamentary
          institutions through research, capacity building, and expert governance consulting.
          Based in Geneva, we serve as a global hub for parliamentary excellence.
        </p>
        <div className="flex space-x-6">
          <Link
            href="/publications"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-navy hover:bg-ink focus:outline-none"
          >
            {t('explore')}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-border-custom text-base font-medium rounded-md text-navy bg-white hover:bg-background-custom focus:outline-none"
          >
            {t('learn')}
          </Link>
        </div>
      </section>

      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-custom pt-16">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">{t('researchTitle')}</h2>
          <p className="text-slate">
            {t('researchText')}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">{t('advisoryTitle')}</h2>
          <p className="text-slate">
            {t('advisoryText')}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">{t('networkTitle')}</h2>
          <p className="text-slate">
            {t('networkText')}
          </p>
        </div>
      </section>
    </div>
  );
}
