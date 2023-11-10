import { PortableTextBlock } from 'sanity'

export type Project = {
  _id: string
  _createdAt: Date
  name: string
  slug: string
  image: string
  asset: {
    url: string
    metadata: {
      lqip: string
      demensions: {
        height: string
        weight: string
      }
    }
  }
  lqip: string
  url: string
  content: PortableTextBlock[]
}
