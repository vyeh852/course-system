const { createCourse } = require("./create");
const { readAllCourse } = require("./read");
const { deleteCourse} = require("./delete");
const { updateCourse } = require("./update");
const { findallCourse } = require("./findall");

module.exports = {
    createCourse,
    readAllCourse,
   
    deleteCourse,
    updateCourse,
    findallCourse,
     
    
}