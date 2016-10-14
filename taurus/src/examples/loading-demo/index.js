/**
 * Created with taurus.
 * User: zhanghg7/zhanghg7@asiainfo.com
 * Date: 2016/9/13
 * Time: 17:11
 */
import Vue from 'vue';
import TLoading from '../../components/loading/loading.vue';

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
