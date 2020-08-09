import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Results20172018() {
  return (
    <Layout>
      <p>
        <Link href="/activity">
          <a>{'<-'} Назад</a>
        </Link>
        <p>
          <strong>Успеваемость – 99,6%, качество знаний – 64,15%. Это соответствует статусу лицея.</strong>
        </p>
        Учебные результаты за 2017-2018 учебный год
      </p>
      <table border="1" cellPadding="10px">
        <tbody>
          <tr>
            <td rowspan="2">
              &nbsp;<strong>Критерии</strong>
            </td>
            <td colspan="5">
              <p>
                <strong>Классы</strong>
              </p>
            </td>
            <td rowspan="2">
              <p>
                <strong>Итого</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>1-4</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>5-8</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>9</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>10</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>11</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Процент успеваемости (УО)</p>
              <p>(не имеют оценки «2»)</p>
            </td>
            <td>
              <p>100</p>
            </td>
            <td>
              <p>100</p>
            </td>
            <td>
              <p>98,2</p>
            </td>
            <td>
              <p>98,1</p>
            </td>
            <td>
              <p>100</p>
            </td>
            <td>
              <p>99,6</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Процент качества знаний (КО)</p>
              <p>(имеют только «4» и «5»)</p>
            </td>
            <td>
              <p>82,9</p>
            </td>
            <td>
              <p>57</p>
            </td>
            <td>
              <p>52,6</p>
            </td>
            <td>
              <p>46,2</p>
            </td>
            <td>
              <p>56,8</p>
            </td>
            <td>
              <p>64,15</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Медаль «За особые успехи в учении»</p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>9</p>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <p>Аттестат особого образца</p>
              <p>(9 класс)</p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <p>4</p>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <p>Отличники</p>
            </td>
            <td>
              <p>41</p>
            </td>
            <td>
              <p>31</p>
            </td>
            <td>
              <p>5</p>
            </td>
            <td>
              <p>10</p>
            </td>
            <td>
              <p>8</p>
            </td>
            <td>
              <p>95</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>В сравнении с 2016-2017 учебным годом произошли изменения к лучшему.</p>
      <p>&nbsp;</p>
      <table border="1" cellPadding="10px">
        <tbody>
          <tr>
            <td>
              <p>
                <strong>Критерии</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>2016-2017</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>2017-2018</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>Динамика</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Качество знаний по ОУ (%)</p>
            </td>
            <td>
              <p>60,34</p>
            </td>
            <td>
              <p>64,15</p>
            </td>
            <td>
              <p>+ 3,81</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>1-4 классы</p>
            </td>
            <td>
              <p>75,6</p>
            </td>
            <td>
              <p>82,9</p>
            </td>
            <td>
              <p>+ 7,3</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>9 классы</p>
            </td>
            <td>
              <p>49,18</p>
            </td>
            <td>
              <p>52,6</p>
            </td>
            <td>
              <p>+ 3,42</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>10 классы</p>
            </td>
            <td>
              <p>44,44</p>
            </td>
            <td>
              <p>46,2</p>
            </td>
            <td>
              <p>+ 1,8</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>11 классы</p>
            </td>
            <td>
              <p>38,7</p>
            </td>
            <td>
              <p>56,8</p>
            </td>
            <td>
              <p>+ 18,1</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Количество отличников</p>
            </td>
            <td>
              <p>90</p>
            </td>
            <td>
              <p>95</p>
            </td>
            <td>
              <p>+ 5</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Количество аттестатов особого образца (9 класс)</p>
            </td>
            <td>
              <p>8</p>
            </td>
            <td>
              <p>4</p>
            </td>
            <td>
              <p>- 4</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Количество золотых медалистов (11 класс)</p>
            </td>
            <td>
              <p>5</p>
            </td>
            <td>
              <p>9</p>
            </td>
            <td>
              <p>+ 4</p>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}
