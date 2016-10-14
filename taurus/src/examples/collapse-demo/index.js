import {TButton} from '../../utils/taurus';

// Vue.use(Collapse);

new Vue({
  el: '#collapse',// 指定使用指令的Dom节点
  directives: {
    Collapse
  },

  components: {
    TButton
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
  methods: {
    expandedVal: function () {
      this.expanded = !this.expanded;
    }
  },
  watch: {
    'expanded': function (val) {
      this.btnText = val ? '展开' : '收起';
    }
  }
});
