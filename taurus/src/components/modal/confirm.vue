<template>
  <t-modal :click-overlay-close="false" :show.sync="show" :title="title" class="modal-box--size-small">
    <div class="modal-box__icon-box modal-box__icon-box--blue trailer" slot="header-icon">
      <i class="icon" :class="_type"></i>
    </div>
    <div class="t-confirm-content">
      <slot name="body">
        <span class="t-confirm-text" v-html="msg"></span>
      </slot>
    </div>
    <slot name="footer" slot="footer">
        <button class="button button--default button-flex" @click="cancel">Cancel</button>
        <button class="button button--action  button-flex" @click="sure">Sure</button>
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
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info' // 'info', 'success', 'error'
    },
    onSure: {
      type: Function
    },
    onCancel: {
      type: Function
    }
  },
  computed: {
    _type () {
      return {
        info: 'icon-document',
        success: 'icon-check',
        error: 'icon-reject'
      }[this.type];
    }
  },
  methods: {
    cancel () {
      this.show = false;
      if (this.onCancel) this.onCancel();
      this.$emit('cancel');
    },
    sure () {
      this.show = false;
      if (this.onSure) this.onSure();
      this.$emit('sure');
    }
  }
};
</script>
