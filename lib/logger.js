import stampit from 'stampit'

const isDev = process.env.NODE_ENV === 'dev'
const noOp = () => {} // could be a call to winston, etc...

export const logger = stampit({
  methods: {
    log: isDev ? console.log : noOp
  }
})
