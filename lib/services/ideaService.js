import stampit from 'stampit'
import { logger } from '../logger'

export const IdeaService = stampit()
  .methods({
    sayHello () {
      return [{ idea: "Hey, I've got an idea" }]
    }
  })
  .compose(logger)
