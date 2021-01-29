import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { container } from '../../styles/conditions/resources.module.css'

const Rooms = () => (
  <Layout>
    <div className={container}>
      <div>
        <Image src="https://img-fotki.yandex.ru/get/2914/227958524.0/0_15d93b_4921cc4_L.jpg" width={300} height={224} />
        <p>Фасад МБОУ &quot;Лицей №2&quot; </p>
      </div>
      <div>
        <Image
          src="https://img-fotki.yandex.ru/get/235925/227958524.1c/0_2549fb_e5887b99_L.jpg"
          width={300}
          height={169}
        />
        <p>Столовая</p>
      </div>
      <div>
        <Image
          src="https://img-fotki.yandex.ru/get/235925/227958524.1c/0_2549f9_8d7a2d01_L.jpg"
          width={300}
          height={225}
        />
        <p>Спортивный зал</p>
      </div>
      <div>
        <Image
          src="https://img-fotki.yandex.ru/get/470815/227958524.1c/0_2549f1_ac6c77f5_L.jpg"
          width={300}
          height={169}
        />
        <p>Актовый зал</p>
      </div>
    </div>
  </Layout>
)

export default Rooms
