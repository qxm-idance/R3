# scroll-to·插件


# 组件概述

> scroll-to插件，用于页面滚动

# 插件API

## 1.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| $scollTo | $scollTo\(el,duration,callback,context\) |插件页面滚动 |
### 注: 参数详解
#### el : 滚动到目标地址(可以是DOM元素,也可以是整数单位:px)
#### duration : 动画间隔时间
#### callback : 滚动结束后回调
#### context : 上下文对象(如果传入必须为原生DOM对象，默认为window)


# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/scroll-to-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```
<div class="form-row">
  <button v-on:click="gotoMyTag" class="button button--action">滚动到"我的位置"</button>
  <button v-on:click="goto910" class="button button--action">滚动到距页面顶端910px处</button>
</div>

<div class="block__header leader--large trailer--large">
  <h2 class="title--small" id="myTag">我的位置<a href="javascript:void(0)" v-on:click="gotoTop">(点我回到顶端)</a></h2>
</div>
```

### js实例组件代码
```
Vue.use(ScollToPlugin);

new Vue({
  el: 'body',
  methods: {
    gotoMyTag: function (event) {
      var el = document.getElementById('myTag');
      this.$scollTo(el, 500); // 滚动到id为myTag的元素处
    },
    gotoTop: function (event) {
      this.$scollTo(0, 500); // 滚动到页面顶端
    },
    goto910: function (event) {
      this.$scollTo(910); // 滚动到距页面顶端910px处
    }
  }
});

```
