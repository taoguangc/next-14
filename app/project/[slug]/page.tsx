import { getProject } from '@/sanity/lib/queries
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  params: { project: string }
}

export default async function Project({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  return (
    <article className='max-w-7xl p-8 mx-auto'>
      {project.name}
      <div>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={getImageDimensions(project.image).width}
        height={getImageDimensions(project.image).height}
        placeholder='blur'
        blurDataURL={project.lqip}
      />
    </article>
  )
}
