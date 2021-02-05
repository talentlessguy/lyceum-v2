import Image, { ImageProps } from 'next/image'
import React, { CSSProperties, PropsWithChildren } from 'react'
import Markdown from 'react-markdown'
import { post, imageSet, postContent } from '../styles/post.module.css'
import gfm from 'remark-gfm'

export type PostProps = {
  pictures?: {
    url: string
    height: number
    width: number
  }[]
  text?: string
  heading?: string
  headingLevel?: 1
}

const Post = ({
  pictures,
  text,
  heading,
  imageProps,
  headingLevel,
  ...props
}: PropsWithChildren<
  PostProps & {
    style?: CSSProperties
    imageProps?: Omit<ImageProps, 'height' | 'src' | 'width'> & { layout?: 'fixed' | 'intrinsic' | 'responsive' }
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => (
  <div className={post} {...props}>
    {headingLevel === 1 ? <h1>{heading}</h1> : <h2>{heading}</h2>}
    {pictures && (
      <div className={imageSet}>
        {pictures?.map((img, i) => (
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
