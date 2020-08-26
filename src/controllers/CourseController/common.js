const Sequelize = require('sequelize');
const db = require('../../database');

const CourseInfo = require('../../models/course_info')(db, Sequelize);





module.exports = CourseInfo;