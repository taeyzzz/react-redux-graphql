import { GraphQLClient } from 'graphql-request'

import { storage } from '../index'

const GRAPHQL_ENDPOINT = "http://localhost:4000/graphql"

export default async (query, variable) => {
  let headers = {}
  const token = storage.get("user-token")
  if(token){
    headers = {
      ...headers,
      Authorization: token
    }
  }
  const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers
  })
  return graphQLClient.request(query, variable)
}
