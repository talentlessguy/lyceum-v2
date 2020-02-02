import React from 'react'
import { grid, sidebar, main, feed, sidebar_right } from '../styles/layout.module.css'
import { slide_container, box } from '../styles/slider.module.css'
import Slideshow from '../components/Slideshow'
import Post from '../components/Post'

const Index = () => (
  <>
    <div className={slide_container}>
      <Slideshow />
      <div className={box}>
        <h1>МБОУ Лицей №2</h1>
        <span>муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область</span>
      </div>
    </div>

    <div className={grid}>
      <aside className={sidebar}>
        <img src="https://img-fotki.yandex.ru/get/151986/227958524.f/0_1e1a42_e4f098f0_L.jpg" />
        <img src="http://liceym2.ru/images/FOTO_2019_2020/Mun_obr.png" />
      </aside>
      <main className={main}>
        <h1>Новости</h1>
        <div className={feed}>
          <Post
            images={[
              'http://liceym2.ru/images/FOTO_2019_2020/Blokadniu_xleb.jpg',
              'http://liceym2.ru/images/FOTO_2019_2020/Blokadniu_xleb1.jpg'
            ]}
            text={`В лицее №2 прошли мероприятия, посвященные годовщине полного освобождения Ленинграда от фашистской блокады.
        27 января школьники приняли участие во Всероссийской Акции "Блокадный хлеб". Акция проводилась в актовом зале. Ребятам рассказали о цели мероприятия, показали видеоролик о событиях блокадного Ленинграда, о хлебных нормах. Волонтеры раздали информационные листовки и кусочки черного хлеба. В заключении Акции присутствующие почтили память погибших минутой молчания.
        В течение недели классные руководители проводят Всероссийский урок памяти. На классные часы приглашаются сотрудники городской библиотеки, представители Совета Ветеранов.
        В библиотеке оформлена выставка литературы Ленинград. Блокада. Подвиг". Все учащиеся имеют возможность ознакомиться с представленными книгами. `}
          />
        </div>
      </main>
      <aside className={`${sidebar} ${sidebar_right}`}>
        <img src="https://img-fotki.yandex.ru/get/370224/227958524.1d/0_2569a1_1e6c9929_L.jpg" alt="Госуслуги" />
        <img src="http://liceym2.ru/images/Bezopasnost/DTD3.jpg" />
        <img src="http://liceym2.ru/images/FOTO_2019_2020/RESchol.jpg" />
      </aside>
    </div>
  </>
)

export default Index
