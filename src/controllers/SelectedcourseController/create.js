const Selectedcourse = require("./common");

async function createSelectedcourse(ctx) {
   // const { selection_id,selection_state, course_fk, course_score, selected_user } = ctx.request.body;
   // if(selection_id &&selection_state && course_fk && course_score && selected_user ) {

         Selectedcourse.create({

            selection_id: ctx.request.body.selection_id,
            selection_state:ctx.request.body.selection_state,
            course_fk: ctx.request.body.course_fk,
            course_score: ctx.request.body.course_score,
            selected_user: ctx.request.body.selected_user
            
        });
    
        ctx.body = createSelectedcourse ? {
            status: "success",
            data: createSelectedcourse
        } : {
            status: "fail",
            data: null
        }
    } 
    



module.exports ={ createSelectedcourse};
