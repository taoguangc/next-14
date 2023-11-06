'use client'

import { urlForImage } from '@/sanity/lib/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getImageDimensions } from '@sanity/asset-utils'
import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src'> & {
  src: SanityImageSource
}

export default function SanityImage({ src, alt, ...props }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={getImageDimensions(src).width}
      height={getImageDimensions(src).height}
      loader={({ width, quality = 100 }) => urlForImage(src).width(width).quality(quality).url()}
      {...props}
    />
  )
}
