import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './schemas/documents/siteSettings'
import page from './schemas/documents/page'
import category from './schemas/documents/category'
import post from './schemas/documents/post'
import project from './schemas/documents/project'
import section from './schemas/documents/section'
import blockContent from './schemas/modules/blockContent'
import twoColumns from './schemas/modules/twoColumns'
import hero from './schemas/modules/hero'
import marquee from './schemas/modules/marquee'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, page, post, category, project, section, twoColumns, hero, marquee, blockContent]
}
