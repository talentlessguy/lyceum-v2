import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const links = [
  {
    text: 'Основные сведения',
    href: '/summary'
  },
  {
    text: 'Достижения',
    href: '/achievements'
  },
  {
    text: 'О МБОУ Лицей №2',
    href: '/about'
  },
  {
    text: 'Деятельность'
  },
  {
    text: 'Доступная среда',
    href: '/env'
  },
  {
    text: 'Учительская',
    href: '/teachers'
  },
  {
    text: 'Комплексная безопасность'
  },
  {
    text: 'Контакты'
  },
  {
    text: 'Музей'
  },
  {
    text: 'Ваше мнение'
  },
  {
    text: 'Информационная безопасность'
  },

  {
    text: 'проект "Наука в Подмосковье"'
  },
  {
    text: 'ПФДО'
  }
]

const NavBar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <nav className={visible ? styles.nav_bar : styles.nav_bar_hidden}>
      <button onClick={() => setVisible(!visible)}>{visible ? 'X' : '☰'}</button>
      {!visible && (
        <Link href="/">
          <a>
            <strong>Лицей №2</strong>
          </a>
        </Link>
      )}

      {links.map(link => (
        <Link href={link.href || ''}>
          <a className={styles.link}>{link.text}</a>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar
