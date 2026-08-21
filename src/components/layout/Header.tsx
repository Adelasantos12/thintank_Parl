import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className="border-b border-border-custom bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-horizontal.png"
                alt="GCPG - Genève Center for Parliamentary Governance"
                width={320}
                height={70}
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              About us
            </Link>
            <Link href="/work-areas" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              Work areas
            </Link>
            <Link href="/publications" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              Publications
            </Link>
            <Link href="/training" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              Training
            </Link>
            <Link href="/news" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              News
            </Link>
            <Link href="/events" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              Events
            </Link>
            <Link href="/contact" className="text-[#0F2537] hover:text-[#8B261D] font-sans font-semibold text-[14px] tracking-tight transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 text-[12px] font-bold text-[#0F2537]">
              <Link href="/" locale="en" className="hover:text-[#8B261D] uppercase px-2 py-1 rounded hover:bg-slate-100 transition-colors">EN</Link>
              <span className="text-slate-300">|</span>
              <Link href="/" locale="fr" className="hover:text-[#8B261D] uppercase px-2 py-1 rounded hover:bg-slate-100 transition-colors">FR</Link>
              <span className="text-slate-300">|</span>
              <Link href="/" locale="es" className="hover:text-[#8B261D] uppercase px-2 py-1 rounded hover:bg-slate-100 transition-colors">ES</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
