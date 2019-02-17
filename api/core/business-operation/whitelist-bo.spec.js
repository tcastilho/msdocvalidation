const whitelist = require('./whitelist-bo');

describe('Test Whitelist BusinessOperation', () => {
  describe('updateStatus()', () => {
    it ('Should return true', async (done) => {
      const num = 12345678900
      const result = await whitelist.updateStatus(num)
      expect(result).toEqual(true)
      done()
    })
    
    it ('Should return error', async (done) => {
      try {
        await whitelist.updateStatus()
      } catch (err) {
        expect(err).toEqual('Insira um número para o documento')
        done()
      }
    })
  })
})