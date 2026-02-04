import React from 'react';

export default function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null;

  return (
    <div className="prose-custom font-serif text-[17px] leading-[1.675] text-ink">
      {content.root.children.map((node: any, index: number) => renderNode(node, index))}
    </div>
  );
}

function renderNode(node: any, index: number): React.ReactNode {
  switch (node.type) {
    case 'heading':
      const textContent = node.children.map((child: any, i: number) => renderNode(child, i));
      const id = node.children?.[0]?.text?.toLowerCase().replace(/\s+/g, '-');
      const Tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      return <Tag key={index} id={id} className="mt-12 mb-6">{textContent}</Tag>;
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
        <ListTag key={index} className={`mb-6 pl-6 ${node.listType === 'number' ? 'list-decimal' : 'list-disc'}`}>
          {node.children.map((child: any, i: number) => renderNode(child, i))}
        </ListTag>
      );
    case 'listitem':
      return (
        <li key={index} className="mb-2">
          {node.children.map((child: any, i: number) => renderNode(child, i))}
        </li>
      );
    default:
      return null;
  }
}
