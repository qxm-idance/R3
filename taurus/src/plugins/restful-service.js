/**
 * Created by zengjie on 16/9/28.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import cookieHelper from '../utils/cookie-helper';
Vue.use(VueResource);
var Plugin;
Plugin = {
  options: {
    // url: '', // type:string;URL to which the request is sent
    // body: null, // type:[Object, FormData, string];Data to be sent as the request body
    headers: {
      appKey: 'FE',
      transactionID: '1',
      reqTime: getCurrentTimeFormat('yyMMddhhmmss'),
      accessToken: '',
      tenantId: '1',
      locale: cookieHelper.readCookie('locale'),
      customerSegment: 'b2c',
      whereChannelCode: ''
    }, // type:[Object];Headers object to be sent as HTTP request headers
    // params: null, // type:[Object];Parameters object to be sent as URL parameters
    // method: '', // type:[string];HTTP method (e.g. GET, POST, ...)
    timeout: 3 * 60 * 1000, // type:[number];Request timeout in milliseconds (0 means no timeout)
    before: null, // type:[function(request)];Callback function to modify the request options before it is sent
    progress: null, // type:[function(request)];Callback function to handle the ProgressEvent of uploads
    credentials: false, // type:[boolean];Indicates whether or not cross-site Access-Control requests should be made using credentials
    emulateHTTP: true, // type:[boolean];Send PUT, PATCH and DELETE requests with a HTTP POST and set the X-HTTP-Method-Override header
    emulateJSON: true // type:[boolean];Send request body as application/x-www-form-urlencoded content type
  },
  response: {
    url: '', // type:Response URL origin
    body: null, // type:[Object, Blob, string];Response body data
    headers: null, // type:[Header];Response Headers object
    ok: false, // type:[boolean];HTTP status code between 200 and 299
    status: 0,  // type:[number];HTTP status code of the response
    statusText: '', // type:[number];HTTP status text of the response
    text: function () {
    }, // Resolves the body as string
    json: function () {
    }, // Resolves the body as parsed JSON object
    blob: function () {
    } // Resolves the body as Blob object
  },
  /**
   * 从服务器取出资源（一项或多项）
   * method: 'GET'
   * 可以结合URI Template一起使用,比如'http://211.149.193.19:8080/api/customers{/id}'
   * @param options
   */
  get: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    var resource = Vue.resource(options.url);
    var promise = resource.get();
    return promise;
  },
  /**
   * 返回新生成的资源对象
   * @param options
   */
  post: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    return Vue.http.post(options.url, options.data, Plugin.options);
  },
  /**
   * 更新某个指定的全部信息
   */
  put: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    return Vue.http.put(options.url, options.data, Plugin.options);
  },
  /**
   * 更新某个指定的部分信息
   * @param options
   */
  patch: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    return Vue.http.patch(options.url, options.data, Plugin.options);
  },
  /**
   *在服务器新建一个资源
   * method: 'POST'
   * @param options
   */
  save: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    var resource = Vue.resource(options.url);
    var promise = resource.save(options.data);
    return promise;
  },
  /** 获取某个指定的信息
   * method: 'GET'
   * @param options
   */
  query: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    var resource = Vue.resource(options.url);
    var promise = resource.query(options.data);
    return promise;
  },
  /**
   * 在服务器更新资源（客户端提供改变后的完整资源）
   * method: 'PUT'
   * @param url
   * @param options
   */
  update: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    var resource = Vue.resource(options.url);
    var promise = resource.update(options.primaryKey, options.data);
    return promise;
  },
  /**
   * 从服务器删除资源
   *method: 'DELETE'
   * @param url
   * @param options
   */
  delete: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    var resource = Vue.resource(options.url);
    var promise = resource.delete();
    return promise;
  },
  /**
   *
   * @param url
   * @param options
   */
  jsonp: function (options) {
    if (options && options.options) {
      setCustomOptions(options.options);
    }
    var promise = Vue.http.jsonp(options.url);
    return promise;
  }
};
/**
 * 继承
 */
function extend (destination, source) {
  for (let property in source) {
    // 若destination[property]和sourc[property]都是对象，则递归
    if (isObject(destination[property]) && isObject(source[property])) {
      extend(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
}
/**
 * 请求统一处理回调
 */
function callbackHandler (response) {
  console.log('callback..');
};

/**
 * 统一处理错误回调
 */
function errorHandler (response) {
  console.error('callServer error:');
  console.error(response.status);
  console.error(response.statusText);
}

/**
 * 判断是否Object
 */
function isObject (o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}
/**
 * 设置自定义的option
 * @param options
 */
function setCustomOptions (options) {
  if (!options) {
    return;
  }
  for (let key in options) {
    if (Plugin.options.hasOwnProperty(key)) {
      if (isObject(Plugin.options[key])) {
        extend(Plugin.options[key], options[key]);
      } else {
        Plugin.options[key] = options[key];
      }
    }
  }
  console.log('setCustomOptions');
  console.log(Plugin.options);
}
/**
 * set http options
 * headers:
 * appKey;  -----  Front end 标识，区分不同的主机或地区，先FE传了默认值
 * transactionID   ----- 事务id，标识每次请求
 * reqTime;   -----  请求时间，格式为 YYmmddHH24'T'MMSS
 * accessToken;  -----  用户登录后分配的唯一序列
 * tenantId;   ------  租户，同veris租户
 * locale;  -----  语言
 * customerSegment;  ------ 区分是  b2c  还是  b2b
 * oseChannel;   ------ 渠道编码  who channel,whereChannelCode
 * whereChannelCode;   ------  渠道编码    和oseChannel应用在不同场景，
 * headMap: ------自定义设置head
 */
function setOptions (request) {
  extend(request, Plugin.options);
  console.log('setOptions:');
  console.log(Plugin.options);
}
/**
 * 请求拦截处理器
 */
function interceptors () {
  Vue.http.interceptors.push((request, next) => {
    // set options
    setOptions(request, Plugin.options);
    next((response) => {
      if (!response.ok) {
        errorHandler(response);
      } else {
        callbackHandler(response);
      }
      return response;
    });
  });
};
/**
 * 以YYmmddHH24'T'MMSS格式返回时间
 */
function getCurrentTimeFormat (fmt) {
  var date = new Date();
  var o = {
    'M+': date.getMonth() + 1,                 // 月份
    'd+': date.getDate(),                    // 日
    'h+': date.getHours(),                   // 小时
    'm+': date.getMinutes(),                 // 分
    's+': date.getSeconds()                 // 秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 注册为vue 插件
 * 入参 options {
 * url: 路径
 * data: 数据
 * options：见plugin.options
 * }
 * @type {{installed: boolean, install: RestfulService.install}}
 */

var RestfulService = {
  installed: false,
  install: function (vue) {
    if (RestfulService.installed) {
      return;
    }
    vue.restfulService = Plugin;
    vue.prototype.$restfulService = Plugin;
    RestfulService.installed = true;
    // 设置拦截器
    interceptors();
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RestfulService);
}
module.exports = RestfulService;
