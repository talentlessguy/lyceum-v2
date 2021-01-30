import React, { PropsWithChildren } from 'react'
// @ts-ignore
import { grid, sidebar, main, sidebar_right } from '../styles/layout.module.css'
import img1 from '../public/banner2.jpg'
import img2 from '../public/banner3.png'
import img3 from '../public/gosuslug.jpg'
import img4 from '../public/banner1.jpg'
import img5 from '../public/russian_electronic_school.jpg'

const leftPics = [
  {
    src: img1,
    alt: 'Мин обр и науки РФ',
    link: 'https://minobrnauki.gov.ru/'
  },
  {
    src: img2,
    alt: 'Мин обр МО',
    link: 'https://mo.mosreg.ru/'
  }
]

const rightPics = [
  {
    src: img3,
    alt: 'Госуслуги',
    link: 'https://www.gosuslugi.ru/'
  },
  {
    src: img4,
    link: 'https://telefon-doveria.ru/',
    alt: 'Психологическая помощь'
  },
  {
    src: img5,
    alt: 'Российская электронная школа',
    link: 'https://resh.edu.ru/'
  }
]

const Layout = ({ children, ...props }: PropsWithChildren<unknown>) => (
  <div className={grid} {...props}>
    <aside className={sidebar}>
      {leftPics.map((pic) => (
        <a href={pic.link} key={pic.alt}>
          <img src={pic.src} alt={pic.alt} />
        </a>
      ))}
    </aside>
    <main className={main}>{children}</main>
    <aside className={`${sidebar} ${sidebar_right}`}>
      {rightPics.map((pic) => (
        <a href={pic.link} key={pic.alt}>
          <img src={pic.src} alt={pic.alt} />
        </a>
      ))}
    </aside>
  </div>
)

export default Layout
