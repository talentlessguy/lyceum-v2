import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { MultiLevelNavbar } from 'react-multi-level-nav'
import 'react-multi-level-nav/dist/defaultStyles.css'
import clsx from 'clsx'

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
      href: '/mgmt/board',
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
      href: '/conditions/socio-psychology'
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

const Link = (props) => (
  <NextLink {...props}>
    <a href={props.href}>{props.children}</a>
  </NextLink>
)

const mapLinks = (links) =>
  links.map((l) => (
    <Link href={l.href} key={l.text}>
      {l.text}
    </Link>
  ))

const NavBar = () => {
  const [vis, set] = useState(true)

  useEffect(() => {
    const listener = window.addEventListener('resize', () => {
      if (window.innerWidth > 1500) {
        set(true)
      }
    })

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
            'ШСК "Олимп"': <Link href="/olimp">ШСК "Олимп"</Link>,
            ЦОС: <Link href="/cos">ЦОС</Link>
          }}
          className="nav"
        />
      )}
    </>
  )
}

export default NavBar
