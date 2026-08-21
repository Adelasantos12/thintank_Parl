import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Topics } from './collections/Topics'
import { Regions } from './collections/Regions'
import { PublicationTypes } from './collections/PublicationTypes'
import { Authors } from './collections/Authors'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Publications } from './collections/Publications'
import { Settings } from './globals/Settings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Topics, Regions, PublicationTypes, Authors, Media, Pages, Publications],
  globals: [Settings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
      ssl: process.env.DATABASE_URI || process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
    },
  }),
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Français', code: 'fr' },
      { label: 'Español', code: 'es' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
})
