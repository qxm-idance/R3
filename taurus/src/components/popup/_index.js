import PopupManager from './popup-manager';

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.6
    },
    overlayColor: {
      type: String,
      default: '#000'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (this.show && this.overlay) {
        PopupManager.open(this);
      }
    });
  },
  destroyed () {
    this.$nextTick(function () {
      if (this.show && this.overlay) {
        PopupManager.close(this);
      }
    });
  },
  data () {
    return {
      showCtrol: false
    };
  },
  created () {
    console.log('1');
    this.showCtrol = this.show;
  },
  // computed: {
  //   close: function () {
  //     this.showCtrol = false;
  //   },
  //   open: function () {
  //     this.showCtrol = true;
  //   }
  // },
  watch: {
    'showCtrol' (val) {
      // console.log(val);
      if (val && this.overlay) {
        PopupManager.open(this);
        this.$emit('open');
      } else {
        PopupManager.close(this);
        this.$emit('close');
      }
    }
  },
  beforeDestroy () {
    PopupManager.close(this);
  }
};
