<template>
  <t-modal :click-overlay-close="false" :show.sync="show" :title="title" :hide-close="hideClose">
    <div class="t-alert-content" :class="{'info': type === 'info',
                                        'warning': type === 'warning',
                                        'success': type === 'success',
                                        'error': type === 'error'}">
      <span class="t-alert-text">{{msg}}</span>
    </div>
    <slot name="footer">
      <button slot="footer" text="确定" @click="sure">确定</button>
    </slot>
  </t-modal>
</template>

<script>
import TModal from './modal';

export default {
  components: {
    TModal
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    hideClose: {
      type: Boolean,
      default: true
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '' // 'info', 'success', 'warning', 'error'
    },
    onSure: {
      type: Function
    }
  },
  methods: {
    sure () {
      this.show = false;
      if (this.onSure) this.onSure();
      this.$emit('sure');
    }
  }
};
</script>
