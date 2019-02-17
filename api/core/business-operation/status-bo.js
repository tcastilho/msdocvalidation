/**
 * @description Get the necessary informations to the status
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const log = require('../business-rules/status/read-log'),
  queries = require('../repositories/documentRepository'),
  Queries = new queries()

const status = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessCount = await log.lines(),
        countBlacklisted = await Queries.countBlacklisted(),
        resultObj = {
          uptime: process.uptime(),
          access: accessCount,
          blacklist: countBlacklisted
        }
      resolve(resultObj)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  status
}
