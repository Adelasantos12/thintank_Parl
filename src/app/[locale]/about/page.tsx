import Image from 'next/image';

export default async function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-3">
          A Geneva centre for the study of legislatures
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-black mb-6">
          About GCPG
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          The <strong>Genève Center for Parliamentary Governance (GCPG)</strong> is an independent think tank devoted to the comparative study of parliaments, legislative procedure and the quality of law-making.
        </p>
      </div>

      {/* Grid for Vision, Mission, About Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="modern-card p-8 bg-slate-50 border border-slate-200">
          <h2 className="text-xl font-heading font-bold text-black mb-4">Our Vision</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Strengthening parliamentary governance worldwide through independent research, comparative analysis, and capacity-building for legislatures committed to transparency, accountability, and democratic representation.
          </p>
        </div>

        <div className="modern-card p-8 bg-slate-50 border border-slate-200">
          <h2 className="text-xl font-heading font-bold text-black mb-4">Our Mission</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From Geneva we work with assemblies, universities, and international organisations to produce rigorous research, practical guidance, and executive training that strengthen legislative institutions.
          </p>
        </div>

        <div className="modern-card p-8 bg-slate-50 border border-slate-200">
          <h2 className="text-xl font-heading font-bold text-black mb-4">Geneva Hub</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Leveraging Geneva&apos;s position as a global center of diplomacy and normative expertise, GCPG links international standards with parliamentary practice across diverse legal traditions.
          </p>
        </div>
      </div>

      {/* Legal & Statutes Section */}
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-8 sm:p-12 mb-16 shadow-sm">
        <div className="border-b border-slate-100 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Swiss Civil Code (Art. 60 et seq.)
          </span>
          <h2 className="text-2xl font-heading font-bold text-black">
            Legal Status &amp; Governance Framework
          </h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-6">
          GCPG is constituted as an independent, non-partisan, non-profit association of private law under Articles 60 and following of the Swiss Civil Code, headquartered in Geneva, Switzerland.
        </p>

        <h3 className="text-lg font-bold text-black mb-4 mt-8">Foundational Principles &amp; Statutes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-100">
            <span className="font-bold text-sm text-black block mb-1">1. Representative Institutions</span>
            <p className="text-xs text-slate-600">Legislative assemblies are fundamental infrastructures of democratic representation and public governance.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-100">
            <span className="font-bold text-sm text-black block mb-1">2. Normative Quality</span>
            <p className="text-xs text-slate-600">Improving legislative technique, regulatory impact assessment, and normative drafting clarity.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-100">
            <span className="font-bold text-sm text-black block mb-1">3. Executive Oversight</span>
            <p className="text-xs text-slate-600">Promoting executive accountability, budgetary scrutiny, and financial committee effectiveness.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-100">
            <span className="font-bold text-sm text-black block mb-1">4. Evidence-Based Research</span>
            <p className="text-xs text-slate-600">Applying comparative interdisciplinary methodologies to legislative studies globally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
