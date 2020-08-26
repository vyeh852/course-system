const Course = require("./common");

async function readAllCourse(ctx) {
    const allCourse = await Course.findAll();
    
    ctx.body = allCourse ? {
        status: "success",
        data: allCourse
    } : {
        status: "failed",
        data: null
    }
   // ctx.redirect('/view/index.html');
}

module.exports = {
    readAllCourse
}