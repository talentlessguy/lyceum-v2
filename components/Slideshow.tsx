import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
// import Slider from 'react-slick'
import { image, slides } from '../styles/slider.module.css'
import { useEmblaCarousel } from 'embla-carousel/react'
import { useRecursiveTimeout } from '../lib/useRecursiveTimeout'

/* const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1
}
 */

const PrevButton = ({ enabled, onClick }) => (
  <button className="embla__button embla__button--prev" onClick={onClick} disabled={!enabled}>
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
)

const NextButton = ({ enabled, onClick }) => (
  <button className="embla__button embla__button--next" onClick={onClick} disabled={!enabled}>
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
)

const AUTOPLAY_INTERVAL = 5000

const Slideshow = ({ images }: { images: { url: string }[] }) => {
  const [ref, embla] = useEmblaCarousel({
    loop: true,
    speed: 5
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const autoplay = useCallback(() => {
    if (!embla) return

    if (embla.canScrollNext()) {
      embla.scrollNext()
    } else {
      embla.scrollTo(0)
    }
  }, [embla])

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL)

  const scrollNext = useCallback(() => {
    if (!embla) return
    embla.scrollNext()
    stop()
  }, [embla, stop])

  const scrollPrev = useCallback(() => {
    if (!embla) return
    embla.scrollPrev()
    stop()
  }, [embla, stop])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
    embla.on('pointerDown', stop)
  }, [embla, onSelect, stop])

  useEffect(() => {
    play()
  }, [play])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={ref}>
        <div className="embla__container">
          {images.map(({ url }) => (
            <div className="embla__slide" key={url}>
              <div className="embla__slide__inner">
                <Image quality={100} src={url} className="embla__slide__img" layout="fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}

export default Slideshow

//
