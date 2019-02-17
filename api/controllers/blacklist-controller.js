/**
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const blacklistBO = require('../core/business-operation/blacklist-bo'),
  transformer = require('../helpers/transformers/docTransformer'),
  logger = require('../helpers/utils/logger').accesslog;

const controller = async (req, res) => {
  logger.info('blacklistController')
  try {
    const doc = transformer.onlyNumbers(req.headers.doc),
      result = await blacklistBO.updateStatus(doc)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  controller
}