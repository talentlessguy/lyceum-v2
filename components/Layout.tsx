import React, { ReactNode } from 'react'
// @ts-ignore
import { grid, sidebar, main, sidebar_right } from '../styles/layout.module.css'

const leftPics = [
  {
    src: '/banner2.jpg',
    alt: 'Мин обр и науки РФ',
    link: 'https://minobrnauki.gov.ru/'
  },
  {
    src: '/banner3.png',
    alt: 'Мин обр МО',
    link: 'https://mo.mosreg.ru/'
  }
]

const rightPics = [
  {
    src: '/gosuslug.jpg',
    alt: 'Госуслуги',
    link: 'https://www.gosuslugi.ru/'
  },
  {
    src: '/banner1.jpg',
    link: 'https://telefon-doveria.ru/',
    alt: 'Психологическая помощь'
  },
  {
    src: '/russian_electronic_school.jpg',
    alt: 'Российская электронная школа',
    link: 'https://resh.edu.ru/'
  }
]

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={grid}>
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
