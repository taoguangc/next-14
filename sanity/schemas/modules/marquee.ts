import { Slideshow } from '@phosphor-icons/react'

const marquee = {
  name: 'marquee',
  title: 'Marquee',
  type: 'object',
  icon: Slideshow,
  fieldsets: [
    {
      title: '',
      name: 'options',
      options: { columns: 2 }
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
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
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required()
    }
  ]
}

export default marquee
