/**
 * @description Get the necessary informations to the status
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const log = require('../business-rules/status/read-log'),
  blacklistCount = require('')

const status = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessCount = await log.lines();

      const resultObj = {
        uptime: process.uptime(),
        access: accessCount,
        blacklist: blacklistCount
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
