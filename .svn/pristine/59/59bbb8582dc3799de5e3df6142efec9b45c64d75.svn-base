<template>
  <div class="gauge" :style="[{width: width, height: height, minHeight: '300px', overFlow: 'hidden', display: 'inline-block'}]"></div>
</template>

<script>
  import Vue from 'vue';
  const DEFAULT_BAND_THICKNESS = '85%';
  const KEY_BAND_THICKNESS = 'innerRadius';
  const KEY_COLOR = 'color';
  let Gauge = Vue.extend({
    name: 'taurus-amcharts-gauge',
    props: {
      // 源数据
      data: {
        type: Array
      },
      // 组件值
      value: {
        type: Number,
        default: 0
      },
      // 最大值
      maxValue: {
        type: Number
      },
      // 标题
      step: {
        type: Number,
        default: 1
      },
      // 标题
      title: {
        type: String,
        default: ''
      },
      // 颜色
      color: {
        type: String,
        default: '#DB5451'
      },
      // 宽度
      width: {
        type: String,
        default: '100%',
        coerce: function (width) {
          return width.indexOf('%') < 0 ? (width + 'px') : width;
        }
      },
      // 高度
      height: {
        type: String,
        default: '100%',
        coerce: function (height) {
          return height.indexOf('%') < 0 ? (height + 'px') : height;
        }
      }
    },
    ready: function () {
      let chartContainer = this.$el;
      // 初始化数据，加入颜色，半径等参数
      this._initData();
      // 表盘title设置
      let labels = [{
        'x': '50%',
        'y': '85%',
        'color': '#757575',
        'bold': true,
        'size': 16,
        'align': 'middle',
        'text': this.title
      }];
      // 表盘指针设置
      let arrows = [{
        'alpha': 1,
        'nailRadius': 0,                  // 图钉半径
        'innerRadius': 0,
        'radius': '50%',                  // 指针长度
        'value': this.value,               // 指向的刻度值
        'startWidth': 8
      }];
      // 表盘主体显示
      let axes = [{
        'bands': this.data,              // 源数据
        'bandOutlineThickness': 2,       // band外框宽度 ，每一条数据对应一个band
        'bandOutlineColor': '#FFF',      // band外宽颜色
        'bandOutlineAlpha': 1,           // band外框透明度
        'axisThickness': 0,              // 外环线宽度
        'axisAlpha': 0,                  // 外环线透明度
        'tickAlpha': 0,                  // 主刻度透明度
        'valueInterval': this.step,      // 主刻度间隔
        'bottomText': this.value,        // 表盘中心的显示值
        'bottomTextBold': false,         // 表盘中心显示值是否加粗
        'bottomTextColor': '#474747',    // 表盘中心显示值颜色
        'bottomTextFontSize': 30,        // 表盘中心显示值字体大小
        'bottomTextYOffset': -20,        // 表盘中心显示值竖直偏移量
        'endValue': this.maxValue,       // 表盘最大值
        'labelOffset': 25,               // label距离band的距离
        'showFirstLabel': false,         // 是否展示第一个label
        'showLastLabel': false           // 是否展示第二个label
      }];
      this.chart = AmCharts.makeChart(chartContainer, {
        'type': 'gauge',
        'theme': 'light',
        'allLabels': labels,
        'arrows': arrows,
        'axes': axes
      });
    },
    methods: {
      /**
       * 对数据进行初始化，加入颜色，半径等参数
       * @private
       */
      _initData: function () {
        this.data = this.data.map(function (item) {
          if (typeof item === 'object') {
            // 加入半径
            item[KEY_BAND_THICKNESS] = DEFAULT_BAND_THICKNESS;
            // 如果没有颜色，则加入颜色
            if (!(KEY_COLOR in item)) {
              item[KEY_COLOR] = this.color;
            }
          }
          return item;
        }.bind(this));
      },
      /**
       * 对外提供设值方法，改变表盘指针指向
       * @param value
       */
      setValue: function (value) {
        this.chart.axes[0].setBottomText(value);
        this.chart.arrows[0].setValue(value);
      }
    }
  });
  export default Gauge;
</script>


