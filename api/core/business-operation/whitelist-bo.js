/**
 * @description Get the necessary informations to the status
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const status = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve()
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  status
}
