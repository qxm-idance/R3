import Vue from 'vue';
import Pager from 'taurus/components/pager/pager';

new Vue({
  el: 'body',
  components: {
    't-pager': Pager
  },
  data: function () {
    return {
      currentPageNumber: 1,
      currentPageSize: 5,
      currentDataCount: 90
    };
  },
  methods: {
    changeDataCount: function () {
      this.currentDataCount += 10;
      this.$refs.myPager.dataCount = this.currentDataCount;
    },
    changePageSize: function () {
      var pageSize = this.$refs.myPager.pageSize;
      this.$refs.myPager.pageSize = (pageSize === 5 ? 8 : 5);
      this.currentPageSize = this.$refs.myPager.pageSize;
    },
    pageChanged: function (pageNumber, pageSize) {
      this.currentPageNumber = pageNumber;
      console.log('page-changed事件被触发, 当前页号为: ' + pageNumber + '; 每页显示记录数为: ' + pageSize);
    },
    gotoPage7: function () {
      this.$refs.myPager.pageNumber = 7;
      // this.$refs.myPager.activatePage(7); // 也可以使用这个方法
      this.currentPageNumber = 7;
    },
    prev: function () {
      this.$refs.myPager.prev();
    },
    next: function () {
      this.$refs.myPager.next();
    }
  }
});
