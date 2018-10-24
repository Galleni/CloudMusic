const musicDB = require('../models/db.js');
exports.showIndex = async (ctx) => {
  //1.获取session数据=》用户可能此时没有登录(中间件中统一处理)
  let user = ctx.session.user;
  //2.查询数据库
  let musics = await musicDB.q('select * from musics where uid=?', [user.id]);
  // ctx.body = musics;
  //3.ctx.render 渲染到页面
  ctx.render('index', {
    musics
  });
}



exports.addMusic =async  ctx => {
  //获取文字数据和文件数据
  // console.log(ctx.request.body);
  // console.log(ctx.request.files);
   ctx.body = 'ok';
}