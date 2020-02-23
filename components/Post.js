import React from 'react'
import { post, imageSet } from '../styles/post.module.css'

const Post = ({ images, text, heading }) => (
  <div className={post}>
    <h2>{heading}</h2>
    <div className={imageSet}>
      {images?.map((img, i) => (
        <img src={img} key={i} alt={heading} />
      ))}
    </div>

    <article>{text}</article>
  </div>
)

export default Post
