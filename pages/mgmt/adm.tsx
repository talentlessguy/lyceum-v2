import React from 'react'
import Layout from '../../components/Layout'
import { Portrait } from '../../components/Portrait'
import { adm } from '../../lib/data'
import styles from '../../styles/mgmt/adm.module.css'

const Adm = () => (
  <Layout>
    <h1>Руководство</h1>
    <div className={styles.admGrid}>
      {adm.map((item) => (
        <Portrait {...item} key={item.name} />
      ))}
    </div>
  </Layout>
)

export default Adm
