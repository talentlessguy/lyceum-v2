import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Activity() {
  return (
    <Layout>
      <ul style={{ lineHeight: 2 }}>
        <li>
          <Link href="/activity/gia-2017-2018">Результаты государственной итоговой аттестации за 2017-2018 учебный год</Link>
        </li>
        <li>
          <a href="/activity/vpr-2017-2018">Всероссийские проверочные работы 2017-2018</a>
        </li>
        <li>
          <a href="/activity/results-2017-2018">Результаты учебной деятельность за 2017-2018 учебный год</a>
        </li>
      </ul>
    </Layout>
  )
}
