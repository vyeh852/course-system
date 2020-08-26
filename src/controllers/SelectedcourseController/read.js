const Selectedcourse = require("./common");

async function readAllSelectedcourse(ctx) {
    const allSelectedcourse = await Selectedcourse.findAll();
    
    ctx.body = allSelectedcourse ? {
        status: "success",
        data: allSelectedcourse
    } : {
        status: "failed",
        data: null
    }
   // ctx.redirect('/view/index.html');
}

module.exports = {
    readAllSelectedcourse
}