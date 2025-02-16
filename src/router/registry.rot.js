
const Router =require('@koa/router')
const RegistryControoller =require('../controller/registry.ctl')

const userRouter =new Router({
  prefix:'/reigstry'
})

userRouter.post('/',RegistryControoller.validate,RegistryControoller.create)
module.exports=userRouter