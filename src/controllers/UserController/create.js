const User = require("./common");
var fs = require('fs');





async function createUser(ctx) {
  //  const { userid, username, usercredential, userdepartment, usersalt, createdat, isdeleted, isadmin,userpassword } = ctx.request.body;
   // if(userid && username && usercredential && userdepartment && usersalt && createdat && isdeleted && isadmin) {
           User.create({
            user_id:  ctx.request.body.userid,
            user_realname:  ctx.request.body.username,
            user_credential:  ctx.request.body.usercredential,
            user_department:  ctx.request.body.userdepartment,
            user_salt:  ctx.request.body.usersalt,
            createdAt:  ctx.request.body.createdat,
            isDeleted:  ctx.request.body.isdeleted,
            isAdmin:  ctx.request.body.isadmin,
            user_password:  ctx.request.body.userpassword
        });
    
        ctx.body = createUser ? {
            status: "success",
            data: createUser
        } : {
            status: "fail",
            data: null
        }
    }/* else {
        ctx.body = {
            status: "fail",
            data: null
        }
    }
    
}*/





async function loginUser(ctx){

await User.findOne({
  
    
where:{user_id:ctx.params.user_id,
       user_password:ctx.params.user_password}

})
.then(task=>{

ctx.body=task;

})
.catch(err=>{
ctx.body='error:'+err

})

}




async function signuppageUser(ctx) {
    await ctx.render("form", { user_info: {} });
    
}

async function signupUser(ctx) {   //bodyparser功能: the parsed body will store in ctx.request.body
   if(!ctx.request.body.user_id){
       ctx.body={error:bad};
   }
   else{
   await User.create(ctx.request.body)
   .then(task=>{
    console.log(task);
    
   ctx.body=task;
    
    
   })
   .catch(err=>{

       ctx.body='error:'+err
   })



   }




}


    
   

    
 
 
   




module.exports = {
    createUser,signuppageUser ,signupUser ,loginpageUser,loginUser       
}