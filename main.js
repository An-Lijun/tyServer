
const yaml = require('js-yaml')
const app =require('./src/app/index')
const fs = require('fs')
require('./src/util/handleError');
const config = yaml.load(fs.readFileSync('./config.yaml', 'utf8'))

app.listen(config.SERVERPORT,()=>{
  console.log("服务器启动成功");
})