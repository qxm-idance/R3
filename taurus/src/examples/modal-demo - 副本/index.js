import { TAlert, TConfirm, TModal } from '../../utils/taurus';

new Vue({
  el: '#container',
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
      confirm2: {
        show: false
      },
      loginModal: false,
      loginModel: {
        username: '',
        password: ''
      },
      showSpeState0: false,
      showSpeState1: false,
      showFormState: false,
      fullModalState0: false,
      fullModalState1: false
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
    handlerCancel () {
      alert('点了取消');
      this.alert.show = false;
    },
    showConfirm2 (type) {
      this.confirm2 = {
        title: 'Remove Agreement',
        msg: 'Are you sure you want to remove the agreement from your cart',
        show: true
      };
    },
    act1 () {
      this.confirm2.show = false;
      alert('点了btn1');
    },
    act2 () {
      this.confirm2.show = false;
      alert('点了btn2');
    },
    customShow () {
      this.loginModal = true;
    },
    loginHandler () {
      alert(JSON.stringify(this.loginModel));
      this.loginModal = false;
    },
    showSpecial0 () {
      this.showSpeState0 = true;
    },
    showSpecial1 () {
      this.showSpeState1 = true;
    },
    test () {
      this.showSpeState0 = false;
    },
    showForm () {
      this.showFormState = true;
    },
    formSend () {
      this.showFormState = false;
    },
    fullModal0 () {
      this.fullModalState0 = true;
    },
    full0No () {
      this.fullModalState0 = false;
    },
    full0Yes () {
      this.fullModalState0 = false;
    },
    fullModal1 () {
      this.fullModalState1 = true;
    },
    full1No () {
      this.fullModalState1 = false;
    },
    full1Yes () {
      this.fullModalState1 = false;
    }
  }
});
