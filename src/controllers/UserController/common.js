const Sequelize = require('sequelize');
const db = require('../../database');

const UserInfo = require('../../models/user_info')(db, Sequelize);
const Department= require('../../models/department_info')(db, Sequelize);




module.exports = UserInfo,Department;