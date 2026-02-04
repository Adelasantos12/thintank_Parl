'use client'

export default function TableOfContents({ content }: { content: any }) {
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
    <nav className="space-y-4">
      <h3 className="text-xs font-bold uppercase text-slate tracking-widest border-b border-border-custom pb-2">Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading: any, i: number) => (
          <li key={i} className={`${heading.level === 'h3' ? 'pl-4' : ''}`}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-slate hover:text-navy transition-colors block"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
