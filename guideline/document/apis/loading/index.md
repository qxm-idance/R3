# Loading·组件


# 组件概述

>Loading组件，用于请求服务等待数据返回时

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| response-data | Array| Yes | [] | 组件初始化所需的数据 |
| label | String | No  | label | 组件显示的数据名称，如果传入的数据response-data中的数据名称与参数label的默认值不匹配，就需要设置label为传入数据中对应项。|
| value | String | No | value | 组件显示的数据值，如果传入的数据response-data中的数据名称与参数value的默认值不匹配，就需要设置value为传入数据中对应项。 |
| placeholder | String | No | Please select! | 组件初始化时默认显示文字\(功能类似Input中的placeholder\) |
| defaultvalue | String | No | NULL | 组件初始化时的默认值 |
| disabled | Boolean | No | false | 组件是否禁用 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| on-loading-visible |  | 显示Loading时触发 |
| on-loading-hidden |  | 隐藏Loading时触发 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| showLoading |  | 重载组件数据\(数据结构需与初始化数据保持一致\) |
| hideLoading |  | 设置组件的值 |


# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/loading-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```
<div id="loading-wrapper" class="container">
  <div class="block__header leader--large trailer--large">
    <h2 class="title--medium">加载-loading</h2>
  </div>
  <div class="form-row">
    <button @click="showLoading" class="button button--action">显示loading</button>
    <button @click="hiddenLoading" class="button button--action">隐藏loading</button>
  </div>
  <div style="width: 360px;height: 360px;margin: 50px auto 0;position: relative">
    <t-loading @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden" v-ref:my-loading></t-loading>
  </div>
</div>
```

### js实例组件代码
```
new Vue({
  name: 'loading-demo',
  el: 'body',
  components: {
    TLoading
  },
  data: {
    isShow: true
  },
  methods: {
    showLoading: function () {
      this.$refs.myLoading.showLoading();
    },
    hiddenLoading: function () {
      this.$refs.myLoading.hideLoading();
    },
    onLoadingVisiable: function () {
      console.log('执行onLoadingVisiable回调');
    },
    onLoadingHidden: function () {
      console.log('执行onLoadingHidden回调');
    }
  }
});

```
