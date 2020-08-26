const { createSelectedcourse} = require("./create");
const {  readAllSelectedcourse } = require("./read");
const {  deleteSelectedcourse} = require("./delete");
const { updateSelectedcourse } = require("./update");

module.exports = {
    createSelectedcourse,
    deleteSelectedcourse,
   
    readAllSelectedcourse,
    updateSelectedcourse     /////////////////
    
}