const columns = {
  name: 'columns',
  title: 'Columns',
  type: 'array',
  of: [
    { type: 'hero' },
    { type: 'marquee' },
    {
      title: '可重用块',
      type: 'reference',
      to: [{ type: 'section' }]
    }
  ]
}

export default columns
