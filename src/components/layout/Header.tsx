import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className="border-b border-border-custom bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/" className="font-heading font-extrabold text-xl tracking-tight text-navy flex items-center gap-2">
              <span className="border-b-2 border-accent pb-0.5">GCPG</span>
            </Link>
            <span className="hidden lg:inline-block text-xs text-slate border-l border-border-custom pl-3 font-serif italic">
              Geneva Center for Parliamentary Governance
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-slate hover:text-navy px-2 py-2 font-heading font-normal text-[14px] tracking-[0.02em]">
              {t('home')}
            </Link>
            <Link href="/about" className="text-slate hover:text-navy px-2 py-2 font-heading font-normal text-[14px] tracking-[0.02em]">
              {t('about')}
            </Link>
            <Link href="/objectives" className="text-slate hover:text-navy px-2 py-2 font-heading font-normal text-[14px] tracking-[0.02em]">
              {t('objectives')}
            </Link>
            <Link href="/governance" className="text-slate hover:text-navy px-2 py-2 font-heading font-normal text-[14px] tracking-[0.02em]">
              {t('governance')}
            </Link>
            <Link href="/publications" className="text-slate hover:text-navy px-2 py-2 font-heading font-normal text-[14px] tracking-[0.02em]">
              {t('publications')}
            </Link>
            <Link href="/contact" className="text-slate hover:text-navy px-2 py-2 font-heading font-normal text-[14px] tracking-[0.02em]">
              {t('contact')}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 text-[11px] font-bold text-slate">
              <Link href="/" locale="en" className="hover:text-navy uppercase px-1 py-0.5 rounded hover:bg-background-custom">EN</Link>
              <Link href="/" locale="fr" className="hover:text-navy uppercase px-1 py-0.5 rounded hover:bg-background-custom">FR</Link>
              <Link href="/" locale="es" className="hover:text-navy uppercase px-1 py-0.5 rounded hover:bg-background-custom">ES</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
