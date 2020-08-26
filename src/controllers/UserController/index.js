const { createUser } = require("./create");
const { readAllUser } = require("./read");
const { signuppageUser } = require("./create");  /////////////////
const { signupUser } = require("./create");
const { loginpageUser } = require("./create");
const { loginUser} = require("./create");
const { deleteUser} = require("./delete");
const { updateUser } = require("./update");
module.exports = {
    createUser,
    readAllUser,
    signuppageUser,
    signupUser ,
    loginpageUser ,
    loginUser,
    deleteUser,
    updateUser        /////////////////
    
}