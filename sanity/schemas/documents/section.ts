import { Cards } from '@phosphor-icons/react'

const section = {
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: Cards,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]
}

export default section
