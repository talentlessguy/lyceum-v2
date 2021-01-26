import React from 'react'
import { Portrait } from './adm'
import styles from '../../styles/mgmt/teachers.module.css'
import Layout from '../../components/Layout'

const teachers = [
  {
    name: 'Любимова Татьяна Юрьевна',
    text: ` образование высшее педагогическое

    заместитель директора по УВР
    
    первой квалификационной категории
    
    стаж работы 14 лет`,
    src: 'http://liceym2.ru/images/FOTO2018/Lubimova.jpg'
  },
  {
    name: 'Курбатова Анна Михайловна',
    text: `образование высшее педагогическое

    педагог  - психолог
    
    высшей квалификационной категории
    
    стаж работы 22 года`,
    src: 'https://img-fotki.yandex.ru/get/169608/227958524.13/0_1fd896_68363541_L.jpg'
  },
  {
    name: 'Котельникова Марина Григорьевна',
    text: `образование высшее педагогическое

    социальный педагог
    
    высшей квалификационной категории
    
    стаж работы 30 лет`,
    src: 'https://img-fotki.yandex.ru/get/67577/227958524.9/0_1af8e0_9eea4aeb_L.jpg'
  },
  {
    name: 'Богданова Татьяна Вениаминовна',
    text: `образование высшее педагогическое

    библиотекарь
    
    первой кваливикационной категории
    
    стаж работы 30 лет`,
    src: 'http://liceym2.ru/images/FOTO2018/o_1224346676.jpg'
  },
  {
    name: 'Мартыненко Елена Борисовна',
    text: `образование среднее профессиональное

    педагог - организатор
    
    категория первая
    
    стаж работы 10 лет`,
    src: 'http://liceym2.ru/images/FOTO2018/IMG-20190603-WA0017.jpg'
  },
  {
    name: 'Костина Наталья Александровна',
    text: `образование высшее педагогическое

    педагог дополнительного образования
   
    высшей квалификационной категории 
   
   стаж работы 12 лет`,
    src: 'http://liceym2.ru/images/FOTO2018/o_65c70b18a2.jpg'
  }
]

const introTeachers = [
  {
    name: 'Дикун Людмила Андреевна',
    text: `учитель начальных классов

    образование средне-специальное педагогическое
    
    высшей квалификационной категории
    
    стаж работы 39 года`,
    src: 'http://liceym2.ru/images/FOTO2018/Dikun.jpg'
  }
]

const Teachers = () => (
  <Layout>
    <div className={styles.teachersGrid}>
      <Portrait
        role="top"
        name="Людмила Ивановна Иващенко"
        src="https://img-fotki.yandex.ru/get/41717/227958524.f/0_1e1a93_d396e4b0_L.jpg"
      >
        образование высшее педагогическое директор МБОУ "Лицей№2" высшей квалификационной категории liceum_2@mail.ru
        74-47-01
      </Portrait>

      <Portrait
        name="Оксана Викторовна Хоменко"
        src="https://img-fotki.yandex.ru/get/69681/227958524.9/0_1af8d5_2edc9a8c_L.jpg"
      >
        образование высшее педагогическое заместитель директора по УВР высшей квалификационной категории, учитель
        истории и обществознания высшей квалификационной категории стаж работы 25 лет
      </Portrait>
      <Portrait
        name="Елена Александровна Рюмкина"
        src="https://img-fotki.yandex.ru/get/5103/227958524.9/0_1af8e3_5806c8d4_L.jpg"
      >
        образование высшее педагогическое заместитель директора по УВР первой квалификационной категории, учитель
        информатики высшей квалификационной категории стаж работы 27 лет
      </Portrait>
      <Portrait name="Муравьева Ольга Станиставна" src="http://liceym2.ru/images/FOTO2018/IMG-20190618-WA0001.jpg">
        образование высшее педагогическое заместитель директора по ВР высшей квалификационной категории стаж работы 22
        года
      </Portrait>
      {teachers.map(({ text, ...teacher }) => (
        <Portrait {...teacher}>{teacher.text}</Portrait>
      ))}
    </div>
    <h2 className={styles.heading}>Учителя начальной ступени образования</h2>
    <div>
      {introTeachers.map(({ text, ...teacher }) => (
        <Portrait {...teacher}>{teacher.text}</Portrait>
      ))}
    </div>
  </Layout>
)

export default Teachers
