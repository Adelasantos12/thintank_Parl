import type { CollectionConfig } from 'payload'

export const Publications: CollectionConfig = {
  slug: 'publications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'type'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        description: 'Year of publication',
      },
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'publication-types',
      required: true,
    },
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'authors',
      hasMany: true,
      required: true,
    },
    {
      name: 'topics',
      type: 'relationship',
      relationTo: 'topics',
      hasMany: true,
    },
    {
      name: 'regions',
      type: 'relationship',
      relationTo: 'regions',
      hasMany: true,
    },
    {
      name: 'abstract',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload the PDF version of the publication',
      },
    },
    {
      name: 'linkedinPostUrl',
      type: 'text',
      admin: {
        description: 'URL of the associated LinkedIn post or article (e.g. https://www.linkedin.com/posts/... or embed URL)',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
