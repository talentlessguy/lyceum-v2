import Image, { ImageProps } from 'next/image'
import React from 'react'
import Markdown from 'react-markdown'
import { post, imageSet } from '../styles/post.module.css'

const Post = ({
  images,
  text,
  heading,
  imageProps
}: {
  images: {
    url: string
    height: number
    width: number
  }[]
  text?: string
  heading?: string
  imageProps?: Omit<ImageProps, 'height' | 'src' | 'width'> & { layout?: 'fixed' | 'intrinsic' | 'responsive' }
}) => (
  <div className={post}>
    {heading && <h2>{heading}</h2>}
    <div className={imageSet}>
      {images?.map((img, i) => (
        <Image quality={60} height={img.height} width={img.width} src={img.url} key={i} {...imageProps} />
      ))}
    </div>

    {text && (
      <article>
        <Markdown>{text}</Markdown>
      </article>
    )}
  </div>
)

export default Post
