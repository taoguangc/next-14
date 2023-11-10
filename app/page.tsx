import { SanityDocument } from 'next-sanity'
import Posts from './_components/Posts'
import { postsQuery } from '@/sanity/lib/queries'
import { sanityFetch, token } from '@/sanity/lib/sanityFetch'
import { draftMode } from 'next/headers'
import PreviewPosts from '@/app/_components/PreviewPosts'
import PreviewProvider from '@/app/_components/PreviewProvider'

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery })
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    )
  }

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-6xl font-bold mb-20 bg-gradient-to-r from-orange-400 via-red-400 to-purple-600 bg-clip-text text-transparent'>
        Hello Sanity.
      </h1>
      <Posts posts={posts} />
    </main>
  )
}
