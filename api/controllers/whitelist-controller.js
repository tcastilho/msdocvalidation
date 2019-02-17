/**
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const whitelistBO = require('../core/business-operation/whitelist-bo');

const controller = async (req, res) => {
  try {
    const result = await whitelistBO.staus()
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  controller
}