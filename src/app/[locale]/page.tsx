import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('Index');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <section className="max-w-4xl">
        <h1 className="mb-10 lg:text-[64px] transition-all">
          {t('title')}
        </h1>
        <p className="subtitle mb-14 max-w-2xl text-lg md:text-xl">
          {t('description')}
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/publications"
            className="inline-flex items-center px-8 py-4 border border-transparent text-sm font-sans font-bold rounded-none text-white bg-navy hover:bg-ink focus:outline-none transition-colors"
          >
            {t('explore')}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 border border-border-custom text-sm font-sans font-bold rounded-none text-navy bg-white hover:bg-background-custom focus:outline-none transition-colors"
          >
            {t('learn')}
          </Link>
        </div>
      </section>

      <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-border-custom pt-20">
        <div>
          <h2 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-accent mb-6">{t('researchTitle')}</h2>
          <p className="text-slate text-[16px] leading-relaxed font-normal">
            {t('researchText')}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-accent mb-6">{t('advisoryTitle')}</h2>
          <p className="text-slate text-[16px] leading-relaxed font-normal">
            {t('advisoryText')}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-accent mb-6">{t('networkTitle')}</h2>
          <p className="text-slate text-[16px] leading-relaxed font-normal">
            {t('networkText')}
          </p>
        </div>
      </section>
    </div>
  );
}
