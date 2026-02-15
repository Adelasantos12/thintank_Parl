'use client'

import { useTranslations } from 'next-intl';

export default function TableOfContents({ content }: { content: any }) {
  const t = useTranslations('Publication');
  if (!content || !content.root || !content.root.children) return null;

  const headings = content.root.children
    .filter((node: any) => node.type === 'heading')
    .map((node: any) => {
      const text = node.children?.[0]?.text || '';
      return {
        text,
        id: text.toLowerCase().replace(/\s+/g, '-'),
        level: node.tag
      };
    });

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-4 font-sans">
      <h3 className="text-xs font-bold uppercase text-slate tracking-widest border-b border-border-custom pb-2 font-sans">{t('contents')}</h3>
      <ul className="space-y-2 font-sans">
        {headings.map((heading: any, i: number) => (
          <li key={i} className={`${heading.level === 'h3' ? 'pl-4' : ''} font-sans`}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-slate hover:text-navy transition-colors block font-sans"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
