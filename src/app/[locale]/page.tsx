'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const [publicationFilter, setPublicationFilter] = useState('All');

  const publications = [
    {
      type: 'BOOK',
      year: '2025',
      title: 'Handbook of legislative procedure',
      institution: 'GCPG • Genève',
      category: 'Books'
    },
    {
      type: 'REPORT',
      year: '2026',
      title: 'The state of parliaments 2026',
      institution: 'GCPG • Genève',
      category: 'Reports'
    },
    {
      type: 'PAPER',
      year: '2026',
      title: 'Parliamentary oversight of the executive',
      institution: 'GCPG • Genève',
      category: 'Papers'
    }
  ];

  const filteredPublications = publicationFilter === 'All'
    ? publications
    : publications.filter(p => p.category === publicationFilter);

  return (
    <div className="space-y-24 py-12 sm:py-16">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
            Strengthening parliamentary governance worldwide
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-sans font-normal leading-relaxed mb-10 max-w-3xl">
            Independent research, comparative analysis and capacity-building for legislatures committed to transparency, accountability and democratic representation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/publications"
              className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-800 transition-colors"
            >
              Explore Publications
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-slate-300 text-black text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-100 transition-colors"
            >
              About GCPG
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CENTRE SECTION */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-3">
              A Geneva centre for the study of legislatures
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-6">
              The Genève Center for Parliamentary Governance (GCPG)
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-sans">
              The Genève Center for Parliamentary Governance (GCPG) is an independent think tank devoted to the comparative study of parliaments, legislative procedure and the quality of law-making.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
              From Geneva we work with assemblies, universities and international organisations to produce rigorous research, practical guidance and training that strengthen democratic representation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PUBLICATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                FEATURED PUBLICATIONS
              </span>
              <span className="text-xs text-slate-400 font-mono">• Preview</span>
            </div>
            <p className="text-sm text-slate-600 font-sans">
              Reports, books, papers and briefs
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Reports', 'Books', 'Papers', 'Briefs'].map((filter) => (
              <button
                key={filter}
                onClick={() => setPublicationFilter(filter)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  publicationFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {filteredPublications.map((pub, idx) => (
            <div key={idx} className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-500 tracking-wider mb-4">
                  <span>{pub.type} • {pub.year}</span>
                  <span className="text-slate-400 font-normal">{pub.institution}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-black mb-4">
                  {pub.title}
                </h3>
              </div>
              <Link
                href="/publications"
                className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600 inline-flex items-center gap-1 mt-6"
              >
                Read publication &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="text-right">
          <Link
            href="/publications"
            className="text-sm font-bold text-black hover:text-slate-600 inline-flex items-center gap-2"
          >
            Full catalogue &rarr;
          </Link>
        </div>
      </section>

      {/* 4. WORK AREAS SECTION */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                WORK AREAS
              </span>
              <span className="text-xs text-slate-500 font-mono">• Preview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Four lines, one purpose
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Each area combines original research, technical cooperation and open dissemination of findings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded border border-slate-800 bg-slate-800/40">
              <span className="text-2xl font-bold font-heading text-slate-500 block mb-4">01</span>
              <h3 className="text-lg font-bold text-white mb-3">Parliaments and representation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Applied research on how legislative assemblies function, their composition and their link with citizens.
              </p>
            </div>

            <div className="p-6 rounded border border-slate-800 bg-slate-800/40">
              <span className="text-2xl font-bold font-heading text-slate-500 block mb-4">02</span>
              <h3 className="text-lg font-bold text-white mb-3">Legislative good practice</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Comparative standards on procedure, executive oversight, parliamentary ethics and open parliaments.
              </p>
            </div>

            <div className="p-6 rounded border border-slate-800 bg-slate-800/40">
              <span className="text-2xl font-bold font-heading text-slate-500 block mb-4">03</span>
              <h3 className="text-lg font-bold text-white mb-3">Capacity-building</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Training programmes for parliamentarians, advisers and legislative staff worldwide.
              </p>
            </div>

            <div className="p-6 rounded border border-slate-800 bg-slate-800/40">
              <span className="text-2xl font-bold font-heading text-slate-500 block mb-4">04</span>
              <h3 className="text-lg font-bold text-white mb-3">Applied legislative studies</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Analysis of regulatory quality, legislative impact assessment and modernisation of research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRAINING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
              TRAINING
            </span>
            <h2 className="text-3xl font-heading font-bold text-black mb-3">
              Capacity-building for those who make the law
            </h2>
            <p className="text-slate-600 text-base max-w-2xl font-sans">
              Programmes designed with partner parliaments and universities, in person in Geneva and online.
            </p>
          </div>
          <Link
            href="/training"
            className="mt-6 md:mt-0 text-sm font-bold text-black hover:text-slate-600 inline-flex items-center gap-1"
          >
            Request information &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="tag-badge mb-4 block w-fit">GENEVA • 5 DAYS • IN PERSON</span>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Senior parliamentary leadership programme
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                For secretaries-general and directors of legislative services.
              </p>
            </div>
            <Link href="/training" className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600">
              Learn more &rarr;
            </Link>
          </div>

          <div className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="tag-badge mb-4 block w-fit">EXECUTIVE EDUCATION</span>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Legislative drafting course
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Normative technique, legal clarity and impact assessment.
              </p>
            </div>
            <Link href="/training" className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600">
              Learn more &rarr;
            </Link>
          </div>

          <div className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="tag-badge mb-4 block w-fit">JULY 2026 • SCHOLARSHIPS AVAILABLE</span>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Geneva summer school
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Two weeks immersed in comparative parliamentary governance.
              </p>
            </div>
            <Link href="/training" className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEWS & ANALYSIS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
            NEWS &amp; ANALYSIS
          </span>
          <h2 className="text-3xl font-heading font-bold text-black">
            From the Centre
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3">
                <span>12 May 2026</span>
                <span>•</span>
                <span className="text-black uppercase">ANALYSIS</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Citizen-centred budgets: lessons from three parliaments
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                How finance committees bring in public consultation without losing technical rigour.
              </p>
            </div>
            <Link href="/news" className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600">
              Read article &rarr;
            </Link>
          </div>

          <div className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3">
                <span>28 April 2026</span>
                <span>•</span>
                <span className="text-black uppercase">NEWS</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                GCPG signs a cooperation agreement with the Inter-Parliamentary Union
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                The accord will drive joint training and comparative studies over three years.
              </p>
            </div>
            <Link href="/news" className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600">
              Read announcement &rarr;
            </Link>
          </div>

          <div className="modern-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3">
                <span>9 April 2026</span>
                <span>•</span>
                <span className="text-black uppercase">BRIEF</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                Geneva seminar: artificial intelligence and legislative work
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Conclusions from the meeting on AI tools in the service of legislative drafting.
              </p>
            </div>
            <Link href="/news" className="text-xs font-bold uppercase tracking-wider text-black hover:text-slate-600">
              Read brief &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
