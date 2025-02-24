const connection =require('../app/database');

class MenuService{
  constructor(){
    this.createSQL ='INSERT INTO menus (label,path,parent_id,menu_order,status,icon,type,redirect) VALUES (?,?,?,?,?,?,?,?);';
  };

  async create(data){
    const {label,path,menuOrder,status,icon,type,parentId='1',redirect} =data
     // 保存到数据库中
    return await connection.execute(this.createSQL,[label,path,parentId,menuOrder,status,icon,type,redirect]);
  }
  async getAll(){
    const sql ='SELECT * FROM menus';
    return await connection.execute(sql);
  }

}
module.exports =new MenuService()