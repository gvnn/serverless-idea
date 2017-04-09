import stampit from 'stampit'

const isTest = process.env.NODE_ENV = 'test'
const noOp = () => {}

export const logger = stampit({
  methods: {
    log: isTest ? noOp : console.log
  }
})
