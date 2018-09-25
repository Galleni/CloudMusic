//构建服务器架构，配置好art-template,路由
const koa = require('koa');
let app = new Koa();
const render = require('koa-art-template');
render({
  //配置目录，后缀名,是否是调试模式（我们的机器一般都是true）
  //调试模式下：不压缩代码，实时更新html的静态内容，每次都读文件
})
