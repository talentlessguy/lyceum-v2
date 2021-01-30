import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import styles from '../../styles/mgmt/adm.module.css'

export type PortraitProps = {
  src: string
  children: ReactNode
  name: string
  width?: number
  height?: number
  role?: string
}

export const Portrait = ({ src, children, name, role, width = 200, height = 300 }: PortraitProps) => (
  <figure className={clsx(styles.portrait, role ? styles[role] : '')}>
    <Image layout="fixed" objectFit="contain" {...{ width, height, src }} />
    <figcaption>
      <strong>{name}</strong>
      {children}
    </figcaption>
  </figure>
)
