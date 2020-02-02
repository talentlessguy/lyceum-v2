import React from 'react'
import Slider from 'react-slick'
import styles, { image, slides } from '../styles/slider.module.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slideshow = () => (
  <Slider {...settings} className={slides} data-img="1">
    <div className={`${image} ${styles.image_first}`} />
    <div className={`${image} ${styles.image_second}`} />
    <div className={image} />
  </Slider>
)

export default Slideshow
