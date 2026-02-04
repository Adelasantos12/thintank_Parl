import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import SubscribeForm from '../forms/SubscribeForm';

export default function Footer() {
  const t = useTranslations('Nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-custom mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-navy font-bold text-lg mb-4">GIPG</h2>
            <p className="text-slate max-w-xs mb-6">
              Geneva Institute for Parliamentary Governance.
              Dedicated to excellence in parliamentary governance worldwide.
            </p>
            <div className="max-w-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-2">Newsletter</h4>
              <p className="text-xs text-slate mb-4">Stay informed about our latest research and events.</p>
              <SubscribeForm />
            </div>
          </div>
          <div>
            <h3 className="text-navy font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate hover:text-navy">{t('home')}</Link></li>
              <li><Link href="/publications" className="text-slate hover:text-navy">{t('publications')}</Link></li>
              <li><Link href="/about" className="text-slate hover:text-navy">{t('about')}</Link></li>
              <li><Link href="/contact" className="text-slate hover:text-navy">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-navy font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal" className="text-slate hover:text-navy">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-slate hover:text-navy">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border-custom pt-8 flex flex-col md:flex-row justify-between items-center text-slate">
          <p>&copy; {year} GIPG. All rights reserved. Geneva, Switzerland.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social links placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
}
