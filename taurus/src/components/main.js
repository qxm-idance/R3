import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';

// amcharts
import TBars from './amcharts/bars.vue';
import TDoughnut from './amcharts/doughnut.vue';
import TGauge from './amcharts/gauge.vue';
import TLine from './amcharts/line.vue';

import TAutocomplete from './autocomplete/autocomplete.vue';

// box-group
import TBoxGroup from './box-group/box-group.vue';

import TBreadcrumbs from './breadcrumbs/breadcrumbs.vue';
import TButton from './button/button.vue';
import TDatepicker from './date-picker/date-picker.vue';

// dropdown
import TSelectDropdown from './dropdown/select-dropdown.vue';
import TSubDropdown from './dropdown/subscription-dropdown.vue';

// import TModalBox from './modal-box/modal-box.vue';
import TNumberStepper from './number-stepper/number-stepper.vue';
import TPager from './pager/pager.vue';
import TRangeSlide from './range-slider/range-slider.vue';
import TSearchFilter from './search-filter/search-filter.vue';
import TSelect from './select/select.vue';

// speech-bubble
import TSpeechBubble from './speech-bubble/speech-bubble.vue';
import TSpeechBubbleFilter from './speech-bubble/speech-bubble-filter.vue';
import TSpeechBubbleFilterTree from './speech-bubble/speech-bubble-filter-tree.vue';

import TStatusMessage from './status-message/status-message.vue';

// tabs
import TTabs from './tabs/tabs.vue';
import TFlatTabs from './tabs/flat-tabs.vue';

import TVideo from './video/video-player.vue';
import TLoading from './loading/loading.vue';
import TSwitcher from './switcher/switcher.vue';

// modal
import TAlert from './modal/alert.vue';
import TConfirm from './modal/confirm.vue';
import TModal from './modal/modal.vue';
import TPopup from './popup/popup.vue';

// 指令
import collapse from '../directives/collapse/collapse.vue';
import tooltip from '../directives/tooltips/tooltip.vue';

// 插件
import scollTo from '../plugins/scoll-to';
// import service from '../plugins/service';
import statusMessage from '../plugins/status-message';
import restfulService from '../plugins/restful-service';

// 辅助模块
import cookieHelper from '../utils/cookie-helper';
import taurus from '../utils/taurus';
import validators from '../utils/validators';

window.Vue = Vue;

// 加载插件
Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(tooltip);
Vue.use(scollTo);
Vue.use(statusMessage);
Vue.use(restfulService);

import TSimpleTable from './simple-table/simple-table.vue';
import TDataTable from './data-table/data-table.vue';

taurus.init(Vue);

export {
  TBars,
  TDoughnut,
  TGauge,
  TLine,
  TAutocomplete,
  TBoxGroup,
  TBreadcrumbs,
  TButton,
  TDatepicker,
  TSelectDropdown,
  TSubDropdown,
  TAlert,
  TConfirm,
  TModal,
  TPopup,
  TNumberStepper,
  TPager,
  TRangeSlide,
  TSearchFilter,
  TSelect,
  TSpeechBubble,
  TSpeechBubbleFilter,
  TSpeechBubbleFilterTree,
  TStatusMessage,
  TTabs,
  TFlatTabs,
  TVideo,
  TSimpleTable,
  TDataTable,
  TSwitcher,
  TLoading,
  taurus,
  cookieHelper,
  validators,
  collapse,
  tooltip,
  scollTo,
  restfulService,
  statusMessage
};
