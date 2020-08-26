const Sequelize = require('sequelize');
const db = require('../../database');

const SelectedCourseInfo = require('../../models/selected_course')(db, Sequelize);





module.exports = SelectedCourseInfo;