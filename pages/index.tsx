import React, { useMemo } from 'react'
import { vertCenter } from '../styles/layout.module.css'
import * as styles from '../styles/slider.module.css'
import Slideshow from '../components/Slideshow'
import Post, { PostProps } from '../components/Post'
import Layout from '../components/Layout'
import { request } from '../lib/cms'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import PagesCounter from 'rc-pagination'
import Grid from '../components/Grid'

const parseQ = (x: string | string[]) => parseInt(Array.isArray(x) ? x[0] : x, 10)

const Pagination = ({ count }: { count: number }) => {
  const router = useRouter()

  const current = useMemo(() => parseQ(router.query.page) || 1, [])

  return (
    <div
      className={vertCenter}
      style={{
        margin: '2rem 0'
      }}
    >
      <strong style={{ marginBottom: '0.5rem' }}>
        Страница {current} из {Math.floor(count / 5) || 1}
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

const PostLink = ({ content, id }: { id: number; content: PostProps }) => {
  const router = useRouter()

  return (
    <Post
      onMouseOver={(e) => {
        e.currentTarget.style.cursor = 'pointer'
        e.currentTarget.style.boxShadow = '0px 10px 60px rgba(0, 0, 0, 0.13)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
      onClick={() => {
        router.push(`/post/${id}`)
      }}
      key={content[0].heading}
      heading={content[0].heading}
      pictures={content[0].pictures}
      text={content[0].text}
    />
  )
}

const Index = ({
  allPosts,
  _allPostsMeta
}: {
  allPosts: {
    content: PostProps
    id: number
  }[]
  _allPostsMeta: {
    count: number
  }
}) => (
  <>
    {/* @ts-ignore */}
    <div className={styles.slider_container}>
      <Slideshow />
      <div className={styles.overlay_container}>
        <div className={styles.box}>
          <h1>МБОУ Лицей №2</h1>
          <span>
            муниципальное бюджетное общеобразовательное учреждение <br />
            г. Протвино, Московская область
          </span>
        </div>
      </div>
    </div>

    <Layout>
      <h1
        id="news"
        style={{
          scrollMarginTop: '100px'
        }}
      >
        Новости
      </h1>

      <Grid>
        {allPosts.map(({ content, id }) => (
          <PostLink key={id} {...{ content, id }} />
        ))}
      </Grid>
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
      id
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
