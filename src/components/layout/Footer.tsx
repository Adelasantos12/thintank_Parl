import {Link} from '@/i18n/routing';
import Image from 'next/image';
import SubscribeForm from '../forms/SubscribeForm';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-auto font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[14px]">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo-horizontal.png"
                alt="GCPG Logo"
                width={220}
                height={45}
                className="brightness-0 invert h-9 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 max-w-sm mb-8 leading-relaxed font-light">
              Geneva Center for Parliamentary Governance / Centre de Genève pour la Gouvernance Parlementaire.
              An independent, non-profit think tank based in Geneva, Switzerland.
            </p>
            <div className="max-w-sm">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-300 mb-2">Subscribe to News &amp; Briefs</h4>
              <p className="text-[13px] text-slate-400 mb-4 font-light">Stay informed about our latest research, comparative studies, and executive training.</p>
              <SubscribeForm />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold uppercase text-[12px] tracking-wider mb-5">Sections</h3>
            <ul className="space-y-2.5 font-normal text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="/work-areas" className="hover:text-white transition-colors">Work areas</Link></li>
              <li><Link href="/publications" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold uppercase text-[12px] tracking-wider mb-5">Legal &amp; Information</h3>
            <ul className="space-y-2.5 font-normal text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">Statutes &amp; Legal Framework</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[13px]">
          <p>&copy; {year} GCPG — Geneva Center for Parliamentary Governance. Canton of Geneva, Switzerland.</p>
        </div>
      </div>
    </footer>
  );
}
