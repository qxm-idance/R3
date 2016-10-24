<template>
  <div v-show="show" class="t-popup" :style="{'z-index': zIndex}" :class="[position ? 't-popup-' + position : '']" :transition="popupTransition">
    <slot></slot>
  </div>
</template>

<script>
import Popup from './_index';
import { getZIndex } from '../../utils/common';

export default {
  mixins: [Popup],
  props: {
    clickOverlayClose: {
      type: Boolean,
      default: true
    },

    popupTransition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    zIndex () {
      return this.overlay ? '' : getZIndex();
    }
  },
  compiled () {
    if (this.popupTransition !== 'popup-fade') {
      this.popupTransition = `popup-slide-${this.position}`;
    }
  },

  methods: {
    overlayClick () {
      if (this.clickOverlayClose) this.show = false;
    }
  }
};
</script>
