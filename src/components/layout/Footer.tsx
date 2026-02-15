import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import SubscribeForm from '../forms/SubscribeForm';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-custom mt-auto font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[14px]">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-10">
              <Image
                src="/images/logo/institutional.png"
                alt="Genève Center for Parliamentary Governance"
                width={400}
                height={120}
                className="h-[120px] w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-slate max-w-sm mb-10 font-normal leading-relaxed text-[15px]">
              The Genève Center for Parliamentary Governance is dedicated to excellence in parliamentary governance worldwide through research, advisory, and global networking.
            </p>
            <div className="max-w-sm">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-navy mb-3">Newsletter</h4>
              <p className="text-[12px] text-slate mb-5 font-normal">Stay informed about our latest research and events.</p>
              <SubscribeForm />
            </div>
          </div>
          <div>
            <h3 className="text-navy font-medium uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="space-y-3 font-normal">
              <li><Link href="/" className="text-slate hover:text-navy transition-colors">{t('home')}</Link></li>
              <li><Link href="/publications" className="text-slate hover:text-navy transition-colors">{t('publications')}</Link></li>
              <li><Link href="/about" className="text-slate hover:text-navy transition-colors">{t('about')}</Link></li>
              <li><Link href="/contact" className="text-slate hover:text-navy transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-navy font-medium uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-3 font-normal">
              <li><Link href="/legal" className="text-slate hover:text-navy transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-slate hover:text-navy transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-border-custom pt-8 flex flex-col md:flex-row justify-between items-center text-slate text-[12px] font-normal">
          <p>&copy; {year} Genève Center for Parliamentary Governance. All rights reserved. Geneva, Switzerland.</p>
        </div>
      </div>
    </footer>
  );
}
