import {Link} from '@/i18n/routing';
import Image from 'next/image';
import SubscribeForm from '../forms/SubscribeForm';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2537] text-white mt-auto font-sans border-t-2 border-[#8B261D]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[14px]">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/gcpg-footer-white-v2.png"
                alt="GCPG - Genève Centre for Parliamentary Governance Logo"
                width={300}
                height={64}
                className="h-12 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-slate-300 max-w-sm mb-8 leading-relaxed font-light">
              Genève Center for Parliamentary Governance / Centre de Genève pour la Gouvernance Parlementaire.
              An independent, non-profit think tank based in Geneva, Switzerland.
            </p>
            <div className="max-w-sm">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-white bg-[#8B261D] px-2.5 py-1 rounded inline-block mb-3 shadow-sm">Subscribe to News &amp; Briefs</h4>
              <p className="text-[13px] text-slate-300 mb-4 font-light">Stay informed about our latest research, comparative studies, and executive training.</p>
              <SubscribeForm />
            </div>
          </div>
          <div>
            <h3 className="text-[#8B261D] font-extrabold uppercase text-[12px] tracking-wider mb-5 border-b border-white/10 pb-2">Sections</h3>
            <ul className="space-y-2.5 font-medium text-slate-200">
              <li><Link href="/about" className="hover:text-[#F87171] transition-colors">About us</Link></li>
              <li><Link href="/work-areas" className="hover:text-[#F87171] transition-colors">Work areas</Link></li>
              <li><Link href="/publications" className="hover:text-[#F87171] transition-colors">Publications</Link></li>
              <li><Link href="/training" className="hover:text-[#F87171] transition-colors">Training</Link></li>
              <li><Link href="/news" className="hover:text-[#F87171] transition-colors">News</Link></li>
              <li><Link href="/events" className="hover:text-[#F87171] transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-[#F87171] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#8B261D] font-extrabold uppercase text-[12px] tracking-wider mb-5 border-b border-white/10 pb-2">Legal &amp; Information</h3>
            <ul className="space-y-2.5 font-medium text-slate-200">
              <li><Link href="/about" className="hover:text-[#F87171] transition-colors">Statutes &amp; Legal Framework</Link></li>
              <li><Link href="/legal" className="hover:text-[#F87171] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-[#F87171] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-300 text-[13px]">
          <p>&copy; {year} GCPG — Genève Center for Parliamentary Governance. Canton of Geneva, Switzerland.</p>
        </div>
      </div>
    </footer>
  );
}
