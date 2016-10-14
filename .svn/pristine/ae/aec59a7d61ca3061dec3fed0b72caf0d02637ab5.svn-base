import Vue from 'vue';
import Select from 'taurus/components/select/select';

var vm = new Vue({
  el: 'body',
  components: {
    't-select': Select
  },
  data: function () {
    return {
      disabled: false,
      optgroup: [
        {
          label: 'g1',
          disabled: false,
          value: [{label: 'gop1', value: 1, disabled: true}, {label: 'g2', value: 2}, {label: 'g3', value: 3}, {label: 'g4', value: 4}]
        },
        {
          label: 'g2',
          disabled: false,
          value: [
            {label: 'g21', value: 21, disabled: true}, {label: 'g22', value: 22}, {label: 'g23', value: 23}, {label: 'g24', value: 24}
          ]
        }
      ],
      options: [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}],
      selectVal: '22'
    };
  },
  methods: {
    btnClick: function () {
      alert(1);
    },
    dataChange: function () {
      console.log('data changed');
    }
  }
});
console.log(vm);
