
const Router =require('@koa/router')
const controller =require('../controller/registry.ctl')

const userRouter =new Router({
  prefix:'/reigstry'
})

userRouter.post('/',controller.create)
module.exports=userRouter