import { GraphQLClient } from 'graphql-request'

const TOKEN = '0dd59ff5596206279ba465c27b4670'

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
      authorization: `Bearer ${TOKEN}`
    },
    cache: 'force-cache'
  })
  return client.request<T>(query, variables)
}
