const userService = require('../service/user.ser')
const { NAME_OR_PASSWORD_IS_REQUIRED, USER_IS_ALREADY_EXIST ,USER_IS_NOT_EXIST} = require('../config/error');

// const md5Pwd = require('../utils/md5Pwd')
const valiUserPwd = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  await next()
}

const valiUserExist = async (ctx, next) => {
  const { username } = ctx.request.body;
  const [user] = await userService.findByName(username);

  if (!user) {
    return ctx.app.emit('error', USER_IS_NOT_EXIST, ctx)
  }
  await next()
}

const valiUserNotExist = async (ctx, next) => {
  const { username } = ctx.request.body;
  const [user] = await userService.findByName(username);

  if (user) {
    return ctx.app.emit('error', USER_IS_ALREADY_EXIST, ctx)
  }
  await next()
}

const enPwd = async (ctx, next) => {
  // const { password } = ctx.request.body;
  // ctx.request.body.password = md5Pwd(password)
  // await next()
}
module.exports = {
  valiUserPwd,
  valiUserNotExist,
  valiUserExist,
  enPwd
}