'use client'

import { useState } from 'react';

export default function Citation({ publication }: { publication: any }) {
  const [format, setFormat] = useState<'APA' | 'BibTeX'>('APA');

  const authorsList = publication.authors?.map((a: any) => a.name).join(', ') || 'GCPG';
  const year = publication.year;
  const title = publication.title;

  const apa = `${authorsList} (${year}). ${title}. Genève Center for Parliamentary Governance.`;

  const bibtex = `@article{gcpg_${publication.slug}_${year},
  author = {${authorsList}},
  title = {${title}},
  year = {${year}},
  publisher = {Genève Center for Parliamentary Governance}
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="bg-background-custom p-4 rounded-md border border-border-custom">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold uppercase text-slate tracking-widest">Cite this work</span>
        <div className="flex space-x-2">
          <button
            onClick={() => setFormat('APA')}
            className={`text-xs px-2 py-1 rounded ${format === 'APA' ? 'bg-navy text-white' : 'text-slate'}`}
          >
            APA
          </button>
          <button
            onClick={() => setFormat('BibTeX')}
            className={`text-xs px-2 py-1 rounded ${format === 'BibTeX' ? 'bg-navy text-white' : 'text-slate'}`}
          >
            BibTeX
          </button>
        </div>
      </div>
      <pre className="text-sm text-slate whitespace-pre-wrap font-mono bg-white p-3 border border-border-custom rounded mb-3">
        {format === 'APA' ? apa : bibtex}
      </pre>
      <button
        onClick={() => copyToClipboard(format === 'APA' ? apa : bibtex)}
        className="text-xs font-bold text-navy hover:underline"
      >
        Copy Citation
      </button>
    </div>
  );
}
