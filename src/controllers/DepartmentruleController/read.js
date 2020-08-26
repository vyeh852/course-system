const DepartmentRule = require("./common");

async function readAllRule(ctx) {
    const allRule = await DepartmentRule.findAll();
    ctx.body = allRule ? {
        status: "success",
        data: allUser
    } : {
        status: "failed",
        data: null
    }
   // ctx.redirect('/view/index.html');
}

module.exports = {
    readAllRule
}