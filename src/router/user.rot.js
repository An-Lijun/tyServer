
const Router =require('@koa/router')
const UserController =require('../controller/user.ctl')

const { valiUserPwd,valiUserNotExist,valiUserExist } = require('../middleware/user.mid')

const userRouter =new Router({
  prefix:'/user'
})

userRouter.post('/registry',
  valiUserPwd,
  valiUserNotExist,
  UserController.create
)

userRouter.post('/login',
  valiUserPwd,
  valiUserExist,
  UserController.login
)

module.exports=userRouter