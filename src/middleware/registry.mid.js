const userService=require('../service/user.ser')
const {NAME_OR_PASSWORD_IS_REQUIRED, USER_IS_ALREADY_EXIST} =require('../config/error');
const md5Pwd =require('../utils/md5Pwd')
const validate = async (ctx,next)=>{
  const {name ,password} =ctx.request.body;
  if(!name || !password){
    reject()
    return ctx.app.emit('error',NAME_OR_PASSWORD_IS_REQUIRED)
  }
  const [user] = await userService.findByName(name);
  console.log(user);
  
  if(user){
    return ctx.app.emit('error',USER_IS_ALREADY_EXIST,ctx)
  }
 await next()
}

const enPwd =async (ctx,next)=>{
  const {password} =ctx.request.body;
  ctx.request.body.password =md5Pwd(password) 
  await next()
}
module.exports={
  validate,
  enPwd
}