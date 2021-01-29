import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'

const awards = [
  {
    pic: '/award1.jpg',
    text:
      'Удостоверение победителя Всероссийского публичного смотра среди образовательных организаций "Творчески работающие коллективы школ, гимназий, лицеев России" 2018-2019'
  },
  {
    pic: '/award2.jpg',
    text:
      'Сертификат МБОУ "Лицей №2" является академической экспериментальной площадкой государственного бюджетного учреждения высшего образования Московской области "Академия социального управления" 2018-2021 г.'
  },
  {
    pic: '/award3.jpg',
    text: 'Благодарность за подготовку прёзов регионального этапа всероссийской олимпиады школьников в 2018-2019'
  },
  {
    pic: '/award4.jpeg',
    text: 'Почетная грамота за 1 место "Лучший доклад - навигатор" 2018'
  }
]

const Achievements = () => (
  <Layout>
    <style jsx>
      {`
        .list {
          display: grid;
          gap: 4rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
      `}
    </style>
    <h2>За годы работы коллектив МБОУ «Лицей №2» достиг высоких результатов деятельности</h2>
    <div className="list">
      {awards.map(({ pic, text }) => (
        <Post key={pic} images={[pic]} text={text} />
      ))}
    </div>
  </Layout>
)

export default Achievements
