import React from 'react'
import { post, imageSet } from '../styles/post.module.css'

const Post = ({
  images,
  text,
  heading,
  imageProps
}: {
  images: string[]
  text: string
  heading: string
  imageProps?: unknown
}) => (
  <div className={post}>
    <h2>{heading}</h2>
    <div className={imageSet}>
      {images?.map((img, i) => (
        <img src={img} key={i} alt={heading} {...imageProps} />
      ))}
    </div>

    <article>{text}</article>
  </div>
)

export default Post
