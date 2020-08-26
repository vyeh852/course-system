const Department = require("./common");

async function updatedepartment(ctx) {
    const { departmentid, departmentname, department_semester } = ctx.request.body;

    if(departmentid && departmentname && department_semester ) {
        const updatedepartment = await Department.update({
            
            department_id: departmentid,
            department_name: departmentname,
            department_semester: department_semester,

            
        },{where:{
            department_id: departmentid,
            
        }
        })
    
        ctx.body = updatedepartment ? {
            status: "success",
            data: updatedepartment
        } : {
            status: "fail",
            data: null
        }
    } else {
        ctx.body = {
            status: "fail",
            data: null
        }
    }
}

module.exports = {
    updatedepartment
}