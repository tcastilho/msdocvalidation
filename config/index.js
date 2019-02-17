/**
 * @description Define an embbeded database to the project
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const Datastore = require('nedb')

module.exports = new Datastore({ filename: '../database/castilho.db', autoload: true })