# Doughnut组件


# 组件概述

> 基于amcharts的图表，用于数据统计及展示，支持3d效果


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| data | Array| Yes |  | 组件初始化所需的数据 |
| titleField | String | Yes  |  | 标题所对应的源数据中的字段 |
| valueField | String | Yes  |  | 值所对应的源数据中的字段 |
| colorField | String | No  |  | 颜色所对应的源数据中的字段,若不传入则为随机颜色 |
| content | Object | No |  | 表盘下面的为title，中间加粗文字为name，中间不加粗文字为desc。 |
| show3d | String | No | false | 是否显示3d效果 |
| labelsEnabled | String | No | false | 是否显示每个碎片的label |
| labelRender | Function | No |  | label的重渲染函数，在labelsEnabled='true'时生效|
| legend | String | No | false | 是否显示legend |
| width | String | No | 100% | 表盘宽度，传入字符串类型的数字或百分比 |
| height | String | No | 100% | 表盘高度，传入字符串类型的数字或百分比，最小高度为300px |

## 2.Events \(事件\)

无

## 3.Methods \(方法\)

无

# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/amcharts-demo/index.html" target="_blank">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```html
<t-doughnut :data="doughnutData" title-field="country" value-field="visits" labels-enabled="false" legend="false" :label-render="labelFunction"
    :content="content">
</t-doughnut>
```

### js实例组件代码
```JavaScript
import Vue from 'vue';
import Doughnut from 'taurus/components/amcharts/doughnut';

new Vue({
  el: '#doughnutDiv',
  data: {
    doughnutData: [
      { 'country': 'USA', 'visits': 4252 },
      { 'country': 'China', 'visits': 1882 },
      { 'country': 'Japan', 'visits': 1809 },
      { 'country': 'Germany', 'visits': 1322 },
      { 'country': 'UK', 'visits': 1122 },
      { 'country': 'France', 'visits': 1114 },
      { 'country': 'India', 'visits': 984 },
      { 'country': 'Spain', 'visits': 711 },
      { 'country': 'Netherlands', 'visits': 665 },
      { 'country': 'Russia', 'visits': 580 },
      { 'country': 'South Korea', 'visits': 443 },
      { 'country': 'Canada', 'visits': 441 },
      { 'country': 'Brazil', 'visits': 395 },
      { 'country': 'Italy', 'visits': 386 },
      { 'country': 'Australia', 'visits': 384 },
      { 'country': 'Taiwan', 'visits': 338 },
      { 'country': 'Poland', 'visits': 328 }],
    content: {
      title: 'title for pie chart',
      name: 'pie name',
      desc: 'some description for name'
    }
  },
  components: {
    't-doughnut': Doughnut
  },
  methods: {
    /**
     * label重新渲染函数
     * @param pie 图表对象
     * @param label 原始label
     * @returns {string}
     */
    labelFunction: function (pie, label) {
      return label + 'test';
    }
  }
});
```
