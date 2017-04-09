import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'

const IdeaType = new GraphQLObjectType({
  name: 'Idea',
  fields: {
    idea: { type: GraphQLString }
  }
})

export const IdeaSchemaFactory = (ideaService) => ({
  name: 'IdeaQuery',
  description: 'What do you think',
  type: new GraphQLList(IdeaType),
  args: {},
  resolve (_, args, ast) { // eslint-disable-line no-unused-vars
    return ideaService.sayHello()
  }
})
