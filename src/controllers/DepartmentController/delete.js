const Department = require("./common");


async function deletedepartment(ctx) {
    const { departmentid } = ctx.request.body;

    if (departmentid ) {
        await Department.destroy({


            where: {
                department_id: departmentid
              
            }
        });
        ctx.body = deletedepartment ? {
            status: "success",
            data: deletedepartment
        } : {
                status: "fail",
                data: null
            }
    }
    else {
        ctx.body = {
            status: "fail",
            data: null
        }

    }
}

module.exports = {
    deletedepartment
}