const search = require('./search-bo'),
  blacklist = require('./blacklist-bo'),
  status = require('../../helpers/enums');

describe('Test Search BusinessOperation', () => {
  describe('getDocument()', () => {
    it ('Should return true', async (done) => {
      const num = 12345678900
      await blacklist.updateStatus(num)
      const result = await search.getDocument(num)
      expect(result).toEqual(status.block)
      done()
    })
    
    it ('Should return error', async (done) => {
      try {
        await search.getDocument()
      } catch (err) {
        expect(err.key).toEqual(status.error.key)
        done()
      }
    })
  })
})