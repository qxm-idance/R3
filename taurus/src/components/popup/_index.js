import PopupManager from './popup-manager';

export default {
  props: {
    value: {
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
      if (this.value && this.overlay) {
        PopupManager.open(this);
      }
    });
  },
  destroyed () {
    this.$nextTick(function () {
      if (this.value && this.overlay) {
        PopupManager.close(this);
      }
    });
  },
  watch: {
    'value' (val) {
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
