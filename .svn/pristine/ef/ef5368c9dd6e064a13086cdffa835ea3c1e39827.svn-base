import Vue from 'vue';
import ScollToPlugin from 'taurus/plugins/scoll-to';

Vue.use(ScollToPlugin);

new Vue({
  el: 'body',
  methods: {
    gotoMyTag: function (event) {
      var el = document.getElementById('myTag');
      this.$scollTo(el, 500); // 滚动到id为myTag的元素处
    },
    gotoTop: function (event) {
      this.$scollTo(0, 500); // 滚动到页面顶端
    },
    goto910: function (event) {
      this.$scollTo(910); // 滚动到距页面顶端910px处
    }
  }
});
