const app =require('../app/index');
const {OPERATION_IS_NOT_ALLOWED,PASS_IS_INCORRENT,NAME_OR_PASSWORD_IS_REQUIRED, USER_IS_ALREADY_EXIST,USER_IS_NOT_EXIST,UNAUTHORIZATION} =require('../config/error')

app.on('error',(error,ctx)=>{
  let code=200;
  let message='';
  switch(error){
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code='-1001',
      message='用户名或密码不能为空'
      break
    case USER_IS_ALREADY_EXIST:
      code='-1002'
      message="用户名称已占用,请重新输入用户名"
      break

    case USER_IS_NOT_EXIST:
      code="-1003"
      message="登录的用户信息不存在"
      break

    case PASS_IS_INCORRENT:
      code ="-1004"
      message="密码输入不正确"
      break
    case UNAUTHORIZATION:
      code ="-1005"
      message="未授权"
      break
    case OPERATION_IS_NOT_ALLOWED:
      code ="-1006"
      message="无操作权限"
      break
  }
   ctx.body={
    code,
    message
  }
})
