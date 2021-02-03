import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { request } from '../lib/cms'

type Props = { images: { width: number; height: number; url: string; title: string }[] }

const Achievements = ({ images }: Props) => (
  <Layout>
    <style jsx>
      {`
        .list {
          display: grid;
          gap: 4rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
      `}
    </style>
    <h1>Достижения</h1>
    <p>За годы работы коллектив МБОУ «Лицей №2» достиг высоких результатов деятельности:</p>
    <br />
    <div className="list">
      {images.map(({ url, title, width, height }) => (
        <Post
          key={title}
          images={[
            {
              url,
              width: width,
              height: height
            }
          ]}
          text={title}
          imageProps={{ quality: 60, layout: 'responsive' }}
        />
      ))}
    </div>
  </Layout>
)

const GET_REWARDS = /* GraphQL */ `
  query {
    allUploads(filter: { tags: { eq: "rewards" } }) {
      width
      height
      url
      title
    }
  }
`

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await request<{
    allUploads: {
      width: number
      height: number
      url: string
      title: string
    }[]
  }>({ query: GET_REWARDS, variables: {} })
  return { props: { images: data.allUploads } }
}

export default Achievements
