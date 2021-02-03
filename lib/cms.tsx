import { GraphQLClient } from 'graphql-request'

export function request<T = unknown>({
  query,
  variables,
  preview
}: {
  query: string
  variables?: Record<string, unknown>
  preview?: boolean
}) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  })
  return client.request<T>(query, variables)
}
