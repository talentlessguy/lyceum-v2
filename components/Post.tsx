import Image, { ImageProps } from 'next/image'
import React, { CSSProperties, PropsWithChildren } from 'react'
import Markdown from 'react-markdown'
import { post, imageSet, postContent } from '../styles/post.module.css'
import gfm from 'remark-gfm'

export type PostProps = {
  images?: {
    url: string
    height: number
    width: number
  }[]
  text?: string
  heading?: string
}

const Post = ({
  images,
  text,
  heading,
  imageProps,
  ...props
}: PropsWithChildren<
  PostProps & {
    style?: CSSProperties
    imageProps?: Omit<ImageProps, 'height' | 'src' | 'width'> & { layout?: 'fixed' | 'intrinsic' | 'responsive' }
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => (
  <div className={post} {...props}>
    {heading && <h2>{heading}</h2>}
    {images && (
      <div className={imageSet}>
        {images?.map((img, i) => (
          <Image quality={60} height={img.height} width={img.width} src={img.url} key={i} {...imageProps} />
        ))}
      </div>
    )}

    {text && (
      <article className={postContent}>
        <Markdown plugins={[gfm]}>{text}</Markdown>
      </article>
    )}
  </div>
)

export default Post
