import {TBreadcrumbs} from '../../utils/taurus';

new Vue({
  name: 'breadcrumbs-demo',

  el: '#breadcrumbs',

  components: {
    TBreadcrumbs
  },

  data () {
    return {
      breadcrumbs: [{
        link: '#/',
        text: 'home'
      }, {
        link: '#/',
        text: 'mobiler'
      }, {
        link: '#/',
        text: 'apple'
      }]
    };
  }
});
