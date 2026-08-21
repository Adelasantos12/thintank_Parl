import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import SubscribeForm from '../forms/SubscribeForm';

export default function Footer() {
  const t = useTranslations('Nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-custom mt-auto font-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[14px]">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-navy font-extrabold text-lg mb-2">GCPG</h2>
            <p className="text-slate max-w-sm mb-6 font-light leading-relaxed">
              Geneva Center for Parliamentary Governance / Centre de Genève pour la Gouvernance Parlementaire.
              An independent, non-profit association governed by Art. 60 et seq. of the Swiss Civil Code, based in Geneva, Switzerland.
            </p>
            <div className="max-w-sm">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-navy mb-2">Newsletter</h4>
              <p className="text-[12px] text-slate mb-4 font-light">Stay informed about our latest research, training, and events.</p>
              <SubscribeForm />
            </div>
          </div>
          <div>
            <h3 className="text-navy font-normal uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 font-light">
              <li><Link href="/" className="text-slate hover:text-navy transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="text-slate hover:text-navy transition-colors">{t('about')}</Link></li>
              <li><Link href="/objectives" className="text-slate hover:text-navy transition-colors">{t('objectives')}</Link></li>
              <li><Link href="/governance" className="text-slate hover:text-navy transition-colors">{t('governance')}</Link></li>
              <li><Link href="/publications" className="text-slate hover:text-navy transition-colors">{t('publications')}</Link></li>
              <li><Link href="/contact" className="text-slate hover:text-navy transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-navy font-normal uppercase tracking-wider mb-4">Legal & Information</h3>
            <ul className="space-y-2 font-light">
              <li><Link href="/about" className="text-slate hover:text-navy transition-colors">Statutes & Legal Framework</Link></li>
              <li><Link href="/legal" className="text-slate hover:text-navy transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-slate hover:text-navy transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border-custom pt-8 flex flex-col md:flex-row justify-between items-center text-slate text-[12px] font-light">
          <p>&copy; {year} GCPG — Geneva Center for Parliamentary Governance. Canton of Geneva, Switzerland.</p>
        </div>
      </div>
    </footer>
  );
}
