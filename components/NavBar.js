import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const links = [
  {
    text: 'Основные сведения'
  },
  {
    text: 'Руководство'
  },
  {
    text: 'Условия'
  },
  {
    text: 'Деятельность'
  },
  {
    text: 'ЕГЭ, ОГЭ'
  },
  {
    text: 'Доступная среда'
  },
  {
    text: 'Учительская'
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
      {!visible && <strong>Лицей №2</strong>}

      {links.map(link => (
        <Link href="">
          <a>{link.text}</a>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar
