import React from 'react'
import style from '../styles/footer.module.css'
import ExternalLink from './ExternalLink'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>Лицей №2</p>
      <p>Московская область, город Протвино, улица Гагарина, д.7</p>
      <p>Copyright © {new Date().getFullYear()}</p>

      <ExternalLink href="https://v1rtl.site">
        <img
          src="https://v1rtl.site/emoji.gif"
          alt="made by v1rtl"
          width="30px"
          style={{
            position: 'absolute',
            bottom: '3px',
            right: '3px'
          }}
        />
      </ExternalLink>
    </footer>
  )
}
