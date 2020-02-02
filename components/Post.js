import React from 'react'
import { post, imageSet } from '../styles/post.module.css'

const Post = ({ images, text }) => (
  <div className={post}>
    <div className={imageSet}>
      {images.map((img, i) => (
        <figure key={i}>
          <img src={img} />
        </figure>
      ))}
    </div>

    <span>{text}</span>
  </div>
)

export default Post
