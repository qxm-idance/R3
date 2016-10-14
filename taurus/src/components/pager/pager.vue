<template>
  <div class="pager pager--default" style="display:inline-block">
    <a class="pager__button previous" :disabled="pageNumber === 1" v-on:click="prev">previous</a>
    <span>
      <template v-for="pn in nums" track-by="$index">
        <a href="javascript:void(0)" class="pager__button" v-if="pn === -1" disabled>...</a>
        <a href="javascript:void(0)" class="pager__button" v-bind:class="(pageNumber === pn) ? 'current' : ''" :disabled="pageNumber === pn" v-on:click="activatePage(pn)" v-else>{{ pn }}</a>
      </template>
    </span>
    <a class="pager__button next" :disabled="pageNumber === pageCount" v-on:click="next">next</a>
  </div>
</template>
<script>
import Vue from 'vue';

var Pager = Vue.extend({
  props: {
    dataCount: {
      default: 0,
      type: Number,
      validator: function (value) {
        return value >= 0;
      },
      coerce: function (value) {
        return parseInt(value);
      },
      twoWay: true
    },
    pageSize: {
      default: 5,
      type: Number,
      validator: function (value) {
        return value >= 1;
      },
      coerce: function (value) {
        return parseInt(value);
      },
      twoWay: true
    },
    pageNumber: {
      default: 1,
      type: Number,
      twoWay: true,
      coerce: function (value) {
        return parseInt(value);
      }
    }
  },
  watch: {
    'pageSize': function (newValue, oldValue) {
      this.pageNumber = 1; // 复位到第一页
      this.$dispatch('page-changed', this.pageNumber, this.pageSize);
    },
    'dataCount': function (newValue, oldValue) {
      this.pageNumber = 1; // 复位到第一页
    },
    'pageNumber': function (newValue, oldValue) {
      this.$dispatch('page-changed', this.pageNumber, this.pageSize);
    }
  },
  methods: {
    prev: function () {
      if (this.pageNumber > 1) {
        this.pageNumber--;
      }
    },
    next: function () {
      if (this.pageNumber < this.pageCount) {
        this.pageNumber++;
      }
    },
    activatePage: function (pn) {
      if (pn >= 1 && pn <= this.pageCount) {
        this.pageNumber = pn;
      }
    }
  },
  computed: {
    pageCount: function () {
      var count = parseInt(this.dataCount / this.pageSize);
      if (this.dataCount % this.pageSize > 0) {
        count++;
      }
      return count;
    },
    /**
     * 生成页号
     * @return {Array} 返回计算后的显示页号，如果某页需要显示为省略号则此数组元素值为-1
     */
    nums: function () {
      var i, count;
      var pageNumber = this.pageNumber;
      var overflow = 5; // 必须是奇数
      var half = 2; // overflow的一半
      var arr = [];
      var pageCount = this.pageCount;

      if (pageCount === 0) {
        return arr;
      }
      if (pageNumber <= overflow) {
        count = pageNumber + 1;
        for (i = 1; i < count; i++) {
          arr.push(i);
        }
      } else if (pageNumber > pageCount - half) {
        arr.push(1, -1);
        count = pageNumber + 1;
        for (i = pageCount - overflow + 1; i < count; i++) {
          arr.push(i);
        }
      } else {
        arr.push(1, -1, pageNumber - half, pageNumber - 1, pageNumber);
      }
      count = pageCount - overflow;
      if (pageNumber > count) {
        count = pageCount + 1;
        for (i = pageNumber + 1; i < count; i++) {
          arr.push(i);
        }
      } else if (pageNumber <= half) {
        count = overflow + 1;
        for (i = pageNumber + 1; i < count; i++) {
          arr.push(i);
        }
        arr.push(-1, pageCount);
      } else {
        arr.push(pageNumber + 1, pageNumber + half, -1, pageCount);
      }
      return arr;
    }
  }
});

Vue.component('t-pager', Pager);

module.exports = Pager;
</script>
