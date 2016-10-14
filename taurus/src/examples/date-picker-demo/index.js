import Vue from 'vue';
import DatePicker from '../../components/date-picker/date-picker';

var vm = new Vue({
  el: 'body',
  data: {
    dateVal: '2016.08.20 - 2016.09.21'
  },
  components: {
    't-date-picker': DatePicker
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
