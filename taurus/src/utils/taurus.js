import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';

// 引入Taurus资源文件
import TaurusEn from '../i18n/en.json';
import TaurusCn from '../i18n/cn.json';

// 引入组件
import TBars from '../components/amcharts/bars.vue';
import TDoughnut from '../components/amcharts/doughnut.vue';
import TGauge from '../components/amcharts/gauge.vue';
import TLine from '../components/amcharts/line.vue';
import TAutocomplete from '../components/autocomplete/autocomplete.vue';
import TBoxGroup from '../components/box-group/box-group.vue';
import TBreadcrumbs from '../components/breadcrumbs/breadcrumbs.vue';
import TButton from '../components/button/button.vue';
import TDatePicker from '../components/date-picker/date-picker.vue';
import TSelectDropdown from '../components/dropdown/select-dropdown.vue';
import TSubDropdown from '../components/dropdown/subscription-dropdown.vue';
import TAlert from '../components/modal/alert.vue';
import TConfirm from '../components/modal/confirm.vue';
import TModal from '../components/modal/modal.vue';
import TPopup from '../components/popup/popup.vue';
import TNumberStepper from '../components/number-stepper/number-stepper.vue';
import TPager from '../components/pager/pager.vue';
import TRangeSlider from '../components/range-slider/range-slider.vue';
import TSearchFilter from '../components/search-filter/search-filter.vue';
import TSelect from '../components/select/select.vue';
import TSpeechBubble from '../components/speech-bubble/speech-bubble.vue';
import TSpeechBubbleFilter from '../components/speech-bubble/speech-bubble-filter.vue';
import TSpeechBubbleFilterTree from '../components/speech-bubble/speech-bubble-filter-tree.vue';
import TStatusMessage from '../components/status-message/status-message.vue';
import TTabs from '../components/tabs/tabs.vue';
import TFlatTabs from '../components/tabs/flat-tabs.vue';
import TVideoPlayer from '../components/video/video-player.vue';
import TLoading from '../components/loading/loading.vue';
import TSwitcher from '../components/switcher/switcher.vue';
import TSimpleTable from '../components/simple-table/simple-table.vue';
import TDataTable from '../components/data-table/data-table.vue';

// 指令
import collapse from '../directives/collapse/collapse.vue';
import tooltip from '../directives/tooltips/tooltip.vue';

// 插件
import scrollTo from '../plugins/scroll-to';
// import service from '../plugins/service';
import statusMessage from '../plugins/status-message';
import restfulService from '../plugins/restful-service';

// 辅助模块
import cookieHelper from '../utils/cookie-helper';
import localStorage from '../utils/local-storage';
// import validators from '../utils/validators';
import {email} from '../utils/validators';
// 文件上传组件(第三方FineUpload组件)
import FineUploader from 'fine-uploader/lib/core/traditional';
// import lodash module, which is a modern javascript utility library
import lodash from 'lodash';
// import moment module to resolve date issues
import moment from 'moment';
// import Promise object for global
import Promise from 'es6-promise';
// import fetch object for global
import 'whatwg-fetch';

window.Vue = Vue;
window._ = lodash;
window.Promise = Promise.Promise;

// 加载插件
Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(scrollTo);
Vue.use(statusMessage);
Vue.use(restfulService);

// 加载指令
Vue.directive('collapse', collapse);
Vue.directive('tooltip', tooltip);

// 注册数据校验器
Vue.validator('email', email);

const SEC_AUTH_TOKEN_KEY = 'AppEngine_TokenId';
const SEC_AUTH_TENANT_KEY = 'AE_TENANT';
const SEC_AUTH_ROLETYPE_KEY = 'AE_ROLETYPE';
const SEC_AUTH_ZONE_KEY = 'AE_ZONE';
const DEFAULT_EMPTY_LANG = 'empty';
// 业务侧需要全局定义的参数, 用cookie管理, 这里设置option默认值
const BIZINFOOPTION = {path: '/'};

class Taurus {
  constructor () {
    this._error = '';
    this._loadedRes = {};
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
  /**
   * @name setBizInfo
   * @desc 持久化某个业务侧需要全局定义的参数
   * @param key
   * @param value
   */
  setBizInfo (key, value) {
    cookieHelper.writeCookie(key, value, BIZINFOOPTION);
  };
  /**
   * @name getBizInfo
   * @desc 获取某个业务侧需要全局定义的参数
   * @param key
   */
  getBizInfo (key) {
    return cookieHelper.readCookie(key, BIZINFOOPTION);
  };
  /**
   * @name removeBizInfo
   * @desc 删除某个业务侧需要全局定义的参数
   * @param key
   */
  removeBizInfo (key) {
    cookieHelper.removeCookie(key, BIZINFOOPTION);
  };
};

// 加载Taurus内部国际化资源
Vue.config.lang = DEFAULT_EMPTY_LANG;
Vue.config.fallbackLang = DEFAULT_EMPTY_LANG;
Vue.locale('en', TaurusEn);
Vue.locale('cn', TaurusCn);
Vue.config.lang = 'en';
Vue.config.fallbackLang = 'en';

var taurus = new Taurus();

// 加载业务侧国际化资源，业务侧HTML内必须定义meta标记，例如：
// <meta name="biz-code" content="selfcare">
taurus.lang = 'en';

// 导出模块
export {
  TBars,
  TDoughnut,
  TGauge,
  TLine,
  TAutocomplete,
  TBoxGroup,
  TBreadcrumbs,
  TButton,
  TDatePicker,
  TSelectDropdown,
  TSubDropdown,
  TAlert,
  TConfirm,
  TModal,
  TPopup,
  TNumberStepper,
  TPager,
  TRangeSlider,
  TSearchFilter,
  TSelect,
  TSpeechBubble,
  TSpeechBubbleFilter,
  TSpeechBubbleFilterTree,
  TStatusMessage,
  TTabs,
  TFlatTabs,
  TVideoPlayer,
  TSimpleTable,
  TDataTable,
  TSwitcher,
  TLoading,
  taurus,
  cookieHelper,
  localStorage,
  FineUploader,
  moment
};
