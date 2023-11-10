const twoColumns = {
  name: 'twoColumns',
  title: 'Two Columns',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'block',
          title: 'Block',
          type: 'block'
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}

export default twoColumns
