const DepartmentRule = require("./common");

async function updaterule(ctx) {
    const { ruleid, departmentfk, ruletype, rulecontent} = ctx.request.body;
    
    if(ruleid && department_fk && rule_type && rule_content ) {


        const updaterule = await DepartmentRule.update({
            rule_id: ruleid,
            department_fk: departmentfk,
            rule_type: ruletype,
            rule_content: rulecontent,
            
        },{where:{
            rule_id: ruleid,
           
        }
        })
    
        ctx.body = updaterule ? {
            status: "success",
            data: updaterule
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
    updaterule
}