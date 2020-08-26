const User = require("./common");


async function deleteUser(ctx) {

    const user_id = ctx.params.user_id;
    const user_password = ctx.params.user_password;


    //if (user_id && user_password) {

    console.log(user_id);
    console.log(user_password);
    await User.destroy({


        where: {
            user_id: user_id,
            user_password: user_password
        }
    }).then(num => {
        if (num == 1) {
            ctx.send({
                message: "succes"
            });
        } else {
            ctx.send({
                message: "error"
            });
        }
    }).catch(err => {
        ctx.send({
            message: "err" + err
        })
    })




    /*


            }

        
    else {
        ctx.body = {
            status: "fail",
            data: null
        }

    }*/

}

module.exports = {
    deleteUser
}