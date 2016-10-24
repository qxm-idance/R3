import '../../utils/taurus';

new Vue({
  el: 'body',
  methods: {
    gotoMyTag: function (event) {
      var el = document.getElementById('myTag');
      this.$scrollTo(el, 500); // 滚动到id为myTag的元素处
    },
    gotoTop: function (event) {
      this.$scrollTo(0, 500); // 滚动到页面顶端
    },
    goto910: function (event) {
      this.$scrollTo(910); // 滚动到距页面顶端910px处
    }
  }
});
