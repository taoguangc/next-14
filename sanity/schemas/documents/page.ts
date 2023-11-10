import { defineField, defineType } from 'sanity'
import { File } from '@phosphor-icons/react'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: File,
  groups: [
    {
      name: 'content',
      title: '内容',
      default: true
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'slug',
      title: '别名',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'content'
    }),
    defineField({
      name: 'modules',
      title: '模块',
      type: 'array',
      of: [
        { title: '视觉主图', type: 'hero' },
        { title: '幻灯片', type: 'marquee' }
        // {
        //   title: 'Reusable Section',
        //   type: 'reference',
        //   to: [{ type: 'section' }]
        // }
      ],
      group: 'content'
    }),
    { name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo' },
    { name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo' }
  ]
})
