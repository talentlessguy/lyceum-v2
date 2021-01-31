import Image from 'next/image'
import React from 'react'
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
  text: string
  heading: string
  imageProps?: unknown
}) => (
  <div className={post}>
    <h2>{heading}</h2>
    <div className={imageSet}>
      {images?.map((img, i) => (
        <Image quality={60} height={img.height} width={img.width} src={img.url} key={i} {...imageProps} />
      ))}
    </div>

    <article>{text}</article>
  </div>
)

export default Post
