<style>
  .loading-show{
    display: block!important;
  }
</style>
<template>
  <div :class="['loading__overlay', {'loading-show':loadingState}]" v-show='loadingState'>
    <div class="loader--centered">
      <span class="loader__spinner">
         <i></i>
      </span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';

  var Loading = Vue.extend({
    data: function () {
      return {
        loadingState: false
      };
    },
    methods: {
      showLoading: function () {
        this.loadingState = true;
      },
      hideLoading: function () {
        this.loadingState = false;
      }
    },
    watch: {
      loadingState: function () {
        if (this.loadingState) {
          this.$dispatch('on-loading-visible');
        } else {
          this.$dispatch('on-loading-hidden');
        }
      }
    }
  });

  Vue.component('t-loading', Loading);

  module.exports = Loading;
</script>
