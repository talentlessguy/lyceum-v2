import React, { ReactNode, useEffect, useState } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { MultiLevelNavbar } from 'react-multi-level-nav'
import 'react-multi-level-nav/dist/defaultStyles.css'

const links = {
  summary: [
    {
      text: 'Сведения о МБОУ "Лицей №2"',
      href: '/summary'
    },
    {
      text: 'О лицее',
      href: '/about'
    },
    {
      text: 'Достижения',
      href: '/achievements'
    },
    {
      text: 'Атрибуты и символилка',
      href: '/identity'
    }
  ],
  mgmt: [
    {
      text: 'Директор',
      href: '/mgmt/director'
    },
    {
      text: 'Администрация',
      href: '/mgmt/adm'
    },
    {
      href: '/mgmt/teachers',
      text: 'Педагогический состав'
    },
    {
      href: '/mgmt/organs',
      text: 'Структура и органы управления'
    },
    {
      href: 'http://liceym2.ru/index.php/rukovodstvo/upravlyayushchij-sovet',
      text: 'Управляющий совет'
    }
  ],
  conditions: [
    {
      text: 'Обеспечение',
      href: '/conditions/resources'
    },
    {
      text: 'Кабинеты',
      href: '/conditions/rooms'
    },
    {
      text: 'Библиотека',
      href: '/conditions/lib'
    },
    {
      text: 'Социально-психологическая служба',
      href: 'http://liceym2.ru/index.php/usloviya/sotsialno-psikhologicheskaya-sluzhba'
    }
  ],
  activity: [
    {
      text: 'Учёба',
      href: '/activity'
    }
  ],
  exams: [
    {
      href: '/exams/ege',
      text: 'ЕГЭ'
    },
    {
      href: '/exams/oge',
      text: 'ОГЭ'
    }
  ],
  safety: [
    {
      href: '/safety/complex',
      text: 'Комплексная безопасность'
    },
    {
      href: '/safety/it',
      text: 'Информационная безопаность'
    }
  ]
}

const Link = (
  props: LinkProps & {
    children: ReactNode
    href: string
  }
) => (
  <NextLink {...props}>
    <a href={props.href}>{props.children}</a>
  </NextLink>
)

const mapLinks = (
  links: {
    text: string
    href: string
  }[]
) =>
  links.map((l) => (
    <Link href={l.href} key={l.text}>
      {l.text}
    </Link>
  ))

const NavBar = () => {
  const [vis, set] = useState(true)

  useEffect(() => {
    const listener = () => void set(window.innerWidth > 1500)

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [])

  return (
    <>
      <button className="ham_btn" onClick={() => set(!vis)}>
        {vis ? 'X' : '☰'}
      </button>
      {vis && (
        <MultiLevelNavbar
          preChildren={<Link href="/">Главная</Link>}
          tree={{
            Сведения: mapLinks(links.summary),
            Руководство: mapLinks(links.mgmt),
            Условия: mapLinks(links.conditions),
            Деятельность: mapLinks(links.activity),
            Экзамены: mapLinks(links.exams),
            'Доступная среда': <Link href="/env">Доступная среда</Link>,
            Учительская: <Link href="/teachers">Учительская</Link>,
            Безопасность: mapLinks(links.safety),
            Контакты: <Link href="/contacts">Контакты</Link>,
            Музей: <Link href="/museum">Музей</Link>,
            'Частые вопросы': <Link href="/faq">Частые вопросы</Link>,
            ПФДО: <Link href="/pfdo">ПФДО</Link>,
            'ШСК "Олимп"': <Link href="/olimp">ШСК &quot;Олимп&quot;</Link>,
            ЦОС: <Link href="/cos">ЦОС</Link>
          }}
          className="nav"
        />
      )}
    </>
  )
}

export default NavBar
