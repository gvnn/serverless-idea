import stampit from 'stampit'
import graphql from 'graphql'
import schemaFactory from '../query/schema'
import logger from '../logger'

export const GraphQLService = stampit()
  .init((opts) => {
    const schema = schemaFactory()
    opts.instance.schema = schema // eslint-disable-line no-param-reassign
  })
  .methods({
    runQuery (query) {
      return graphql.graphql(this.schema, query)
    }
  })
  .compose(logger)
