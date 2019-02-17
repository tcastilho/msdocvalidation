const blacklist = require('./blacklist-bo');

describe('Test Blacklist BusinessOperation', () => {
  describe('updateStatus()', () => {
    it ('Should return true', async (done) => {
      const num = 12345678900
      const result = await blacklist.updateStatus(num)
      expect(result).toEqual(true)
      done()
    })
    
    it ('Should return error', async (done) => {
      try {
        await blacklist.updateStatus()
      } catch (err) {
        expect(err).toEqual('Insira um número para o documento')
        done()
      }
    })
  })
})