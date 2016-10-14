/**
 * Created by Greg Zhang on 2016/10/11.
 */
import {taurus} from 'aii-taurus';

new Vue({
  el: 'body',
  data: {
    lang: '英文'
  },
  ready () {
    setTimeout(function () {
      console.log(Vue.locale('cn'));
      console.log(Vue.locale('en'));
    }, 300);
  },
  methods: {
    changeLang () {
      this.lang = this.lang === '中文' ? '英文' : '中文';
      taurus.lang = taurus.lang === 'en' ? 'cn' : 'en';
      setTimeout(function () {
        console.log(Vue.locale('cn'));
        console.log(Vue.locale('en'));
      }, 300);
    }
  }
});

