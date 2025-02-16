const userService = require('../service/user.ser.js')
const { NAME_OR_PASSWORD_IS_REQUIRED, USER_IS_ALREADY_EXIST } = require('../config/error')
const UserService = require('../service/user.ser.js')

class RegistryControoller {
  async create(ctx, next) {
    const res = await UserService.create( ctx.request.body);
    ctx.body = {
      message: "创建成功~",
      code: 200,
      data: res,
    }
  }

  validate = async (ctx, next) => {
    
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED,ctx)
    }
    const [user] = await userService.findByName(username);
    console.log(user);

    if (user) {
      return ctx.app.emit('error', USER_IS_ALREADY_EXIST, ctx)
    }
    await next()
  }

}
module.exports = new RegistryControoller()