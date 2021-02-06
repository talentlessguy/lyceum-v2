import React from 'react'

// @ts-ignore
import { grid, sidebar, main, sidebar_right } from '../styles/layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

type pic = {
  width: number
  height: number
  url: string
  alt: string
  customData: {
    link: string
  }
}

const pics: pic[] = [
  {
    width: 112,
    height: 151,
    url: 'https://www.datocms-assets.com/39473/1612042036-banner3.png',
    alt: 'Мин обр МО',
    customData: {
      link: 'https://mo.mosreg.ru'
    }
  },
  {
    width: 225,
    height: 225,
    url: 'https://www.datocms-assets.com/39473/1612536764-banner2.png',
    alt: 'Мин обр и науки РФ',
    customData: {
      link: 'https://minobrnauki.gov.ru/'
    }
  },
  {
    url: 'https://www.datocms-assets.com/39473/1612598424-logo.svg',
    width: 117,
    height: 128,
    alt: 'Российская электронная школа',
    customData: {
      link: 'https://resh.edu.ru/'
    }
  },
  {
    url: 'https://www.datocms-assets.com/39473/1612598288-download-html.svg',
    width: 193,
    height: 212,
    alt: 'Госуслуги',
    customData: {
      link: 'https://www.gosuslugi.ru'
    }
  },
  {
    url: 'https://www.datocms-assets.com/39473/1612598990-pitanie1.jpeg',
    width: 733,
    height: 1024,
    alt: 'Добродел',
    customData: {
      link: 'https://dobrodel.mosreg.ru/'
    }
  },
  {
    url: 'https://www.datocms-assets.com/39473/1612598589-logo-desktop.png',
    width: 227,
    height: 172,
    alt: 'Психологическая помощь',
    customData: {
      link: 'https://telefon-doveria.ru/'
    }
  },
  {
    url: 'https://www.datocms-assets.com/39473/1612599317-logo.png',
    width: 450,
    height: 451,
    alt: 'Единое окно доступа к образовательным ресурсам',
    customData: {
      link: 'http://window.edu.ru/'
    }
  }
]

const links: {
  href: string
  text: string
}[] = [
  {
    href: '/schedule',
    text: 'Режим работы'
  },
  {
    href: '/first-graders',
    text: 'Приём детей в 1 класс'
  },
  {
    href: '/public-reports',
    text: 'Публичные доклады и отчёты'
  },
  {
    href: '/pfdo',
    text: 'ПФДО'
  },
  {
    href: '/olimp',
    text: 'ШСК "Олимп"'
  },
  {
    text: 'ЦОС',
    href: '/cos'
  }
]

const Layout = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={grid} {...props}>
    <aside className={sidebar}>
      {links.map(({ href, text }) => (
        <Link {...{ href }} key={text}>
          {text}
        </Link>
      ))}
    </aside>
    <main className={main}>{children}</main>
    <aside className={`${sidebar} ${sidebar_right}`}>
      {pics.map((pic) => (
        <a href={pic.customData.link} key={pic.alt}>
          <Image
            title={pic.alt}
            objectFit="contain"
            src={pic.url}
            height={pic.height}
            width={pic.height}
            alt={pic.alt}
            quality={50}
          />
        </a>
      ))}
    </aside>
  </div>
)

export default Layout
