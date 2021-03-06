import {TButton} from '../../utils/taurus';

var vm = new Vue({
  el: 'body',
  components: {
    TButton
  },
  methods: {
    btnClick: function () {
      alert(1);
    },
    submit: function () {
      var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
          resolve();
        }, Math.random() * 2000 + 1000);
      });
      this.$refs.sbumitBtn.activityIndicator(promise);
    }
  }
});
console.log(vm);
