import graphQLService from './services/graphql'

const graphql = graphQLService({})

export const handler = async (event, context, callback) => {
  console.log('Received event', event)

  return graphql.runQuery(event.body.query)
    .then((response) => callback(null, response))
    .catch((err) => callback(err))
}
