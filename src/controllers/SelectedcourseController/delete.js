const Selectedcourse = require("./common");





async function deleteSelectedcourse(ctx) {

    const selection_id = ctx.params.selection_id;
    const course_fk = ctx.params.course_fk;


    //if (selection_id && course_fk) {

    await Selectedcourse.destroy({


        where: {
            selection_id: selection_id,
            course_fk: course_fk
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
    deleteSelectedcourse
}