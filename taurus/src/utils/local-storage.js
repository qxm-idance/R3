/**
 * Created by wendyliu on 16/10/17.
 */
export default {
  default: {},
  /** 创建客户端存储 */
  set: function (key, value) {
    localStorage.setItem(key, value);
  },
  /** 访问客户端存储 */
  get: function (key) {
    return localStorage.getItem(key);
  },
  /** 删除客户端存储 */
  remove: function (key) {
    localStorage.removeItem(key);
  }
};
