import { TAlert, TConfirm, TModal } from '../../utils/taurus';

new Vue({
  el: document.body,
  components: {
    TAlert,
    TConfirm,
    TModal
  },
  data () {
    return {
      showMoal0State: false,
      showMoal1State: false,
      alert: {
        show: false
      },
      confirm: {
        show: false
      },
      loginModal: false,
      loginModel: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    showMoal0 () {
      this.showMoal0State = true;
    },
    showMoal1 () {
      this.showMoal1State = true;
    },
    showAlert () {
      this.alert = {
        title: '提示',
        msg: '这是普通提示信息',
        show: true
      };
    },
    showConfirm (type) {
      this.confirm = {
        title: 'Remove Agreement',
        msg: '<p class="text--center">Are you sure you want to remove the agreement from your cart? <br> The atreement cleared</p>',
        show: true
      };
    },
    handlerSure () {
      alert('点了确定');
      this.alert.show = false;
    },
    customShow () {
      this.loginModal = true;
    },
    loginHandler () {
      alert(JSON.stringify(this.loginModel));
      this.loginModal = false;
    }
  }
});
