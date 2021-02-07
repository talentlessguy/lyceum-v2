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
    <svg fill="white" className="embla__button__svg" viewBox="137.718 -1.001 366.563 644" width="12px">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
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
    <svg fill="white" className="embla__button__svg" viewBox="137.718 -1.001 366.563 644" width="12px">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
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
