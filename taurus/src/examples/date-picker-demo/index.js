import {TDatePicker} from '../../utils/taurus';

var vm = new Vue({
  el: 'body',
  data: {
    dateVal: '2016.08.20 - 2016.09.21'
  },
  components: {
    TDatePicker
  },
  methods: {
    onChange: function () {
      self = this;
      setTimeout(function () {
        alert(self.dateVal);
      }, 100);
    }
  }
});
console.log(vm);
