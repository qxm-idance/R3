# Bars Chart组件


# 组件概述

> 图表组件，柱状图


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| enableCategoryLegend | Boolean| no | false | 由 Category 生成 Legend Data |
| legendData | Array | No  | 无 | 图例数据 |
| legendPosition | String | No | 'top' | Legend 位置，暂不支持 'absolute' |
| legendAlign | String | No | 'right' | Legend Item 对齐方式 |
| legendMaxColumns | Number | No | 3 | Legend Item 行最大列数 |
| legendConf | Object | No | 无 | 当上面提供的 Legend 可选项无法满足要求时，请传递完整的 legendConf 信息\(将忽略上述所有的可选项\) |


## 2.Events \(事件\)

无

## 3.Methods \(方法\)

无


# 组件Demo示例

## 1.组件Demo示例链接

[组件Demo示例链接](/examples/amcharts-demo/index.html)

## 2.组件Demo代码示例
### html代码
```
<t-bars v-if="barsDataProvider"
              :data-provider="barsDataProvider"
              category-field="country"
              value-field="visits"
              :enable-category-legend="enableCategoryLegend"
              value-unit="km">
      </t-bars>
```

### js实例组件代码
```
import Vue from 'vue';
import TBars from 'taurus/components/amcharts/bars';
import TLine from 'taurus/components/amcharts/line';

const CHART_TYPE = {
  bars: 'Bars',
  barsWithLegend: 'Bars with Legend',
  line: 'Line'
};

new Vue({
  el: '#serial',

  components: {
    TBars,
    TLine
  },

  data () {
    return {
      currentChart: '',
      barsDataProvider: null,
      lineDataProvider: null,
      loadingData: false,
      enableCategoryLegend: false
    };
  },

  methods: {
    fillBarsData: function () {
      this.barsDataProvider = [{
        'country': 'USA',
        'visits': 3025,
        'color': '#FF0F00'
      }, {
        'country': 'China',
        'visits': 1882,
        'color': '#FF6600'
      }, {
        'country': 'Japan',
        'visits': 2009,
        'color': '#FCDF02'
      }, {
        'country': 'Germany',
        'visits': 1322,
        'color': '#FCD202'
      }, {
        'country': 'France',
        'visits': 1114,
        'color': '#B0DE09'
      }, {
        'country': 'Russia',
        'visits': 580,
        'color': '#2A0CD0'
      }];
    },

    clearBarsData: function () {
      this.barsDataProvider = null;
    },

    fillLineData: function () {
      this.lineDataProvider = [{
        'date': '2012-01',
        'value': 130
      }, {
        'date': '2012-02',
        'value': 110
      }, {
        'date': '2012-03',
        'value': 150
      }, {
        'date': '2012-04',
        'value': 160
      }, {
        'date': '2012-05',
        'value': 180
      }, {
        'date': '2012-06',
        'value': 130
      }, {
        'date': '2012-07',
        'value': 220
      }, {
        'date': '2012-08',
        'value': 230
      }, {
        'date': '2012-09',
        'value': 200
      }, {
        'date': '2012-10',
        'value': 170
      }, {
        'date': '2012-11',
        'value': 160
      }, {
        'date': '2012-12',
        'value': 180
      }];
    },

    clearLineData: function () {
      this.lineDataProvider = null;
    }
  },

  watch: {
    currentChart: function (val, oldVal) {
      // clear data provider for recreating charts components
      this.clearBarsData();
      this.clearLineData();

      if (val === '请选择 Amchart 类型') {
        return;
      }

      this.enableCategoryLegend = val === 'Bars with Legend';

      this.loadingData = true;

      let self = this;
      setTimeout(function () {
        if (val === CHART_TYPE.line) {
          self.fillLineData();
        } else {
          self.fillBarsData();
        }
        self.loadingData = false;
      }, 2000);
    }
  }
});
```
