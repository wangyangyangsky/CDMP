/**
 * 用户表
 * @param { [object] } sequelize
 * @param { [object] } DataTypes
 * foreign_key { userType }  每个用户含有一个用户分类的外键
 */

// let config = require('../../nuxt.config.js');  // 这边暂时待定
// let bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, // 用户登陆所需的账号
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '123456',
            //初始密码默认是账号
            // set(password) {
            //     //bcrypt.genSaltSync(8)
            //     this.setDataValue('password', bcrypt.hashSync(password, "saw", null));
            // }
        }, // 用户登陆所需的密码（暂时没有做加密处理，后期会补上？）
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }, // 用户名称
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        }, // 用户手机
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }, // 用户邮箱
        isUse: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }, // 此条记录是否可用
        //默认添加 createAt 和 updateAt 两个字段 
    },{
        tabelName: 'user'
    }
  )
}