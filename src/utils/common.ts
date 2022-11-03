/**
 * 替换图片源地址为本地源，解决本地测试环境下的图片跨域问题
 * @param {String} str
 * @returns String
 */
 export const replaceOrigin = (str:string):string => {
  return str ? str.replace(/(?:^https|http):\/\/.*?\//g, window.origin + '/') : ''
}

/**
 * 没有值返回空
 * @param {String} value 被检测值
 * @param {String} nullValue 为空返回值 
 * @returns string
 */
 export function isNull(value:string, nullValue=""):string {
  return value || nullValue
}