import React, { PropsWithChildren } from 'react'
// @ts-ignore
import { grid, sidebar, main, sidebar_right } from '../styles/layout.module.css'
import Image from 'next/image'

const pics = [
  {
    filename: 'banner3.png',
    width: 112,
    height: 151,
    url: 'https://www.datocms-assets.com/39473/1612042036-banner3.png',
    alt: 'Мин обр МО',
    customData: {
      link: 'https://mo.mosreg.ru'
    }
  },
  {
    filename: 'banner2.jpg',
    width: 225,
    height: 225,
    url: 'https://www.datocms-assets.com/39473/1612041296-banner2.jpg',
    alt: 'Мин обр и науки РФ',
    customData: {
      link: 'https://minobrnauki.gov.ru/'
    }
  },
  {
    filename: 'russianelectronicschool.jpg',
    width: 1597,
    height: 960,
    url: 'https://www.datocms-assets.com/39473/1612042193-russianelectronicschool.jpg',
    alt: 'Российская электронная школа',
    customData: {
      link: 'https://resh.edu.ru/'
    }
  },
  {
    filename: 'gosuslug.jpg',
    width: 423,
    height: 276,
    url: 'https://www.datocms-assets.com/39473/1612042048-gosuslug.jpg',
    alt: 'Госуслуги',
    customData: {
      link: 'https://www.gosuslugi.ru'
    }
  },

  {
    filename: 'banner1.jpg',
    width: 1181,
    height: 661,
    url: 'https://www.datocms-assets.com/39473/1612041503-banner1.jpg',
    alt: 'Психологическая помощь',
    customData: {
      link: 'https://telefon-doveria.ru/'
    }
  }
]

const Layout = ({ children, ...props }: PropsWithChildren<unknown>) => (
  <div className={grid} {...props}>
    <aside className={sidebar}>
      {pics.slice(0, 2).map((pic) => (
        <a href={pic.customData.link} key={pic.alt}>
          <Image objectFit="contain" quality={50} src={pic.url} height={pic.height} width={pic.height} alt={pic.alt} />
        </a>
      ))}
    </aside>
    <main className={main}>{children}</main>
    <aside className={`${sidebar} ${sidebar_right}`}>
      {pics.slice(2, 5).map((pic) => (
        <a href={pic.customData.link} key={pic.alt}>
          <Image objectFit="contain" quality={50} src={pic.url} height={pic.height} width={pic.height} alt={pic.alt} />
        </a>
      ))}
    </aside>
  </div>
)

export default Layout
