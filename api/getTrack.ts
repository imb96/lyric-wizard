import { SHAZAM_BASE_URL } from './baseUrl'

type GetTrackParams = {
  name: string
  offset: number
}

const getTrack = async ({ name, offset }: GetTrackParams) => {
  const url = `${SHAZAM_BASE_URL}/search?term=${name}&locale=en-US&offset=${offset}&limit=5`

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (process.env.NEXT_PUBLIC_RAPID_API_KEY) {
    headers['X-RapidAPI-Key'] = process.env.NEXT_PUBLIC_RAPID_API_KEY
  }

  const res = await fetch(url, {
    method: 'GET',
    headers,
  })

  if (!res.ok) {
    throw new Error('GET: [getTrack] api Failed to fetch data')
  }

  const data = await res.json()
  return data
}

export default getTrack
