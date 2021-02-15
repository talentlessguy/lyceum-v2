import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import NextLink, { LinkProps } from 'next/link'
import 'react-multi-level-nav/dist/defaultStyles.css'
import { links } from '../lib/data'
import { MultiLevelNavbar } from 'react-multi-level-nav'

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
    set(window.innerWidth > 1260)
    const listener = () => void set(window.innerWidth > 1260)

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
