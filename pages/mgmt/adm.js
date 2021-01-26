import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/mgmt/adm.module.css'

export const Portrait = ({ src, children, name, role, width = 200, height = 300 }) => (
  <figure className={clsx(styles.portrait, role ? styles[role] : '')}>
    <Image layout="fixed" objectFit="contain" {...{ width, height, src }} />
    <figcaption>
      <strong>{name}</strong>
      {children}
    </figcaption>
  </figure>
)

const Adm = () => (
  <Layout>
    <div className={styles.admGrid}>
      <Portrait
        role="dungeon_master"
        name="Людмила Ивановна Иващенко"
        src="https://img-fotki.yandex.ru/get/41717/227958524.f/0_1e1a93_d396e4b0_L.jpg"
      >
        образование высшее педагогическое директор МБОУ "Лицей№2" высшей квалификационной категории liceum_2@mail.ru
        74-47-01
      </Portrait>
      <div />
      <Portrait
        role="left"
        name="Оксана Викторовна Хоменко"
        src="https://img-fotki.yandex.ru/get/69681/227958524.9/0_1af8d5_2edc9a8c_L.jpg"
      >
        образование высшее педагогическое заместитель директора по УВР высшей квалификационной категории, учитель
        истории и обществознания высшей квалификационной категории стаж работы 25 лет
      </Portrait>
      <Portrait
        role="center"
        name="Елена Александровна Рюмкина"
        src="https://img-fotki.yandex.ru/get/5103/227958524.9/0_1af8e3_5806c8d4_L.jpg"
      >
        образование высшее педагогическое заместитель директора по УВР первой квалификационной категории, учитель
        информатики высшей квалификационной категории стаж работы 27 лет
      </Portrait>
      <Portrait
        role="right"
        name="Муравьева Ольга Станиставна"
        src="http://liceym2.ru/images/FOTO2018/IMG-20190618-WA0001.jpg"
      >
        образование высшее педагогическое заместитель директора по ВР высшей квалификационной категории стаж работы 22
        года
      </Portrait>
    </div>
  </Layout>
)

export default Adm
