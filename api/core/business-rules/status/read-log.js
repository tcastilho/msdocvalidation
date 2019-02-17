/**
 * @description Read Access log file and return the number of lines
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const fs = require('fs');

const lines = () => {
  return new Promise(resolve => {
    const data = await fs.readFileSync('../../../access.log'),
    res = data.toString().split('\n').length,
    result = res - 1
    resolve(result)
  })
}

module.exports = lines