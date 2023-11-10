const project = {
  name: 'project',
  title: '项目',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '名称',
      type: 'string'
    },
    {
      name: 'slug',
      title: '别名',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'image',
      title: '图像',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'content',
      title: '内容',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}

export default project
