import TaurusEn from '../i18n/en.json';
import TaurusCn from '../i18n/cn.json';
const SEC_AUTH_TOKEN_KEY = 'AppEngine_TokenId';
const SEC_AUTH_TENANT_KEY = 'AE_TENANT';
const SEC_AUTH_ROLETYPE_KEY = 'AE_ROLETYPE';
const SEC_AUTH_ZONE_KEY = 'AE_ZONE';
const DEFAULT_EMPTY_LANG = '_PP';

class Taurus {
  constructor () {
    this._error = '';
    this._loadedRes = {};
  };
  init (VM) {
    // 加载Taurus内部国际化资源
    Vue.config.lang = DEFAULT_EMPTY_LANG;
    Vue.config.fallbackLang = DEFAULT_EMPTY_LANG;
    VM.locale('en', TaurusEn);
    VM.locale('cn', TaurusCn);
    Vue.config.lang = 'en';
    Vue.config.fallbackLang = 'en';
    this.lang = 'en'; // 加载业务资源
  };
  get SEC_AUTH_TOKEN_KEY () {
    return SEC_AUTH_TOKEN_KEY;
  };
  get SEC_AUTH_TENANT_KEY () {
    return SEC_AUTH_TENANT_KEY;
  };
  get SEC_AUTH_ROLETYPE_KEY () {
    return SEC_AUTH_ROLETYPE_KEY;
  };
  get SEC_AUTH_ZONE_KEY () {
    return SEC_AUTH_ZONE_KEY;
  };
  get lastError () {
    return this._error;
  };
  get lang () {
    return Vue.config.lang;
  };
  /**
   * 设置全局语言
   * @param  {String} newLang 新语言编码
   */
  set lang (newLang) {
    Vue.config.lang = newLang;
    this.loadLang(this.getMetaBizCode(), newLang);
  };
  // 从meta标记上获取当前页面所属模块
  getMetaBizCode () {
    var meta = document.head.querySelectorAll('meta[name="biz-code"]');
    if (meta.length > 0) {
      return meta[0].getAttribute('content');
    }
    return '';
  };
  // 加载语言资源文件
  loadLang (bizCode, newLang) {
    var lang, res;
    var self = this;
    if (!bizCode) {
      return; // 没有指定业务模块编码不加载任何资源!
    }
    lang = newLang || Vue.config.lang;
    res = '/i18n/' + bizCode + '/' + lang + '.json';
    if (!(res in this._loadedRes)) { // 配置了资源文件且还未加载
      fetch(res, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        if (Object.keys(json).length === 0) {
          return Promise.reject(new Error('locale [' + newLang + '] empty !!'));
        } else {
          Vue.config.lang = DEFAULT_EMPTY_LANG;
          Vue.config.fallbackLang = DEFAULT_EMPTY_LANG;
          let locale = Vue.locale(newLang);
          locale = Object.assign(locale, json);
          Vue.locale(newLang, locale);
          Vue.config.lang = newLang;
          Vue.config.fallbackLang = 'en';
          return Promise.resolve(json);
        }
      }).catch(function (error) {
        self._error = error.message;
        return Promise.reject();
      });
    }
  };
};

// 导出模块
export default new Taurus();
