import ContactForm from '@/components/forms/ContactForm';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-8">{t('title')}</h1>
        <p className="text-lg text-slate mb-12">
          {t('description')}
        </p>

        <div className="bg-white p-8 border border-border-custom rounded-none">
          <ContactForm />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
          <div>
            <h3 className="font-bold text-navy uppercase tracking-widest mb-4 text-xs">{t('office')}</h3>
            <p className="text-slate whitespace-pre-line">
              Genève Center for Parliamentary Governance<br />
              {t('address')}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-navy uppercase tracking-widest mb-4 text-xs">Email</h3>
            <p className="text-slate">
              info@gipg.ch<br />
              publications@gipg.ch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
