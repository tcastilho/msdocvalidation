/**
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const statusBO = require('../core/business-operation/status-bo'),
  logger = require('../helpers/utils/logger').accesslog;

const controller = async (req, res) => {
  logger.info('statusController')
  try {
    const result = await statusBO.status()
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  controller
}