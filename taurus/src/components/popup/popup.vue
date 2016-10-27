<template>
  <transition :name="popupTransitionMutaion">
    <div v-show="value" class="t-popup" :style="{'z-index': zIndex}" :class="[position ? 't-popup-' + position : '']">
      <slot></slot>
    </div>
  </transition>
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
    },
    popupTransitionMutaion () {
      return (this.popupTransition !== 'popup-fade') ? `popup-slide-${this.position}` : this.popupTransition;
    }
  },
  methods: {
    overlayClick () {
      if (this.clickOverlayClose) this.$emit('input', false);
      // if (this.clickOverlayClose) this.value = false;
    }
  }
};
</script>
