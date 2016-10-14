# Status-Message组件


# 组件概述

> 提示信息组件，分为info，success，alert，error四种类型。


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | String | No | info | 提示信息的类型，默认值为info类型，一共是四种类型，分别是info，success，alert，error |
| icon | Boolean | No  | true | 组件是否显示图标，默认值为true |
| close | Boolean | No | true | 组件是否显示关闭按钮，默认值为true |
| content | String | No | '' | 组件中提示信息所显示的文字，默认值为空字符串 |
| position | String | No | bottom | 组件初始化时提示信息所显示的位置，默认为bottom，一共是两种类型，分别是bottom，top |


## 2.Events \(事件\)

无

## 3.Methods \(方法\)

无


# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/examples/status-message/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<!--Message info-->
<button v-on:click="info" class="button button--action">Info</button>
<!--Message success-->
<button v-on:click="success" class="button button--action">Success</button>
<!--Message alert-->
<button v-on:click="alert" class="button button--action">Alert</button>
<!--Message error-->
<button v-on:click="error" class="button button--action">Error</button>
```

### js实例组件代码
```
import {StatusMessagePlugin} from 'aii-taurus';

Vue.use(StatusMessagePlugin);

new Vue({
  el: 'body',
  methods: {
    info: function () {
      var option = {
        el: '',
        type: 'info',
        icon: true,
        close: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      };
      this.$message(option, function () {
        console.log('info ok...');
      });
    },
    success: function () {
      var option = {
        el: '',
        type: 'success',
        icon: true,
        close: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      };
      this.$message(option);
    },
    alert: function () {
      var option = {
        el: '',
        type: 'alert',
        icon: true,
        close: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      };
      this.$message(option);
    },
    error: function () {
      var option = {
        el: '',
        type: 'error',
        icon: true,
        close: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      };
      this.$message(option);
    }
  }
});
```
