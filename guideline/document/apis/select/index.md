# Select组件


# 组件概述

> 下拉列表框


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| options | Array | Yes | [] | 下拉选项,数据格式如：[{label: '1', value: 1}, {label: '2', value: 2}] |
| defaultVal | String | false |  | 默认值 |
| size | String | false |  | 设置下拉框尺寸，当该值设为small时，显示小尺寸的下拉框|
| disabled | Boolean | false | false | 是否禁用 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| on-change |  | 下拉框的值发生变化时，触发该事件 |


## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| selectFirst |  | 选中第一个选项 |
| disable |  | 禁用下拉框 |
| enable |  | 启用下拉框 |
| resetSelect |  | 重设为初始值 |
| getValue |  | 获取选中选项的值 |
| getText |  | 获取选中选项的文本 |
| getSelected |  | 获取选中的选项，返回option对象:{text: 'text', value: 'val'} |


# 组件Demo示例

## 1.组件Demo示例链接

[组件Demo示例链接](/examples/select-demo/index.html)

## 2.组件Demo代码示例
### html代码
```
<t-select :options="options" default-val="22" :disabled="disabled" v-on:on-change="dataChange" style="width:150px;"></t-select>
```

### js实例组件代码
```
import Vue from 'vue';
import Select from 'taurus/components/select/select';

var vm = new Vue({
  el: 'body',
  components: {
    't-select': Select
  },
  data: function () {
    return {
      disabled: false,
      options: [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}, {label: '4', value: 4}],
      selectVal: '22'
    };
  },
  methods: {
    dataChange: function () {
      console.log('data changed');
    }
  }
});
```
