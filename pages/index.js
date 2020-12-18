import React from 'react'
import { grid, sidebar, main, feed, sidebar_right } from '../styles/layout.module.css'
import { slide_container, box } from '../styles/slider.module.css'
import Slideshow from '../components/Slideshow'
import Post from '../components/Post'
import Layout from '../components/Layout'
import { request } from '../lib/cms'

const Index = ({ allPosts }) => (
  <>
    <div className={slide_container}>
      <Slideshow />
      <div className={box}>
        <h1>МБОУ Лицей №2</h1>
        <span>муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область</span>
      </div>
    </div>

    <Layout>
      <h1>Новости</h1>
      <div className={feed}>
        {allPosts.map(({ content }) => (
          <Post heading={content[0].heading} images={content[0].pictures.map((p) => p.url)} text={content[0].text} />
        ))}
      </div>
    </Layout>
  </>
)

const GET_ALL_POSTS = /* GraphQL */ `
  query IndexPage($limit: IntType) {
    allPosts(first: $limit, orderBy: createdAt_ASC) {
      content {
        pictures {
          url
        }
        text
        heading
      }
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: GET_ALL_POSTS,
    variables: { limit: 10 }
  })
  return {
    props: { ...data }
  }
}

export default Index
