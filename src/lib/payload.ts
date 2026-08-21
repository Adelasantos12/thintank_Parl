import config from '@/payload.config'
import { getPayload } from 'payload'

export const getPayloadClient = async () => {
  try {
    return await getPayload({
      config,
    })
  } catch (error) {
    console.warn('Payload client initialization skipped (no database connection):', error)
    return null
  }
}
