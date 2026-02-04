import type { CollectionConfig } from 'payload'

export const PublicationTypes: CollectionConfig = {
  slug: 'publication-types',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
