import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { IdeaSchemaFactory } from './ideaSchema'

export const SchemaFactory = (ideaService) => {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Root',
      description: 'Root of the Schema',
      fields: {
        idea: IdeaSchemaFactory(ideaService)
      }
    })
  })
}
