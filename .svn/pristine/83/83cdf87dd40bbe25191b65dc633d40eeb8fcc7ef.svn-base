import {TButton, collapse} from 'ai-taurus';
Vue.use(collapse);
new Vue({
  el: '#collapse',
  // 指定使用指令的Dom节点
  components: {
    't-button': TButton
  },
  props: {
    expanded: {
      type: Boolean,
      twoway: true,
      default: true
    }
  },
  data: {
    btnText: '展开'
  },
  watch: {
    'expanded': function (val) {
      this.btnText = val ? '展开' : '收起';
    }
  }
});
