import { getProjects } from '@/sanity/lib/sanity.query'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-6xl font-bold mb-20 bg-gradient-to-r from-orange-400 via-red-400 to-purple-600 bg-clip-text text-transparent'>
        Hello Sanity.
      </h1>
      <div className='grid grid-cols-3'>
        {projects.map(project => (
          <Link href={`/project/${project.slug}`} key={project._id} className='hover:scale-105 transition'>
            <h4 className='text-4xl h-24'>{project.name}</h4>
            {project.image && <Image src={project.image} alt={project.name} width={250} height={100} />}
          </Link>
        ))}
      </div>
    </main>
  )
}
