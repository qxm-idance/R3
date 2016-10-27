<template>
  <!--  @open="open" @close="close" -->
  <t-modal :click-overlay-close="false" v-model="value" :title="title" :size="size">
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
    value: {
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
      default: 'info' // 'info', 'success', 'error' ,'question'
    },
    onSure: {
      type: Function
    },
    onCancel: {
      type: Function
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    _type () {
      return {
        info: 'icon-document',
        success: 'icon-check',
        error: 'icon-reject',
        question: 'icon-question'
      }[this.type];
    }
  },
  methods: {
    cancel () {
      this.$emit('input', false);
      if (this.onCancel) this.onCancel();
      this.$emit('cancel');
    },
    sure () {
      this.$emit('input', false);
      if (this.onSure) this.onSure();
      this.$emit('sure');
    }
  }
};
</script>
