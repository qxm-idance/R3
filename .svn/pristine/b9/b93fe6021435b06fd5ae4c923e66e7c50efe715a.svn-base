# pager·组件


# 组件概述

>pager组件，用于数据分页

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| dataCount | Number| No | 0 | 数据总数 |
| pageSize | Number | No  | 5 | 每页数据条数|
| pageNumber | Number | No | 1 | 当前页数 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| page-changed |  | 当前页数变化时触发|

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| prev | 无 | 上一页 |
| next | 无 | 下一页 |
| activatePage | pageNumber | 点击页数 |



# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/pager-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```
<div class="container">
  <div class="block__header leader--large trailer--large">
	<h2 class="title--medium">翻页组件演示</h2>
  </div>
  <div class="form-row">
	<button v-on:click="changePageSize" class="button button--action">每页记录数改为{{currentPageSize === 5 ? 8 : 5}}条</button>
	<button v-on:click="gotoPage7" class="button button--action">跳转到第7页</button>
	<button v-on:click="changeDataCount" class="button button--action">增加10条记录</button>
	<button v-on:click="prev" class="button button--action">前一页</button>
	<button v-on:click="next" class="button button--action">后一页</button>
  </div>
  <div class="form-row">
	<t-pager :data-count.sync="90" v-on:page-changed="pageChanged" v-ref:my-pager></t-pager>
  </div>
  <div class="form-row">
	<span>共{{currentDataCount}}条记录 ; 每页记录数为{{currentPageSize}}条 ; 当前是第 {{currentPageNumber}} 页</span>
  </div>
</div>
```

### js实例组件代码
```
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

```
