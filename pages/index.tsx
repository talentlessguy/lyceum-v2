import React, { useMemo } from 'react'
import { vertCenter, feed } from '../styles/layout.module.css'
import * as styles from '../styles/slider.module.css'
import Slideshow from '../components/Slideshow'
import Post from '../components/Post'
import Layout from '../components/Layout'
import { request } from '../lib/cms'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import PagesCounter from 'rc-pagination'

const parseQ = (x: string | string[]) => parseInt(Array.isArray(x) ? x[0] : x, 10)

const Pagination = ({ count }: { count: number }) => {
  const router = useRouter()

  const current = useMemo(() => parseQ(router.query.page) || 0, [])

  return (
    <div className={vertCenter}>
      <strong style={{ marginBottom: '0.5rem' }}>
        Страница {current} из {Math.floor(count / 5)}
      </strong>

      <PagesCounter
        onChange={(page) => {
          router.push(`/?page=${page}`)
        }}
        total={count}
        pageSize={3}
        current={current}
      />
    </div>
  )
}

const Index = ({
  allPosts,
  _allPostsMeta
}: {
  allPosts: unknown[]
  _allPostsMeta: {
    count: number
  }
}) => (
  <>
    {/* @ts-ignore */}
    <div className={styles.slider_container}>
      <Slideshow />
      <div className={styles.box}>
        <h1>МБОУ Лицей №2</h1>
        <span>муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область</span>
      </div>
      <a className={styles.learnMoreLink} href="#news">
        Новости ↘
      </a>
    </div>

    <Layout id="news">
      <h1>Новости</h1>
      <div className={feed}>
        {allPosts.map(({ content }) => (
          <Post
            key={content[0].heading}
            heading={content[0].heading}
            images={content[0].pictures}
            text={content[0].text}
          />
        ))}
      </div>
      <Pagination count={_allPostsMeta.count} />
    </Layout>
  </>
)

const GET_ALL_POSTS = /* GraphQL */ `
  query IndexPage($limit: IntType, $skip: IntType) {
    allPosts(first: $limit, orderBy: createdAt_ASC, skip: $skip) {
      content {
        pictures {
          url
          height
          width
        }
        text
        heading
      }
    }

    _allPostsMeta {
      count
    }
  }
`

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let vars: {
    limit: number
    skip?: number
  } = {
    limit: 5
  }

  const page = parseQ(query.page) || 1

  vars = { ...vars, skip: page <= 0 ? vars.limit : (page - 1) * vars.limit }

  const data = await request({ query: GET_ALL_POSTS, variables: vars })
  return { props: data }
}

export default Index
