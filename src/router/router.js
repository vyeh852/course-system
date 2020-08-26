// koa-router
const Router = require('koa-router');
// Our Controllers
const DepartmentController = require('../controllers/DepartmentController');
const UserController = require('../controllers/UserController');
const DepartmentruleController = require('../controllers/DepartmentruleController');
const CourseController = require('../controllers/CourseController');
const SelectedcourseController = require('../controllers/SelectedcourseController');
const fs=require('fs');






// const { a, b, c } = require() => a b c
// const f = require() => f.a f.b f.c

// http header contains '/api'
const router = new Router({
    prefix: '/api'
});

router
    .get('/', async function(ctx)
    {await ctx.render("index");
      
    })

// DepartmentInfo
router
    .get('/department/all', DepartmentController.readAllDepartment)
    .put('/department', DepartmentController.createDepartment)

// CourseInfo
router
    .get('/course/all')
    .put('/course/update')

// userInfo
router
    .get('/user/all', UserController.readAllUser)
    .put('/user/update', UserController.updateUser)

    
    .delete('/user/delete',UserController.deleteUser)

    .get('/user/signuppage', UserController.signuppageUser)
    .post('/user/signup', UserController.signupUser)
    .get('/user/loginpage', UserController.loginpageUser)
    .get('/user/login', UserController.loginUser)







    //DepartmentRule
    .get('/departmentrule/all', DepartmentruleController.readAllRule)
    .get('/departmentrule/course/rule', DepartmentruleController.selectedcourseuser)


  //userpage

    .get('/userpage',(ctx)=>{ctx.render("userepage");
         
    })


    //course
    .post('/course/create', CourseController.createCourse)
    .get('/course/read', CourseController.readAllCourse)
    .put('/course/update', CourseController.updateCourse)
    .delete('/course/delete',CourseController.deleteCourse)

    .get('/course/findall', CourseController.findallCourse)
    
    //selectedcourse 

    .post('/selectedcourse/create', SelectedcourseController.createSelectedcourse)
    .get('/selectedcourse/read', SelectedcourseController.readAllSelectedcourse)
    .put('/selectedcourse/update', SelectedcourseController.updateSelectedcourse)
    .delete('/selectedcourse/delete',SelectedcourseController.deleteSelectedcourse)





module.exports = router;

     

