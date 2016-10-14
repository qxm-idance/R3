# Gauge组件


# 组件概述

> 基于amcharts的表盘，用于数据统计及展示


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| data | Array| Yes | [] | 组件初始化所需的数据 |
| value | Number | No  | 0 | 组件所代表的值，与组件表盘指针一致 |
| maxValue | Number | Yes  |  | 组件表盘所能显示的最大值 |
| step | Number | No  | 1 | 组件表盘分刻度依据 |
| title | String | No |  | 表盘组件标题 |
| color | String | No | #DB5451 | 表盘外环颜色.若传入的数据中 没有此字段，将启用从父组件中传入的颜色参数 |
| width | String | No | 100% | 表盘宽度，传入字符串类型的数字或百分比 |
| height | String | No | 100% | 表盘高度，传入字符串类型的数字或百分比，最小高度为300px |

## 2.Events \(事件\)

无

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| setValue | \(value\) | 设置组件的值 |

# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/amcharts-demo/index.html" target="_blank">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码

```html
<t-gauge :data="multiValueData" :max-value="90" :step="10" :value="50" 
    title="title for multiValue gauge">
</t-gauge>
<t-gauge :data="lowValueData" :max-value="5" :step="1" :value="testValue" :title="lowValueTitle"
    v-ref:low-gauge>
</t-gauge>
<t-gauge :data="highValueData" :max-value="1200" :step="240" :value="500" :title="highValueTitle"
        color="green">
</t-gauge>
```

### js实例组件代码
```JavaScript
import Vue from 'vue';
import Gauge from 'taurus/components/amcharts/gauge';
new Vue({
  el: '#gaugeDiv',
  data: {
    multiValueData: [
      { 'color': '#84b761', 'endValue': 30, 'startValue': 0 },
      { 'color': '#fdd400', 'endValue': 60, 'startValue': 30 },
      { 'color': '#cc4748', 'endValue': 90, 'startValue': 60 }
    ],
    lowValueData: [
      { 'endValue': 2.5, 'startValue': 0 },
      { 'endValue': 5, 'startValue': 2.5 }
    ],
    highValueData: [
      { 'endValue': 600, 'startValue': 0 },
      { 'endValue': 1200, 'startValue': 600 }
    ],
    lowValueTitle: 'title for low value gauge',
    testValue: 3.5
  },
  components: {
    't-gauge': Gauge
  }
});
```
