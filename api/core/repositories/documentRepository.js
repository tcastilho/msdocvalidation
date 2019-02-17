const db = require('../../../config'),
  status = require('../../helpers/enums')

class Queries {

  findDocument = doc => {
    return new Promise((resolve, reject) => {
      db.find({document: doc}, (err, doc) => {
        if (err)
          reject(err)
        resolve(doc)
      })
    })
  }

  updateBlacklisted = doc => {
    return new Promise((resolve, reject) => {
      db.update({
        document: doc
      }, {
        document: doc,
        status: status.blacklist
      }, {
        upsert: true
      }, (err, doc) => {
        if (err)
          reject(err)
        resolve(doc)
      })
    })
  }

  updateWhitelisted = doc => {
    return new Promise((resolve, reject) => {
      db.update({
        document: doc
      }, {
        document: doc,
        status: status.whitelist
      }, {
        upsert: true
      }, (err, doc) => {
        if (err)
          reject(err)
        resolve(doc)
      })
    })
  }

  countBlacklisted = () => {
    return new Promise((resolve, reject) => {
      db.count({status: status.blacklist}, (err, doc) => {
        if (err)
          reject(err)
        resolve(doc)
      })
    })
  }

}

module.exports = Queries