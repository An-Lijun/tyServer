// const registryService =require('../service/registry.ser.js')
const userService =require('../service/user.ser.js')
const { NAME_OR_PASSWORD_IS_REQUIRED,USER_IS_ALREADY_EXIST } =require('../config/error')


class RegistryControoller{
  async create(ctx,next) {
   const res= await registryService.create(ctx.request.body);
    ctx.body={
      message:"创建成功~",
      data:res,
    }
  }
  async  validate(ctx,next) {
    const {name ,password} =ctx.request.body;
    if(!name || !password){
      return ctx.app.emit('error',NAME_OR_PASSWORD_IS_REQUIRED)
    }
    const [user] = await userService.findByName(name);
    if(user){
      return ctx.app.emit('error',USER_IS_ALREADY_EXIST,ctx)
    }
   await next()
  }
}
module.exports = new RegistryControoller()