import { Image } from '@phosphor-icons/react'

const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: Image,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    }
  ]
}

export default hero
