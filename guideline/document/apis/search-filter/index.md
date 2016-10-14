# Search-Filter组件


# 组件概述

> 搜索框组件，用于搜索过滤相应内容。


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| delay | Number | No | 300 | 默认延迟300毫秒执行搜索，可以传入其他值来控制延迟时间 |
| isSmall | Boolean | No  | true | 组件尺寸大小，true为小尺寸，false为大尺寸 |
| isInline | Boolean | No | true | 控制显示模式，当值为true时，搜索框的搜索按钮隐藏，当值为false时，搜索框搜索按钮显示 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| search | 无 | 输入文字搜索时触发回调 |

## 3.Methods \(方法\)

无


# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/examples/search-filter-demo/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<div id="search-small-inline-wrap" class="sg-component__markup">
    <t-search-filter :is-small="isSmall" :is-inline="isInline"></t-search-filter>
</div>
```

### js实例组件代码
```
import {SearchFilter} from 'aii-taurus';

new Vue({
  el: '#search-small-inline-wrap',
  components: {
    't-search-filter': SearchFilter
  },
  data: {
    isSmall: true,
    isInline: true
  },
  events: {
    'search': function (value) {
      console.log('search small inline field trigger search :' + value);
    }
  }
});
```
