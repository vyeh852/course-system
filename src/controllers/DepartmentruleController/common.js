const Sequelize = require('sequelize');
const db = require('../../database');

 const DepartmentRule= require('../../models/department_rules')(db, Sequelize);//////////////
 const User= require('../../models/user_info')(db, Sequelize);
 const Selectedcourse= require('../../models/selected_course')(db, Sequelize);
 const Department= require('../../models/department_info')(db, Sequelize);








module.exports = DepartmentRule,User,Selectedcourse,Department;