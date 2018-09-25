// 构建服务器架构，配置好art-template,路由
const path = require('path');
const koa = require('koa');
let app = new koa();
const render = require('koa-art-template');
render(app, {
  // 配置目录，后缀名,是否是调试模式（我们的机器一般都是true）
  // 调试模式下：不压缩代码，实时更新html的静态内容，每次都读文件
  root: path.join(__dirname, 'views'),// 注意文件目录
  extname: '.html',//注意文件格式
  debug: process.env.NODE_ENV !== 'production' // true
  // 我的环境变量中，没有这个变量，或者不是production的值
})
// 配置路由
const Router = require('koa-router');
let router = new Router();
// 路由规则
router.get('/',async ctx => {
  // 使用db.js里面对象的q函数=>
  // 对应异步操作：1：pormise来包裹,await让其等,async 就需要有
  let db = require('./models/db');
  let users = await db.q('select * from users where id=?', [1]);
  console.log(users)
  let user = users[0];
  // console.log(user)

  ctx.render('index', {
    text: `hello koa,${user.username}`
  });
})

// 将路由对象放入到中间件中
app.use(router.routes());
// 状态码增强，404=>405+501
// 405：url存在请求方式错误
// 501 copy之类的不常见的请求方式， 服务器没有实现对其处理的
app.use(router.allowedMethods());
// 开启服务器
app.listen(8888, () => {
  console.log('服务器启动在8888端口')
});