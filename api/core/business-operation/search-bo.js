/**
 * @description Send the document to be updated
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const queries = require('../repositories/documentRepository'),
  status = require('../../helpers/enums'),
  Queries = new queries()

const getDocument = (doc) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Queries.findDocument(doc)
      switch (result[0].status) {
        case status.blacklist:
          resolve(status.block)
          break
        case status.whitelist:
          resolve(status.free)
          break
        default:
          resolve(status.nonexistent)
          break
      }
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  getDocument
}
