import React from 'react'
import Layout from '../components/Layout'

const Summary = () => (
  <Layout>
    <style jsx>
      {`
        line-height: 1.5;
        table {
          display: table;
          width: 100%;
        }
        h1 {
          text-align: center;
        }
        strong {
          display: block;
        }
        tr {
          text-align: left;
        }
      `}
    </style>
    <h1>Сведения о МБОУ "Лицей №2"</h1>
    <table border="1" cellPadding="10px">
      <tbody>
        <tr>
          <th>Полное наименование в соответствии с лицензией</th>
          <td>
            <p>муниципальное бюджетное общеобразовательное учреждение «Лицей №2»</p>
            <p>преподавание ведётся на русском языке</p>
            <p>Директор высшей квалификационной категории Иващенко Людмила Ивановна</p>
            <p>тел.8(4967)744701</p>
          </td>
        </tr>
        <tr>
          <th>Учредитель МБОУ "Лицей №2"</th>
          <td>
            <p>
              Администрация города Протвино (<a href="http://www.protvino.ru/">http://www.protvino.ru/</a>)
            </p>
            <p>Адрес: 142280, Московская область, г. Протвино, ул. Ленина д.5</p>
            <strong>ВРИО руководителя Администрации Бабыкин Кирилл Александрович</strong>
            <p>Телефон: 8 (4967) 34-17-80</p>
            <p>
              Электронная почта: <a href="mailto:protvino@mosreg.ru">protvino@mosreg.ru</a>
            </p>
            <p>Адрес: Администрация города, ул. Ленина, д. 5, каб 305</p>
            <strong>Отдел образования</strong>
            <strong>Начальник отдела – Анисинкина Наталья Андреевна</strong>
            <p>ком. 401-3, тел. 8(4967)34-16-65</p>
            <p>прием: среда с 16-00</p>
            <strong>Специалисты отдела:</strong>
            ком. 401-3, тел. 8(4967)34-16-65 <br /> ком. 401-4, тел. 8(4967)74-69-26, 74-49-39 <br /> ком. 401-2, тел. 8(4967)74-97-40, 8(4967)74-95-89
          </td>
        </tr>
        <tr>
          <th>Дата создания учреждения</th>
          <td>01 сентября 1971г.</td>
        </tr>
        <tr>
          <th>Специализация</th>
          <td>общее образование</td>
        </tr>
        <tr>
          <th>Адрес</th>
          <td>142280, Московская область, г. Протвино, ул. Гагарина, д.7</td>
        </tr>
        <tr>
          <th>Сайт</th>
          <td>
            <a href="https://lyceum-v2.now.sh">lyceum-v2.now.sh</a>
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <a href="mailto:liceum_2@mail.ru">liceum_2@mail.ru</a>
          </td>
        </tr>
        <tr>
          <th>Телефон</th>
          <td>8(4967)744701 (приёмная директора)</td>
        </tr>
        <tr>
          <th>Часы работы</th>
          <td>Пн., вт., ср., чт., пт.: 8-00 - 17-00</td>
        </tr>
        <tr>
          <th>Режим и график работы</th>
          <td>триместры</td>
        </tr>
        <tr>
          <th>Количество смен</th>
          <td>1 смена</td>
        </tr>
      </tbody>
    </table>
  </Layout>
)

export default Summary
