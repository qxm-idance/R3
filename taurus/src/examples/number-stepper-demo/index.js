import {TNumberStepper} from '../../utils/taurus';

new Vue({
  el: 'body',
  components: {
    TNumberStepper
  },
  data: {
    min: 0,
    max: 10,
    step: 2
  },
  methods: {
    setNSValue: function (newValue) {
      this.$refs.nsNormal.setValue(newValue);
    },
    getNSValue: function () {
      let value = this.$refs.nsNormal.getValue();
      alert('类型' + typeof value + '; 值:' + value);
    },
    enable: function () {
      this.$refs.nsNormal.enable();
    },
    disable: function () {
      this.$refs.nsNormal.disable();
    }
  }
});
