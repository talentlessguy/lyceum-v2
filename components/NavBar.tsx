import React, { ReactNode, useEffect, useState } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { MultiLevelNavbar } from 'react-multi-level-nav'
import 'react-multi-level-nav/dist/defaultStyles.css'

type linksObject = Record<
  string,
  {
    text: string
    href: string
  }[]
>

const links: linksObject = {
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
    },
    {
      text: 'Электронный дневник',
      href: 'http://liceym2.ru/index.php/usloviya/elektronnyj-dnevnik'
    },
    {
      text: 'Служба медиации',
      href: 'http://liceym2.ru/index.php/usloviya/252-sluzhba-mediatsii'
    }
  ],
  activity: [
    {
      text: 'Классы',
      href: '/activity/classes'
    },
    {
      text: 'Учёба',
      href: 'http://liceym2.ru/index.php/deyatelnost/uchebnaya-deyatelnost'
    },
    {
      text: 'Проектная деятельность',
      href: '/activity/projects'
    },
    {
      text: 'Дополнительное образование',
      href: '/activity/external'
    },
    {
      text: 'Спортивно-массовые мероприятия',
      href: 'http://liceym2.ru/index.php/deyatelnost/sportivno-massovye-meropriyatiya'
    },
    {
      text: ' Воспитательная работа',
      href: 'http://liceym2.ru/index.php/deyatelnost/vospitatelnaya-rabota'
    },
    {
      text: 'Экскурсии, походы',
      href: 'http://liceym2.ru/index.php/deyatelnost/ekskursii-pokhody'
    },
    {
      text: 'Всероссийская олимпиада школьников',
      href: '/activity/olymp'
    },
    {
      href: 'http://liceym2.ru/index.php/deyatelnost/regionalnaya-innovatsionnaya-ploshchadka',
      text: 'Региональная инновационная площадка'
    },
    {
      href: 'http://liceym2.ru/index.php/deyatelnost/sovmestnye-meropriyatiya-s-roditelyami',
      text: 'Совместные мероприятия с родителями'
    },
    {
      href: 'http://liceym2.ru/index.php/deyatelnost/videostudiya',
      text: 'Видеостудия'
    },
    {
      text: 'ЭРУДИТ',
      href: 'http://liceym2.ru/index.php/deyatelnost/erudit'
    }
  ],

  safety: [
    {
      href: 'http://liceym2.ru/index.php/bezopasnost-i-zdorove-shkolnikov',
      text: 'Комплексная безопасность'
    },
    {
      href: 'http://liceym2.ru/index.php/informatsionnaya-bezopasnost',
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

const NavBarContent = () => (
  <MultiLevelNavbar
    tree={{
      Главная: <Link href="/">Главная</Link>,
      Сведения: mapLinks(links.summary),
      Руководство: mapLinks(links.mgmt),
      Условия: mapLinks(links.conditions),
      Деятельность: mapLinks(links.activity),
      'Доступная среда': <Link href="/env">Доступная среда</Link>,
      Безопасность: mapLinks(links.safety),
      Контакты: <Link href="/contacts">Контакты</Link>,
      Музей: <Link href="http://liceym2.ru/index.php/muzej">Музей</Link>,
      'Частые вопросы': <Link href="/faq">Частые вопросы</Link>
    }}
    className="nav"
  />
)

const NavBar = () => {
  const [vis, set] = useState(false)

  useEffect(() => {
    set(window.innerWidth > 1500)
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
        <div className="nav_root_container">
          <NavBarContent />
        </div>
      )}
    </>
  )
}

export default NavBar
