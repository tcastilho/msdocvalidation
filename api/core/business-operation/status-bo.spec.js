const status = require('./status-bo');

describe('Test Status BusinessOperation', () => {
  describe('status()', () => {
    it ('Should return object', async (done) => {
      const result = await status.status()
      expect(typeof result).toBe('object')
      done()
    })
    
    it ('Should return error', async (done) => {
      try {
        await status.status()
      } catch (err) {
        expect(typeof err).toBe('object')
        done()
      }
    })
  })
})