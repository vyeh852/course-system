const User = require("./common");


async function updateUser(ctx) {
    const { user_id, user_realname, user_credential, user_department, user_salt, createdAt, isDeleted, isAdmin } = ctx.request.body;
    if(user_id && user_realname && user_credential && user_department && user_salt && createdAt && isDeleted && isAdmin) {
         const user_id=ctx.params.user_id;         
         
         const updateUser = await User.update({
            user_id: user_id,
            user_realname: user_realname,
            user_credential: user_credential,
            user_department: user_department,
            user_salt: user_salt,
            createdAt: createdAt,
            isDeleted: isDeleted,
            isAdmin: isAdmin,
        },{where:{
            user_id: user_id
            
        }
        })
    
        ctx.body = updateUser ? {
            status: "success",
            data: updateUser
        } : {
            status: "fail",
            data: null
        }
    } else {
        ctx.body = {
            status: "faill!!",
            data: null
        }
    }
}

module.exports = {
    updateUser
}