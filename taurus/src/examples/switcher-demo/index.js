import {TSwitcher} from '../../utils/taurus';

new Vue({
  el: '#switcher',
  components: {
    TSwitcher
  },
  data: {
    switcher: {
      onText: 'Yes',
      offText: 'No',
      disabled: false,
      value: false
    },
    longSwitcher: {
      onText: 'Some long',
      offText: 'Other long',
      disabled: false,
      value: false
    }
  },
  methods: {
    changeFirst () {
      alert('one');
    },
    changeSecond () {
      alert('two');
    },
    toggleIt () {
      this.$refs.myswitcher.toggle();
    },
    setValue (value) {
      this.$refs.myswitcher.setValue(value);
    },
    getValue () {
      let value = this.$refs.myswitcher.getValue();
      console.info('getValue', value);
    },
    enable () {
      this.$refs.myswitcher.enable();
    },
    disable () {
      this.$refs.myswitcher.disable();
    }
  }
});
