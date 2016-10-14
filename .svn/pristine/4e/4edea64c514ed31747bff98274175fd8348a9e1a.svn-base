<template>
  <div class="section--footer__breadcrumb">
    <ul>
      <li v-for="crumb in crumbs">
        <a :href="crumb.link">{{crumb.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumbs',

    props: {
      crumbs: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style>
</style>
