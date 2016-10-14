/**
 * Created by wanglei on 16/9/12.
 */
import Vue from 'vue';
import VueValidator from 'vue-validator';

import Tooltip from '../../directives/tooltips/tooltip';
import { email } from '../../utils/validators';

Vue.use(VueValidator);
Vue.use(Tooltip);

Vue.validator('email', email);

new Vue({
  name: 'validator-demo',

  el: 'body',

  data () {
    return {
      sex: '--'
    };
  },

  methods: {
    submit: function (e) {
      // validate manually
      var self = this;
      this.$validate(true, function () {
        if (self.$demo.invalid) {
          e.preventDefault();
          return;
        }
        alert('submit succeed!');
      });
    }
  },

  computed: {
    usernameErrorMessage: function () {
      if (this.$demo.username.required) {
        return 'username is required.';
      } else if (this.$demo.username.minlength) {
        return 'your username is too short.';
      } else if (this.$demo.username.maxlength) {
        return 'your username is too long.';
      }
    },

    ageErrorMessage: function () {
      if (this.$demo.age.min) {
        return 'your are too young.';
      } else if (this.$demo.age.max) {
        return 'your are too old.';
      }
    }
  }
});
