<template>
  <transition name="t-modal-scale">
    <div :class="'t-modal modal-box__content ' + classes"  v-show="value">
      <div :class="'t-modal-header ' + hdBackCss">
        <slot name="header-icon"></slot>
        <div class="t-modal-title text-light text-size--24 leader--xlarge" v-if="title">
            {{title}}
        </div>
        <i :class="'modal-box__close-btn icon ' + closeIcon" v-if="!hideIconClose" @click="close"></i>
      </div>
      <div class="t-modal-body">
        <slot>
          <div v-if="msg" v-html="msg"></div>
        </slot>
      </div>
      <div class="t-modal-footer" v-if="!hideClose">
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from '../popup/popup';

const STYLE = `
  .t-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: .4;
    z-index: 1000;
  }
  .t-overlay-fade-transition {
    -webkit-transition: all 0 linear;
    transition: all 0 linear;
  }
  .t-overlay-fade-transition.t-overlay-fade-enter,
  .t-overlay-fade-transition.t-overlay-fade-leave {
    opacity: 0 !important;
  }

  .t-modal {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
    outline: none;
    margin: 0px auto;
    padding: 0;
    background-color: white;
    max-width:100vw;
    max-height:100vh;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 14px;
  }

  .t-modal.modal-box__content {
    display:block;
  }
  .t-modal-header {
    text-align: center;
    padding: 10px 0;
  }
  .t-modal-header .t-modal-title {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin: 0;
    font-weight: normal;
    color: #474a4f;
  }
  .t-modal-header + .t-modal-body {
    clear: both;
    padding-top: 0;
  }
  .t-modal-header div[slot=header-icon] {
    margin-top: 40px;
  }
  .t-modal-body {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 20px;
  }
  .t-modal.modal-box__content--full .t-modal-body{
      padding: 0;
  }
  .t-modal-footer {
    padding: 15px;
    min-height: 48px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
  }
  .t-modal-footer .t-button-fill,
  .t-modal-footer .t-button-raise {
    margin-left: 10px;
  }
  .t-modal-scale-transition {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .t-modal-scale-enter,
  .t-modal-scale-leave {
    opacity: 0;
  }
  .t-modal-scale-enter {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.1);
            transform: translate3d(-50%, -50%, 0) scale(1.1);
  }
  .t-modal-scale-leave {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);
            transform: translate3d(-50%, -50%, 0) scale(0.8);
  }
  .button-flex {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    margin: 0 5px;
    text-align: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .t-confirm-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .t-confirm-content .icon {
    color: #2196f3;
  }
  .t-confirm-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .t-confirm-content .icon + .t-confirm-text {
    margin-left: 12px;
  }


  .filter-transition {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 1;
  }

  .filter-enter {
    opacity: 0;
  }

  .filter-leave {
    opacity: 0;
  }

  .t-popup {
    position: fixed;
    background: #fff;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
  }

  .t-popup-top {
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
  }

  .t-popup-right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
  }
  .t-popup-bottom {
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
  }

  .t-popup-left {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
  }

  .popup-slide-top-transition,
    .popup-slide-right-transition,
    .popup-slide-bottom-transition,
    .popup-slide-left-transition {
      -webkit-transition: -webkit-transform .3s ease;
      transition: -webkit-transform .3s ease;
      transition: transform .3s ease;
      transition: transform .3s ease, -webkit-transform .3s ease;
    }

    .popup-slide-top-enter,
    .popup-slide-top-leave {
      -webkit-transform: translate3d(-50%, -100%, 0);
              transform: translate3d(-50%, -100%, 0);
    }

    .popup-slide-right-enter,
    .popup-slide-right-leave {
      -webkit-transform: translate3d(100%, -50%, 0);
              transform: translate3d(100%, -50%, 0);
    }

    .popup-slide-bottom-enter,
    .popup-slide-bottom-leave {
      -webkit-transform: translate3d(-50%, 100%, 0);
              transform: translate3d(-50%, 100%, 0);
    }

    .popup-slide-left-enter,
    .popup-slide-left-leave {
      -webkit-transform: translate3d(-100%, -50%, 0);
              transform: translate3d(-100%, -50%, 0);
    }

    .popup-fade-transition {
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }

    .popup-fade-enter,
    .popup-fade-leave {
      opacity: 0;
    }
  `;
const SIZE_LARGE = 'lg';
const SIZE_SMALL = 'sm';
const CSS_LARGE = 'modal-box--size-large';
const CSS_SMALL = 'modal-box--size-small';
const CSS_GRADIENT = 'gradient-line';
const CSS_PRELIGHT = 'pre-lightbox section--negative';
const CSS_ICON_REJECT = 'icon-reject';
const CSS_ICON_REJECT_PRE = 'icon-close-cross';
const CSS_FULL = 'modal-box__content--full';
const CSS_FULL_HD = 'padding-whole--large padding-toright--huge box--greyed rel border--bottom';
const CSS_ICON_BK = 'circle-background white with-border color-gray';
export default {
  mixins: [Popup],
  props: {
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    clickOverlayClose: {
      type: Boolean,
      default: true
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    hideIconClose: {
      type: Boolean,
      default: true
    },
    special: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: SIZE_SMALL
    },
    preLight: {
      type: Boolean,
      default: false
    },
    fullButton: {
      type: Boolean,
      default: false
    },
    fullHeader: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('input', false);
    },
    overlayClick () {
      if (this.clickOverlayClose) this.$emit('input', false);
    },
    escPress () {
      this.$emit('input', false);
    }
  },
  computed: {
    classes: function () {
      var classes = '';
      if (this.class) {
        classes += ' ' + this.class;
      }
      if (this.size === SIZE_LARGE) {
        classes += ' ' + CSS_LARGE;
      } else {
        classes += ' ' + CSS_SMALL;
      }
      if (!this.special) {
        classes += ' ' + CSS_GRADIENT;
      }
      if (this.preLight) {
        classes += ' ' + CSS_PRELIGHT;
      }
      if (this.fullButton) {
        classes += ' ' + CSS_FULL;
      }
      return classes;
    },
    closeIcon: function () {
      var classes = '';
      if (this.class) {
        classes += ' ' + this.class;
      }
      if (this.preLight || this.fullButton || this.fullHeader) {
        classes += ' ' + CSS_ICON_REJECT_PRE;
      } else {
        classes += ' ' + CSS_ICON_REJECT;
      }
      if (this.fullHeader) {
        classes += ' ' + CSS_ICON_BK;
      }
      return classes;
    },
    hdBackCss: function () {
      var classes = '';
      if (this.class) {
        classes += ' ' + this.class;
      }
      if (this.fullHeader) {
        classes += ' ' + CSS_FULL_HD;
      }
      return classes;
    }
  },
  beforeCreate () {
    let fontEl = document.createElement('style');
    document.documentElement.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = STYLE;
  }
};
</script>
