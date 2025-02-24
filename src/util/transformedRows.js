

function toCamelCase(str) {
  // 正则表达式匹配连字符或下划线以及其后的字母
  return str.replace(/[-_]([a-z])/g, function (match, letter) {
      // 将匹配到的字母转换为大写
      return letter.toUpperCase();
  });
}
const transformedRows =(rows)=>{
  return  rows.map(row => {
    const newRow = {};
    for (const [key, value] of Object.entries(row)) {
        const camelCaseKey = toCamelCase(key);
        newRow[camelCaseKey] = value;
    }
    return newRow;
  });
}









function arrayToTreeOptimized(arr) {
  const idToNode = new Map();
  const tree = [];

  // 第一次遍历，将每个节点存储到 Map 中
  arr.forEach(item => {
      const newItem = { ...item};
      idToNode.set(item.id, newItem);
  });

  // 第二次遍历，构建树结构
  arr.forEach(item => {
      const node = idToNode.get(item.id);
      const parentId = item.parentId;
      if (item.id ==1) {
          tree.push(node);
      } else {
          const parent = idToNode.get(parentId);
          if (parent) {
              if (!parent.children) {
                  parent.children = [];
              }
              parent.children.push(node);
          }
      }
  });
  console.log(tree);
  
  return tree;
}



module.exports ={
  transformedRows,
  arrayToTreeOptimized
  
}