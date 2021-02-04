import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import { request } from '../../lib/cms'

type Props = {
  content: {
    text: string
    heading: string
  }
}

const PostPage = ({ content }: Props) => {
  return (
    <Layout>
      <Post
        text={content[0].text}
        heading={{
          level: 1,
          text: content[0].heading
        }}
      />
    </Layout>
  )
}

const GET_POST = /* GraphQL */ `
  query GetPosts($id: ItemIdFilter) {
    post(filter: { id: $id }) {
      id
      content {
        text
        heading
      }
    }
  }
`

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params.id) {
    return {
      notFound: true
    }
  }

  const id = { eq: parseInt(typeof params.id === 'string' ? params.id : params.id[0], 10) }

  const data = await request<{ post: Props['content'] }>({
    query: GET_POST,
    variables: { id }
  })

  return {
    props: data.post
  }
}

export default PostPage
