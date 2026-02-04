import React from 'react';

export default function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null;

  return (
    <div className="prose prose-slate max-w-none font-serif text-lg leading-relaxed text-ink">
      {content.root.children.map((node: any, index: number) => renderNode(node, index))}
    </div>
  );
}

function renderNode(node: any, index: number): React.ReactNode {
  switch (node.type) {
    case 'heading':
      const textContent = node.children.map((child: any, i: number) => renderNode(child, i));
      const id = node.children?.[0]?.text?.toLowerCase().replace(/\s+/g, '-');
      if (node.tag === 'h1') return <h1 key={index} id={id} className="text-navy font-bold mt-12 mb-6 text-4xl">{textContent}</h1>;
      if (node.tag === 'h2') return <h2 key={index} id={id} className="text-navy font-bold mt-10 mb-5 text-3xl">{textContent}</h2>;
      if (node.tag === 'h3') return <h3 key={index} id={id} className="text-navy font-bold mt-8 mb-4 text-2xl">{textContent}</h3>;
      return <h4 key={index} id={id} className="text-navy font-bold mt-6 mb-3 text-xl">{textContent}</h4>;
    case 'paragraph':
      return (
        <p key={index} className="mb-6">
          {node.children.map((child: any, i: number) => renderNode(child, i))}
        </p>
      );
    case 'text':
      let text: React.ReactNode = node.text;
      if (node.format & 1) text = <strong key={`bold-${index}`}>{text}</strong>;
      if (node.format & 2) text = <em key={`italic-${index}`}>{text}</em>;
      return text;
    case 'list':
      const ListTag = node.listType === 'number' ? 'ol' : 'ul';
      return (
        <ListTag key={index} className="list-disc pl-6 mb-6">
          {node.children.map((child: any, i: number) => renderNode(child, i))}
        </ListTag>
      );
    case 'listitem':
      return (
        <li key={index}>
          {node.children.map((child: any, i: number) => renderNode(child, i))}
        </li>
      );
    default:
      return null;
  }
}
