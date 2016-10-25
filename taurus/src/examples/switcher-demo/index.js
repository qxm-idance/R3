import {TSwitcher} from '../../utils/taurus';

new Vue({
  components: {
    TSwitcher
  },
  data () {
    return {
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
    };
  },
  methods: {
    changeFirst (value, seq) {
      this.switcher.value = value;
    },
    changeSecond (value, seq) {
      this.longSwitcher.value = value;
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
  },
  watch: {
    'switcher.value': function (newValue, oldValue) {
      console.log(newValue);
    },
    'longSwitcher.value': function (newValue, oldValue) {
      console.log(newValue);
    }
  }
});

