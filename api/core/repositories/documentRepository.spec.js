const Queries = require('./documentRepository'),
  queries = new Queries();

describe('Test Document Repository', () => {
  describe('queries.updateBlacklisted()', () => {
    it ('Should return number', async (done) => {
      const num = 12345678900
      const result = await queries.updateBlacklisted(num)
      expect(result).toEqual(1)
      done()
    })
  })
  
  describe('queries.findDocument()', () => {
    it ('Should return array', async (done) => {
      const num = 12345678900
      const result = await queries.findDocument(num)
      expect(typeof result).toBe('array')
      done()
    })
  })

  describe('queries.updateWhitelisted()', () => {
    it ('Should return number', async (done) => {
      const num = 12345678900
      const result = await queries.updateWhitelisted(num)
      expect(result).toEqual(1)
      done()
    })
  })

  describe('queries.countBlacklisted()', () => {
    it ('Should return number', async (done) => {
      const result = await queries.countBlacklisted()
      expect(typeof result).toBe('number')
      done()
    })
  })
})