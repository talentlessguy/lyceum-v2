import React, { useCallback, useEffect, useState } from 'react'
import { Image } from 'react-datocms'
import Carousel from 'nuka-carousel'
import { image, slides, slider_btn } from '../styles/slider.module.css'

const PrevButton = (props) => (
  <button
    {...props}
    style={{
      ...props.style,
      cursor: props.disabled ? 'not-allowed' : 'pointer'
    }}
  >
    <svg fill="white" className="embla__button__svg" viewBox="137.7 -1 366.6 644" width="12">
      <path d="M428.4 12.5a42.7 42.7 0 0160.4 60.4L241.7 320l247 247a42.7 42.7 0 01-60.3 60.5l-277.2-277a42.3 42.3 0 01-12.5-30.4c0-11.1 4.1-22 12.5-30.4L428.4 12.5z" />
    </svg>
  </button>
)

const NextButton = (props) => (
  <button
    {...props}
    style={{
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      transform: 'rotate(180deg)'
    }}
  >
    <svg fill="white" className="embla__button__svg" viewBox="137.7 -1 366.6 644" width="12">
      <path d="M428.4 12.5a42.7 42.7 0 0160.4 60.4L241.7 320l247 247a42.7 42.7 0 01-60.3 60.5l-277.2-277a42.3 42.3 0 01-12.5-30.4c0-11.1 4.1-22 12.5-30.4L428.4 12.5z" />
    </svg>
  </button>
)

const disabled = (props) => props.currentSlide + 1 === props.slideCount

const Slideshow = ({ images }: { images: any[] }) => {
  console.log(images)

  return (
    <Carousel
      speed={1450}
      wrapAround
      className={slides}
      autoplay
      height="var(--height)"
      renderCenterLeftControls={({ previousSlide, ...props }) => (
        <PrevButton aria-label="Назад" onClick={previousSlide} className={slider_btn} />
      )}
      renderCenterRightControls={({ nextSlide, ...props }) => (
        <NextButton aria-label="Вперёд" onClick={nextSlide} className={slider_btn} />
      )}
    >
      {images.map((img, i) => (
        <Image className={image} data={img.responsiveImage} key={i} />
      ))}
    </Carousel>
  )
}

export default Slideshow

//
