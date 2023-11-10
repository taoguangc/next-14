import { Cards } from '@phosphor-icons/react'

const section = {
  name: 'siteSettings',
  title: '站点设置',
  type: 'document',
  icon: Cards,
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'string'
    }
  ]
}

export default section
