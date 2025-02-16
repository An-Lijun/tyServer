const UserService = require('../service/user.ser.js')
const jwt = require('jsonwebtoken');
const { PRIVITE_KEY } = require('../config/screct')

class RegistryControoller {
  async create(ctx, next) {
    const res = await UserService.create(ctx.request.body);
    ctx.body = {
      message: "创建成功~",
      code: 200,
      data: res,
    }
  }
  async login(ctx, next) {
    const { username, password } = ctx.request.body
    const [values] = await UserService.findByName(username)

    if (values.username === username && password === values.password) {
      return ctx.body = {
        message: "登录成功~",
        code: 200,
        data: {
          token: jwt.sign({
            id: values.id,
            name: username,
          }, PRIVITE_KEY, {
            expiresIn: 24 * 60 * 60,
            algorithm: 'RS256'
          }),
        }
      }
    }
    ctx.body = {
      message: "登录失败【用户名或密码错误】",
      code: 500,
    }
  }

}
module.exports = new RegistryControoller()