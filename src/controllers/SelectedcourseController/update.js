const Selectedcourse = require("./common");

async function updateSelectedcourse(ctx) {
    const { selection_id, selection_state, course_fk, course_score, selected_user } = ctx.request.body;
    if(selection_id && selection_state && course_fk && course_score && selected_user ) {
         const selection_id=ctx.params.selection_id;         
         
         const updateSelectedcourse = await Selectedcourse.update({
            selection_id: selection_id,
            selection_state: selection_state,
            course_fk: course_fk,
            course_score: course_score,
            selected_user: selected_user,
           
        },{where:{
            selection_id: selection_id
            
        }
        })
    
        ctx.body = updateSelectedcourse ? {
            status: "success",
            data: updateSelectedcourse
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
    updateSelectedcourse
}