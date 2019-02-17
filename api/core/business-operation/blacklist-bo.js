/**
 * @description Get the necessary informations to the status
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const queries = require('../repositories/documentRepository')
  Queries = new queries()

const updateStatus = (doc) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Queries.updateBlacklisted(doc)
      resolve(true)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  updateStatus
}
