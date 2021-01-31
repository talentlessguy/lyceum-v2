import React from 'react'
import { table } from '../../styles/table.module.css'
import ExternalLink from '../ExternalLink'

const Schedule = () => (
  <table className={table}>
    <thead>
      <tr>
        <th>Предметы</th>
        <th>Дата проведения</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>Духовное краеведение Подмосковья</p>
        </td>
        <td>
          <p>14.09.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Астрономия</p>
        </td>
        <td>
          <p>17.09</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Литература</p>
        </td>
        <td>
          <p>19.09.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Экология</p>
        </td>
        <td>
          <p>21.09.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>История</p>
        </td>
        <td>
          <p>24.09</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Химия</p>
        </td>
        <td>
          <p>26.09.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Биология</p>
        </td>
        <td>
          <p>28.09.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Иностранные языки</p>
        </td>
        <td>
          <p>1.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Русский язык</p>
        </td>
        <td>
          <p>3.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Технология</p>
        </td>
        <td>
          <p>5.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>География</p>
        </td>
        <td>
          <p>8.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Обществознание</p>
        </td>
        <td>
          <p>10.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Математика</p>
        </td>
        <td>
          <p>12.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Физическая культура</p>
        </td>
        <td>
          <p>15.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Право</p>
        </td>
        <td>
          <p>16.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Информатика</p>
        </td>
        <td>
          <p>17.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Основы безопасности жизнедеятельности</p>
        </td>
        <td>
          <p>18.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Искусство (мировая художественная культура)</p>
        </td>
        <td>
          <p>19.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Физика</p>
        </td>
        <td>
          <p>24.10.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Основы православной культуры</p>
        </td>
        <td>
          <p>
            По индивидуальной регистрации на сайте:{' '}
            <ExternalLink href="http://www.pravolimp.ru/">www.pravolimp.ru</ExternalLink>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
)

export default Schedule
