# Breadcrumb组件


# 组件概述

> 面包屑组件，常用于页面跳转历史路径索引。


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| crumbs | Array| Yes | [] | 组件初始化所需的数据 |

## 2.Events \(事件\)

无

## 3.Methods \(方法\)

无

# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/breadcrumbs-demo/index.html" target="_blank">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<t-breadcrumbs :crumbs="breadcrumbs"></t-breadcrumbs>
```

### js实例组件代码
```
import Vue from 'vue';
import TBreadcrumbs from 'taurus/components/breadcrumbs/breadcrumbs';

new Vue({
  name: 'breadcrumbs-demo',

  el: 'body',

  components: {
    TBreadcrumbs
  },

  data () {
    return {
      breadcrumbs: [{
        link: '#/',
        text: 'home'
      }, {
        link: '#/',
        text: 'mobiler'
      }, {
        link: '#/',
        text: 'apple'
      }]
    };
  }
});
```