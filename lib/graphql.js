import { GraphQLService } from './services/graphql'
import { IdeaService } from './services/ideaService'

// there should be an injection here of the database schema into the service (if necessary)
const idea = IdeaService()
const graphql = GraphQLService({ ideaService: idea })

export const graphQlHandler = async (event, context, callback) => {
  console.log('Received event', event)

  let query = null

  // patch to allow queries from GraphiQL
  // like the initial introspectionQuery
  if (event.body && event.body.hasOwnProperty('query')) {
    query = event.body.query.replace('\n', ' ', 'g')
  }

  return graphql.runQuery(query)
    .then((response) => callback(null, response))
    .catch((err) => callback(err))
}
