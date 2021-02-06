import React from 'react'
import ExternalLink from '../components/ExternalLink'
import Grid from '../components/Grid'
import Layout from '../components/Layout'
import { grid } from '../styles/layout.module.css'

const FirstGrades = () => (
  <Layout>
    <h1>Приём детей в 1 класс</h1>
    <Grid>
      <div>
        <p>
          Регистрация родителей в системе «Школьный портал»<strong> осуществляется </strong>через&nbsp;услугу{' '}
          <strong>
            «Предоставление информации о текущей успеваемости обучающегося, ведение электронного дневника и электронного
            журнала успеваемости»&nbsp;
          </strong>
          на Портале государственных и муниципальных услуг Московской области.{' '}
          <ExternalLink href="https://helpschool.mosreg.ru/hc/ru/articles/360009080694-%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83-%D0%9F%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%BE-%D1%82%D0%B5%D0%BA%D1%83%D1%89%D0%B5%D0%B9-%D1%83%D1%81%D0%BF%D0%B5%D0%B2%D0%B0%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B8-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-%D1%83%D1%81%D0%BF%D0%B5%D0%B2%D0%B0%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8-">
            Смотреть инструкцию
          </ExternalLink>
          .
        </p>
        <p>
          <strong>Для подачи заявления на предоставление доступа к системе «Школьный портал» необходимо:</strong>
        </p>
        <ol>
          <li>
            Перейти на региональный портал государственных и муниципальных услуг{' '}
            <ExternalLink href="https://uslugi.mosreg.ru/">https://uslugi.mosreg.ru</ExternalLink>.
          </li>
          <li>
            В поисковой строке набрать текст: «Электронный дневник» и выбрать услугу «Предоставление информации о
            текущей успеваемости обучающегося, ведение электронного дневника и электронного журнала успеваемости».
          </li>
          <li>В отобразившемся окне нажать кнопку «ОФОРМИТЬ ЗАЯВЛЕНИЕ» в блоке «Электронное заявление».</li>
          <li>
            При нажатии кнопки «ОФОРМИТЬ ЗАЯВЛЕНИЕ» осуществляется открытие окна авторизации портала. Для получения
            услуги необходимо нажать кнопку «Войти через ЕСИА» и в появившемся окне ввести данные учетной записи портала
            госуслуг.
          </li>
          <li>
            Отобразится форма согласия. Для продолжения необходимо ознакомиться со всеми пунктами, подтвердить свое
            согласие и факт ознакомления с описанными сведениями, нажать кнопку «Далее».
          </li>
          <li>
            На следующем шаге необходимо выбрать муниципальное образование и наименование образовательной организации.
            Нажать кнопку «Далее».
          </li>
          <li>В отобразившейся форме необходимо указать информацию об обучающемся. Нажать кнопку «Далее».</li>
          <li>
            Далее необходимо внести сведения о заявителе. Сведения о документе, удостоверяющем личность подгружаются
            автоматически. Заполнить сведения о контактной информации. Нажать кнопку «Далее».
          </li>
          <li>
            В отобразившейся форме необходимо указать информацию о документе, подтверждающем факт рождения ребенка.
            Нажать кнопку «Далее».
          </li>
          <li>
            Откроется предпросмотр заполненного заявления. Необходимо внимательно проверить корректность указанных
            данных и нажать кнопку «Отправить». В случае необходимости, вернуться к предыдущим шагам путем нажатия
            кнопки «Назад».
          </li>
          <li>Отобразится сообщение.</li>
        </ol>
      </div>
      <div>
        <h3 style={{ color: 'red' }}>УВАЖАЕМЫЕ РОДИТЕЛИ БУДУЩИХ ПЕРВОКЛАССНИКОВ!</h3>
        <p>
          Начало приема заявлений в первый класс посредством РПГУ на 2021/2022 учебный год для граждан, проживающих на
          закрепленной территории - <strong>с 1 апреля по 30 июня 2021 г</strong>.
        </p>
        <p>
          Начало приема заявлений в первый класс посредством РПГУ на 2021/2022 учебный год для граждан, не проживающих
          на закрепленной территории (при наличии свободных мест) - <strong>с 6 июля по 5 сентября 2021 г</strong>.
        </p>
      </div>
    </Grid>
  </Layout>
)

export default FirstGrades
