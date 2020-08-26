const { createDepartment } = require("./create");
const { readAllDepartment } = require("./read");
const { updatedepartment } = require("./update");
const { deletedepartment } = require("./delete");


module.exports = {
    createDepartment,
    readAllDepartment,
    updatedepartment,
    deletedepartment
}