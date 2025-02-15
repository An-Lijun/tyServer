const connection =require('../app/database');

class UserService{
  constructor(){
    this.createSQL ='INSERT INTO users (username,password) VALUES (?,?);';
    this.findByNameSQL ="SELECT * FROM  users WHERE username =?;"
  }

  async create(user){
    const {username ,password} =user
     // 保存到数据库中
    return await connection.execute(this.createSQL,[username,password]);
  }
  async findByName(name){
    const[values]= await connection.execute(this.findByNameSQL,[name]);
    return values
  }
}
module.exports =new UserService()