const Koa =require('koa');
const bodyPaser =require('koa-bodyparser')
const useRoutes =require('../router/index')
const koaCors =require('koa-cors')

//创建app
const app =new Koa();
// 中间件处理
app.use(bodyPaser());
app.use(koaCors())

 //自动载入路由函数
useRoutes(app);
//导出出去
module.exports=app