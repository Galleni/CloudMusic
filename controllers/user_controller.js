const user_db=require('../models/db.js')
//其实当require一个模块的时候，默认导出的是一个空对象
//module.exports.checkUsername=function(){}
exports.checkUsername = async (ctx) => { 
//1.接收请求体数据  ctx.request.body
//2.查询数据库 let data=await user_db.q();
//.3.响应json对象  
// ctx.body={data}  
}