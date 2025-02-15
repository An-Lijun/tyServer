const fs =require('fs');
const path =require('path')

function useRoutes(app){
  const files =fs.readdirSync(__dirname);

  for (const file of files) {
    if(file.endsWith('.rot.js')){
      const router =  require(path.resolve(__dirname,file));
      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  }
}
module.exports=useRoutes 