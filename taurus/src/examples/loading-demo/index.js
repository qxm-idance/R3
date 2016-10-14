import {TLoading} from '../../utils/taurus';

new Vue({
  name: 'loading-demo',
  el: 'body',
  components: {
    TLoading
  },
  data: {
    isShow: true
  },
  methods: {
    showLoading: function () {
      this.$refs.myLoading.showLoading();
    },
    hiddenLoading: function () {
      this.$refs.myLoading.hideLoading();
    },
    onLoadingVisiable: function () {
      console.log('执行onLoadingVisiable回调');
    },
    onLoadingHidden: function () {
      console.log('执行onLoadingHidden回调');
    }
  }
});
