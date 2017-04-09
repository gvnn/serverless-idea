import stampit from 'stampit'
import { graphql } from 'graphql'
import { SchemaFactory } from '../query/schema'
import { logger } from '../logger'

export const GraphQLService = stampit()
  .init((opts, {instance}) => {
    // checking options
    if (!opts.ideaService) {
      throw new Error('ideaService is required')
    }
    // Injecting the service into the schema
    const schema = SchemaFactory(opts.ideaService)
    // adding the schema
    instance.schema = schema // eslint-disable-line no-param-reassign
  })
  .methods({
    runQuery (query) {
      return graphql(this.schema, query)
    }
  })
  .compose(logger)
