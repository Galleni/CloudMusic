// 配置路由
const Router = require('koa-router');
let userController = require('../controllers/user_controller');
let router = new Router();
// 路由规则
//注册页面
router.get('/register',ctx=>{
    ctx.render('register')
})
.get('/login',ctx=>{
  ctx.render('login')
  })
  // .post('/check-username', (ctx) => { /*各种操作，包括db*/})
  .post('/check-username',userController.checkUsername)
//测试
/*
router.get('/',async ctx => {
  // 使用db.js里面对象的q函数=>
  // 对应异步操作：1：pormise来包裹,await让其等,async 就需要有
  let db = require('./models/db');
  let users = await db.q('select * from users where id=?', [1]);
  console.log(users)
  let user = users[0];
  console.log(user)

  ctx.render('test', {
    text: `hello koa,${user.username}`
  });
})
*/

module.exports=router;