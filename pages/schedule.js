import React from 'react'
import Layout from '../components/Layout'
import { table } from '../styles/table.module.css'

const Schedule = () => {
  return (
    <Layout>
      <h1>Режим работы</h1>
      <h2>Начало учебного года</h2>
      <p>1 сентября 2020 года. В этот день проводятся торжественные линейки и классные часы.</p>
      <h2>Окончание учебного года</h2>
      <ul>
        <li>1 классы - 25 мая 2021 года;</li>
        <li>2-8, 10 классы – 31 мая 2021 года;</li>
        <li>9, 11 классы - 23 мая 2021 года.</li>
      </ul>
      <h2>Количество учебных недель в году</h2>
      <ul>
        <li>
          1 классы<strong> – </strong>33 недели;
        </li>
        <li>2-8, 10 классы - 34 недель;</li>
        <li>9,11 классы – 33 недели.</li>
      </ul>
      <p>Учебный год делится на триместры (три триместра). Каждый триместр содержит два модуля (6 модулей).</p>
      <table className={table}>
        <tbody>
          <tr>
            <td>
              <strong>I триместр</strong>
            </td>
            <td>
              <strong>II триместр</strong>
            </td>
            <td>
              <strong>III триместр</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>&nbsp; c 01.09 2020 по 22.11.2020</strong>
            </td>
            <td>
              <strong>&nbsp; с 23.11.2020 по 28.02.2021</strong>
            </td>
            <td>
              <strong>&nbsp; с 01.03.2021 по 31.05.2021</strong>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>1-ый модуль –</strong>{' '}
              </p>
              <p>с 01.09.2020 по 04.10.2020;</p>
            </td>
            <td>
              <p>
                <strong>3-й модуль -</strong>{' '}
              </p>
              <p>с 23.11.2020 по 31.12.2020;</p>
            </td>
            <td>
              <p>
                <strong>5-й модуль&nbsp; -</strong>{' '}
              </p>
              <p>с 01.03.2021 по 11.04.2021;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>2-й модуль -</strong>{' '}
              </p>
              <p>с 12.10.2020 по 15.11.2020;</p>
            </td>
            <td>
              <p>
                <strong>4-й модуль -</strong>{' '}
              </p>
              <p>с 11.01. 2021 по 21.02.2021;</p>
            </td>
            <td>
              <p>
                <strong>6-й модуль -</strong>{' '}
              </p>
              <p>с 19.04.2021 по 31.05.2021 (2-8, 10 классы);</p>
              <p>с 19.04.2021 по 23.05.2021 (1, 9, 11 классы).</p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h2>Количество учебных дней в неделю</h2>
      <ul>
        <li>
          <span>начальное общее образование - 1-е классы – 5 дней; 2-4 классы – 5 дней;</span>
        </li>
        <li>
          <span>основное общее образование – 5 дней (5-9 классы);</span>
        </li>
        <li>
          <span>среднее (полное) общее образование – 5 дней (10- 11 классы).</span>
        </li>
      </ul>
      <h2>Форма организации образовательного процесса</h2>
      <table className={table}>
        <tbody>
          <tr>
            <td>
              <span>
                <strong>
                  <span>каникулы осенние:</span>&nbsp;
                </strong>
              </span>
            </td>
            <td>
              <span>
                <strong>
                  <span>каникулы зимние:</span>&nbsp;
                </strong>
              </span>
            </td>
            <td>
              <span>
                <strong>
                  <span>каникулы весенние:</span>
                  &nbsp;
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <span>c 05.10.2020 по 11.10.2020;</span>
              </strong>
            </td>
            <td>
              <strong>c 01.01.2021 по 10.01.2021;</strong>
            </td>
            <td>
              <strong>c 12.04.2021 по 18.04.2021.</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>c 16.11.2020 по 242.11.2020;</strong>
            </td>
            <td>
              <strong>
                <span>c 22.02.2021 по 28.02.2021;</span>
              </strong>
            </td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Начало учебных занятий: </strong>8:30. <strong>Окончание учебных занятий: </strong>16:45.
      </p>
      <h2>Продолжительность урока</h2>
      <p>
        <strong>1 класс</strong>: после 1 урока 15 минут; после 2 урока – 10 минут; после 3 урока -10 минут;
      </p>
      <p>
        <strong>2–4 классы, 5-11 классы</strong>: после 1 урока - 20 минут; после 2, 4 уроков - 25 минут; после 3 урока
        - 10 минут, после 4 урока - 20 минут; 5 урока – 10 минут; после 6 урока - 5 минут.
      </p>
      <h2>Расписание звонков</h2>
      <h3>1 классы</h3>
      <table className={table}>
        <thead>
          <tr>
            <th colSpan={2}>сентябрь-октябрь</th>
            <th colSpan={2}>ноябрь-декабрь</th>
            <th colSpan={2}>январь-май</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>№ урока</td>
            <td>время</td>
            <td>№ урока</td>
            <td>время</td>
            <td>№ урока</td>
            <td>время</td>
          </tr>
          <tr>
            <td>
              <p align="center">1</p>
            </td>
            <td>9:00 - 09:35</td>
            <td>
              <p align="center">
                <span>1</span>
              </p>
            </td>
            <td>
              <p>
                <span>09.00 – 9.35</span>
              </p>
            </td>
            <td>
              <p align="center">
                <span>1</span>
              </p>
            </td>
            <td>
              <p>
                <span>8:30 - 09:15</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p align="center">2</p>
            </td>
            <td>
              <p>
                <span>09:50 - 10:25</span>
              </p>
            </td>
            <td>
              <p align="center">2</p>
            </td>
            <td>09.50 – 10.25</td>
            <td>
              <p align="center">2</p>
            </td>
            <td>
              <p>
                <span>09:25 - 10:10</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p align="center">
                <span>3</span>
              </p>
            </td>
            <td>
              <span>10:35 - 11:10</span>
            </td>
            <td>
              <p align="center">
                <span>3</span>
              </p>
            </td>
            <td>
              <p>
                <span>10.45 – 11.30</span>
              </p>
            </td>
            <td>
              <p align="center">3</p>
            </td>
            <td>10:50 - 11:35</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p align="center">4</p>
            </td>
            <td>
              <p>
                <span>11.40 – 12.25</span>
              </p>
            </td>
            <td>
              <p align="center">
                <span>4</span>
              </p>
            </td>
            <td>
              <p>
                <span>11:45 - 12:30</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <span>&nbsp;</span>
            </td>
            <td>
              <span>&nbsp;</span>
            </td>
            <td>
              <span>&nbsp;</span>
            </td>
            <td>
              <span>&nbsp;</span>
            </td>
            <td>
              <p align="center">
                <span>5</span>
              </p>
            </td>
            <td>12:50 - 13:35</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default Schedule
