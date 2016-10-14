import {TModalBox, TButton} from '../../utils/taurus';

new Vue({
  el: '#defaultModal',
  components: {
    TModalBox
  },
  data: {
    showModal: false,
    sizeModal: 'large'
    // 默认是'samll',对应的样式是modal-box--size-small
  },
  events: {
    'modal-opend': function () {
      console.log('modal-box is opend');
    },
    'modal-closed': function () {
      console.log('modal-box is closed');
    }
  }
});

new Vue({
  el: '#actionButtonModal',
  components: {
    TModalBox,
    TButton
  },
  data: {
    showActionModal: false,
    sizeModal: 'large'
  },
  methods: {
    close: function () {
      // 通过子组件的props里面的属性来关闭
      this.showActionModal = false;
    },
    onOk: function () {
      this.close();
    },
    onCancel: function () {
      // 通过v-ref通信来访问子组件的方法
      this.$refs.modal.close();
    }
  },
  events: {
    // 时间监听
    'modal-opend': function () {
      console.log('modal-box is opend');
    },
    'modal-closed': function () {
      console.log('modal-box is closed');
    }
  }
});
