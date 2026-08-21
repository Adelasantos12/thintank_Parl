import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let payload;
  try {
    payload = await getPayload({ config })
  } catch (e) {
    console.error('Failed to initialize Payload for sitemap:', e);
    return [];
  }
  const locales = ['en', 'fr', 'es']
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://gipg.ch'

  const routes = ['', '/publications', '/about', '/governance', '/contact', '/legal']

  const staticEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      staticEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
      })
    }
  }

  // Add publications
  try {
    const publications = await payload.find({
      collection: 'publications',
      limit: 1000,
    })

    const publicationEntries: MetadataRoute.Sitemap = publications.docs.flatMap((pub: any) =>
      locales.map(locale => ({
        url: `${baseUrl}/${locale}/publications/${pub.slug}`,
        lastModified: new Date(pub.updatedAt),
      }))
    )

    return [...staticEntries, ...publicationEntries]
  } catch {
    return staticEntries
  }
}
