import {tooltip} from 'ai-taurus';
Vue.use(tooltip);
new Vue({
  el: 'body',
  data: {
    tipTitle: 'tipTitle',
    tipText: 'this is  tipText!',
    errorTitle: 'error title',
    errorText: 'this is error text',
    longTipMessage: 'this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message',
    formTipTitle: 'form-tipTitle',
    formTipText: 'form-tipText',
    isDestroy: false
  },
  methods: {
    resetTitle: function () {
      this.formTipTitle = 'resetTitle' + Math.random();
    },
    toggle: function () {
      this.isDestroy = !this.isDestroy;
    }
  }
});
