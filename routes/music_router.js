// 配置路由
const Router = require('koa-router');
let musicController = require('../controllers/music_controller');
let router = new Router();

//音乐路由
router.get('/music/index', musicController.showIndex)  //首页
.post('music/add-music',musicController.addMusic) //上传音乐


module.exports=router;