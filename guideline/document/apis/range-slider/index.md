# range-slider·组件


# 组件概述

>range-slider·组件，用于可拖拽滑块

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| rangeOptions | Object| Yes | null | 组件初始化参数 |
### 注: rangeOptions参数结构
```
rangeOptions: {
  isDrag: false,        //是否可拖拽
  rangeLabel: 'Months', //组件的lable
  min: 0,               //最小值
  max: 6,               //最大值
  step: 1,              //拖动步长
  start: 0,             //开始值
  end: 3                //结束值
}
```

## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| set-start |  | 拖动起始点回调 |
| set-end |  | 拖动结束点回调 |

## 3.Methods \(方法\)
无

# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/range-slider-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```
<div id="range-slider-wrap" class="sg-component__markup">
      <t-range-slider :range-options="rangeOptions"></t-range-slider>
      <article style="margin-top: 20px">
        <label>Range:</label>
        <span>{{range.start}}-{{range.end}}</span>
      </article>
      <article>
        <span>
        <label>start</label>
        <t-range-slider-select :options="options" default-val="0"  v-on:on-change="startChange" style="width:150px;display: inline-block"></t-range-slider-select>
        </span>

        <span style="margin-left:20px">
        <label>end</label>
        <t-range-slider-select :options="options" default-val="0"  v-on:on-change="endChange" style="width:150px;display: inline-block"></t-range-slider-select>
        </span>
      </article>
    </div>
    <!--range slider-->
  </div>
```

### js实例组件代码
```
new Vue({
  el: '#range-slider-wrap',
  components: {
    't-range-slider': rangeSlider,
    't-range-slider-select': select
  },
  data: {
    rangeOptions: {
      isDrag: false,
      rangeLabel: 'Months',
      min: 0,
      max: 6,
      step: 1,
      start: 0,
      end: 3
    },
    range: {
      start: 0,
      end: 3
    },
    options: [],
    defaultVal: ''

  },
  events: {
    'set-start': function (endValue) {
      this.range.start = endValue;
    },
    'set-end': function (endValue) {
      this.range.end = endValue;
    }
  },
  methods: {
    startChange: function (data) {
      this.range.start = data.value;
      this.rangeOptions.start = data.value;
      this.$broadcast('reset-start', data.value);
    },
    endChange: function (data) {
      this.range.end = data.value;
      this.rangeOptions.end = data.value;
      this.$broadcast('reset-end', data.value);
    }
  },
  created: function () {
    var _min = this.rangeOptions.min;
    var _max = this.rangeOptions.max;
    var _step = this.rangeOptions.step;
    for (var i = _min; i <= _max; i += _step) {
      var obj = {
        value: i,
        label: i + ' Month'
      };
      this.options.push(obj);
    }
    this.defaultVal = _min;
  }
});
```
