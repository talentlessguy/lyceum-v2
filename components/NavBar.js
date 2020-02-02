import React from 'react'
import Link from 'next/link'
import styles from '../styles/layout.module.css'

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
    text: 'Вход через ЕСИА'
  },
  {
    text: 'проект "Наука в Подмосковье"'
  },
  {
    text: 'ПФДО'
  }
]

const NavBar = () => (
  <nav className={styles.nav_bar}>
    {links.map(link => (
      <Link href="">
        <a>{link.text}</a>
      </Link>
    ))}
  </nav>
)

export default NavBar
