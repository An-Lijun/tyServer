const Router =require('@koa/router')
const menuController =require('../controller/menu.ctl')


const menuRouter =new Router({
  prefix:'/menu'
})
menuRouter.post('/add',
  menuController.create
)

menuRouter.get('/list',
  menuController.getMenuList
)

module.exports=menuRouter
