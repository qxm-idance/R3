import Vue from 'vue';
import Button from '../../components/button/button';

var vm = new Vue({
  el: 'body',
  components: {
    't-button': Button
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
