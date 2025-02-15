const mysql =require('mysql2');
const yaml = require('js-yaml')
const fs = require('fs');
const path = require('path');
const config = yaml.load(fs.readFileSync(path.resolve(__dirname,'../../config.yaml'), 'utf8'))


//创建连接池
const connectionPoll = mysql.createPool({
  host:config.HOST,
  port:config.PORT,
  database:config.DATABASE,
  user:config.USER,
  password:config.PASSWORD,
  connectionPoll:config.CONNECTIONPOLL
})

//判断数据库是否连接成功
connectionPoll.getConnection((err,connection)=>{
  if(err){
   return console.log('获取数据库连接失败',err);
  }
  //链接和数据库测试
  connection.connect(err=>{
    if(err){
      return console.log("和数据库交互失败",err);
    }
    console.log('数据库链接与交互成功');
    console.log(`

      ████████╗██╗   ██╗    ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
      ╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
         ██║    ╚████╔╝     ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
         ██║     ╚██╔╝      ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
         ██║      ██║       ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
         ╚═╝      ╚═╝       ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
      
    `);
  console.log(`PowerBy Anlijun               Server Run At http://localhost:${config.SERVERPORT}`);
  console.log("___________________________________________________________________")
  });
});


//获取连接池的连接对象
const connection= connectionPoll.promise();
//导出链接
module.exports =connection