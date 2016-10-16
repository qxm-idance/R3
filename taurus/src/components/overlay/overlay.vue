<template>
  <div class="t-overlay" @click="handlerClick" @touchmove="prevent" :style="style" transition="t-overlay-fade"></div>
</template>
<script>
import { getZIndex } from '../../utils/common';

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    };
  },
  computed: {
    style () {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      };
    }
  },
  methods: {
    prevent (event) {
      event.preventDefault();
      event.stopPropagation();
    },
    handlerClick () {
      if (this.onClick) {
        this.onClick();
      }
    }
  }
};
</script>
