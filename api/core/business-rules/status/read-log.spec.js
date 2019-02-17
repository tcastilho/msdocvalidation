const readLog = require('./read-log');

describe('Test ReadLog BusinessRule', () => {
  describe('lines()', () => {

    it ('Should return a object', async (done) => {
      const result = await readLog.lines()
      expect(typeof result).toBe('object')
      done()
    })

  })
})