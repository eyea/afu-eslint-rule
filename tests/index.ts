import { RoleTreeNode } from "@/types/types";
/**
 * 删除对象中，value为空的key
 * @param {对象} obj
 * @returns
 */
export const delNullParam = (obj: any) => {
  const param: any = {};
  for (let k in obj) {
    if (obj[k]) {
      param[k] = obj[k];
    }
  }
  return param;
};

//平铺的数组转成树
export const convertToTree = (
  data: RoleTreeNode[] = [],
  parentId: number = 0,
) => {
  const tree = [];
  for (const item of data) {
    if (item.pid === parentId) {
      const children = convertToTree(data, item.id);
      if (children.length) {
        item.children = children;
      }
      tree.push(item);
    }
  }
  return tree;
};

// 导出参数拼接
export const exportParams = (obj: any) => {
  let str = '?'
  Object.keys(obj).forEach(function (key) {
    str += `${key}=${obj[key]}&`
  })

  let reg = /&$/gi
  str = str.replace(reg, '') // 清除最后一个&符号
  return str
}