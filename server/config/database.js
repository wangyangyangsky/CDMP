const Sequelize = require('sequelize') 

// 工作室服务器环境
// const DATABASE = 'cdmp'
// const USERNAME = 'root'
// const PASSWORD = '123456'
// const DBHOST = '10.55.91.107'

// 本地服务器环境

const DATABASE = 'cdmp'
const USERNAME = 'root'
const PASSWORD = '123456'
const DBHOST = '127.0.0.1'
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: DBHOST,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 10,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
})

module.exports = sequelize
