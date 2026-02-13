import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className="border-b border-border-custom bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* Desktop Logo */}
              <div className="hidden md:block">
                <Image
                  src="/images/logo/horizontal.png"
                  alt="Genève Center for Parliamentary Governance"
                  width={200}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>
              {/* Mobile Logo */}
              <div className="md:hidden">
                <Image
                  src="/images/logo/monogram.png"
                  alt="Genève Center for Parliamentary Governance"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate hover:text-navy px-3 py-2 font-sans font-medium text-[14px] tracking-[0.02em]">
              {t('home')}
            </Link>
            <Link href="/publications" className="text-slate hover:text-navy px-3 py-2 font-sans font-medium text-[14px] tracking-[0.02em]">
              {t('publications')}
            </Link>
            <Link href="/about" className="text-slate hover:text-navy px-3 py-2 font-sans font-medium text-[14px] tracking-[0.02em]">
              {t('about')}
            </Link>
            <Link href="/governance" className="text-slate hover:text-navy px-3 py-2 font-sans font-medium text-[14px] tracking-[0.02em]">
              {t('governance')}
            </Link>
            <Link href="/contact" className="text-slate hover:text-navy px-3 py-2 font-sans font-medium text-[14px] tracking-[0.02em]">
              {t('contact')}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 text-[11px] font-bold text-slate">
              <Link href="/" locale="en" className="hover:text-navy uppercase font-sans">EN</Link>
              <Link href="/" locale="fr" className="hover:text-navy uppercase font-sans">FR</Link>
              <Link href="/" locale="es" className="hover:text-navy uppercase font-sans">ES</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
