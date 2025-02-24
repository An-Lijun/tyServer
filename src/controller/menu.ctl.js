const MenuService = require('../service/menu.ser.js')
const {transformedRows,arrayToTreeOptimized} = require('../util/transformedRows')
class MenuControoller {
  async create(ctx, next) {
    const res = await MenuService.create(ctx.request.body);
    ctx.body = {
      message: "新增成功~",
      code: 200,
      data: res,
    }
  }
  async getMenuList(ctx, next) {
    const [values] = await MenuService.getAll();
    let data =arrayToTreeOptimized(transformedRows(values))
    ctx.body = {
      message: "获取成功~",
      code: 200,
      data: data[0].children
    }
  }

}
module.exports = new MenuControoller()