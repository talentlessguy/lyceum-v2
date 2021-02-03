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
              <span>
                <strong>I триместр</strong>
              </span>
            </td>
            <td>
              <span>
                <strong>II триместр</strong>
              </span>
            </td>
            <td>
              <span>
                <strong>III триместр</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <strong>
                  &nbsp;
                  <span>c 01.09 2020 по 22.11.2020</span>
                </strong>
              </span>
            </td>
            <td>
              <span>
                <strong>
                  &nbsp;
                  <span>с 23.11.2020 по 28.02.2021</span>
                </strong>
              </span>
            </td>
            <td>
              <span>
                <strong>
                  &nbsp;
                  <span>с 01.03.2021 по 31.05.2021</span>
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>1-ый модуль –</strong>{' '}
                </span>
              </p>
              <p>
                <span>с 01.09.2020 по 04.10.2020;</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <strong>3-й модуль -</strong>{' '}
                </span>
              </p>
              <p>
                <span>с 23.11.2020 по 31.12.2020;</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <strong>5-й модуль&nbsp; -</strong>{' '}
                </span>
              </p>
              <p>
                <span>с 01.03.2021 по 11.04.2021;</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>2-й модуль -</strong>{' '}
                </span>
              </p>
              <p>
                <span>с 12.10.2020 по 15.11.2020;</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <strong>4-й модуль -</strong>{' '}
                </span>
              </p>
              <p>
                <span>с 11.01. 2021 по 21.02.2021;</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <strong>6-й модуль -</strong>{' '}
                </span>
              </p>
              <p>
                <span>с 19.04.2021 по 31.05.2021 (2-8, 10 классы);</span>
              </p>
              <p>
                <span>
                  <span>с 19.04.2021 по 23.05.2021 (1, 9, 11 классы).</span>
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default Schedule
