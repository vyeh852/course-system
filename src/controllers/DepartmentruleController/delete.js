const DepartmentRule = require("./common");

async function deleterule(ctx) {
    const { ruleid } = ctx.request.body;

    if (ruleid) {
        await DepartmentRule.destroy({


            where: {
                rule_id: ruleid
               
            }
        });
        ctx.body = deleterule ? {
            status: "success",
            data: deleterule
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
    deleterule
}