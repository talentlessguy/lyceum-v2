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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
      `}
    </style>
    <h2>За годы работы коллектив МБОУ «Лицей №2» достиг высоких результатов деятельности</h2>
    <div className="list">
      {images.map(({ url, title, width, height }) => (
        <Post
          key={title}
          images={[
            {
              url,
              width,
              height
            }
          ]}
          text={title}
          imageProps={{ objectFit: 'contain', quality: 60 }}
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
