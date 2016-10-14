/**
 * Created by zengjie on 16/9/22.
 */
/**
 * Created by zengjie on 16/9/18.
 */
import TAutocomplete from 'ai-taurus';
new Vue({
  el: '#autocomplete-wrap',
  components: {
    't-autocomplete': TAutocomplete
  },
  data: {
    // delay: 1000,
    disabled: false,
    autoFocus: true,
    source: [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
    ]
    // source: 'fakeData.json' 服务调用暂时不支持
  },
  events: {
    'change': function (value) {
      console.log('change:' + value);
    },
    'close': function () {
      console.log('close dropdown menu');
    },
    'open': function () {
      console.log('open dropdown menu');
    },
    'select': function (selected) {
      console.log(selected);
    }
  },
  methods: {
    setDisabled: function (e) {
      var _action = e.target.getAttribute('data-action');
      if (_action === 'enable') {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
      this.$broadcast('set-disabled', this.disabled);
      console.log(this.disabled);
    }
  }
});