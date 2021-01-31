import React from 'react'
import style from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>Лицей №2</p>
      <p>Московская область, город Протвино, улица Гагарина, д.7</p>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  )
}
