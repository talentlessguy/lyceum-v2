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
        <p>
          <ExternalLink href="/images/Document/1klass/prikaz_minobrnauki_32_%2022_01_20141.pdf">
            Приказ Министерства образования и науки Российской Федерации (Минобрнауки России) от 22 января 2014 г. N 32
            г. Москва &quot;Об утверждении Порядка приема граждан на обучение по образовательным программам начального
            общего, основного общего и среднего общего образования&quot;
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="http://liceym2.ru/images/Document/1klass/pismo_momo_4456_11m.pdf">
            Письмо Министерства Образования Московской области от 05.05.2014г. &quot;О порядке приёма в
            общеобразовательные организации в 2014 году&quot;
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="http://liceym2.ru/images/Document/1klass/Postanovlenie27_19012018pril.pdf">
            ПОСТАНОВЛЕНИЕ Администрации города Протвино от 28.01.2019г. №37 &quot;Об утверждении Административного
            регламента (типового) предоставления услуги, оказываемой муниципальной общеобразовательной организацией в
            городском округе Протвино, по приему на обучение по образовательным программам начального общего, основного
            общего и среднего общего образования&quot;(смотреть .pdf)
          </ExternalLink>
        </p>
        <h2
          style={{
            textTransform: 'capitalize'
          }}
        >
          СПИСОК ТРЕБУЕМЫХ ДОКУМЕНТОВ ДЛЯ ПРИЁМА в ОУ
        </h2>
        <p>
          Родители (законные представители) детей, проживающих на закрепленной территории, для зачисления ребенка в
          первый класс дополнительно предъявляют оригинал свидетельства о рождении ребенка или документ, подтверждающий
          родство заявителя, свидетельство о регистрации ребенка по месту жительства или по месту пребывания на
          закрепленной территории или документ, содержащий сведения о регистрации ребенка по месту жительства или по
          месту пребывания на закрепленной территории;
        </p>
        <p>
          Родители (законные представители) детей, не проживающих на закрепленной территории, дополнительно предъявляют
          свидетельство о рождении ребенка.
        </p>
        <p>
          Родители (законные представители) детей, являющихся иностранными гражданами или лицами без гражданства,
          дополнительно предъявляют документ, подтверждающий родство заявителя (или законность представления прав
          ребенка), и документ, подтверждающий право заявителя на пребывание в Российской Федерации.
        </p>
        <p>
          Иностранные граждане и лица без гражданства все документы представляют на русском языке или вместе с
          заверенным в установленном порядке переводом на русский язык.
        </p>
        <p>Копии предъявляемых при приеме документов хранятся в ОУ на время обучения ребенка.</p>
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
        <p>
          <ExternalLink href="http://liceym2.ru/images/Document/1klass/Postanovlenie27_19012018pril.pdf">
            По ПОСТАНОВЛЕНИЮ Администрации города Протвино от 19.01.2018г. №27
          </ExternalLink>{' '}
          &quot;Об утверждении Административного регламента предоставления услуги, оказываемой общеобразовательной
          организацией, по приему на обучение по образовательным программам начального общего, основного общего и
          среднего общего образования&quot;
        </p>
        <p>
          <ExternalLink href="http://liceym2.ru/images/Document/1klass/832.pdf">
            Постановление №832 от 19.12.2018г. &quot;О внесении изменений в постановление Администрации города Протвино
            №80 от 10.02.2018г. &quot;О закреплении территорий за муниципальными бюджетными общеоразовательными
            учреждениями города Протвино&quot;&quot;
          </ExternalLink>
        </p>
        <p>за МБОУ &quot;Лицей №2&quot; закреплены территории г. Протвино, улицы:</p>
        <ul>
          <li>Ленина, дома №№ 12,14,18,20,13«а»,13»в», 13»г»</li>
          <li> Гагарина, дома №№1,2,3,4,5,6,8,10,12</li>
          <li>Центральный проезд, дома №№ 1,3,5</li>
          <li> Сосновый проезд, дома №№1,3,5</li>
          <li>Московская, дома №№ 3,5, 9,11,13</li>
          <li>Школьная, дом № 18,20. </li>
        </ul>
        <p>
          <ExternalLink href="http://liceym2.ru/images/Document/1klass/P_37_2019_Protvino.pdf">
            ПОСТАНОВЛЕНИЕ Администрации города Протвино от 28.01.2019г. №37
          </ExternalLink>{' '}
          &quot;Об утверждении Административного регламента (типового) предоставления услуги, оказываемой муниципальной
          общеобразовательной организацией в городском округе Протвино, по приему на обучение по образовательным
          программам начального общего, основного общего и среднего общего образования&quot;.
        </p>
        <p>
          С 06.07.2021 года при наличии свободных мест рассматриваются все поданные заявления без учета территории. Для
          оформления ребенка в 1-й класс нашей школы необходимо заполнить заявление на{' '}
          <ExternalLink
            href="https://uslugi.mosreg.ru/"
            style={{
              textTransform: 'lowercase'
            }}
          >
            ПОРТАЛЕ ГОСУДАРСТВЕННЫХ И МУНИЦИПАЛЬНЫХ УСЛУГ МОСКОВСКОЙ ОБЛАСТИ
          </ExternalLink>
          , далее <strong>ЗАПИСЬ В ПЕРВЫЙ КЛАСС</strong>.
        </p>
        <p>
          По вопросам зачисления в 1 класс обращаться к <strong>Рюмкиной Елене Александровне</strong>, заместителю
          директора МБОУ &quot;Лицей №2&quot; по УВР (рабочий телефон <strong>74-47-29</strong>).
        </p>
        <p>
          Место нахождения: городской округ Протвино, ул. Гагарина, д.7 Почтовый адрес: 142280, городской округ
          Протвино, ул. Гагарина, д.7
        </p>
        <h3>График работы</h3>
        <ul>
          <li>Понедельник: с 8-30 до 17-00 (перерыв с 13-00 до 13-30)</li>
          <li>Вторник: с 8-30 до 17-00 (перерыв с 13-00 до 13-30)</li>
          <li>Среда: с 8-30 до 17-00 (перерыв с 13-00 до 13-30)</li>
          <li>Четверг: с 8-30 до 17-00 (перерыв с 13-00 до 13-30)</li>
          <li>Пятница: с 8-30 до 17-00 (перерыв с 13-00 до 13-30)</li>
          <li>Суббота: выходной день</li>
          <li>Воскресенье: выходной день</li>
        </ul>
      </div>
    </Grid>
  </Layout>
)

export default FirstGrades
