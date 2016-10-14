const serialMixin = {
  props: {
    // 用于 AmCharts.makeChart
    id: {
      type: String,
      default: function () {
        return Math.random() * 100; // 每个组件实例 需要不同的 props default value 时，需要通过 function 进行返回
      }
    },
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 高度
    height: {
      type: String,
      default: '500px'
    },
    // 主题（根据 container 的 background-color 来选择合适的 theme）
    theme: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) >= 0;
      }
    },
    // 字体
    fontFamily: {
      type: String,
      default: 'arial, sans-serif'
    },
    // 字体大小
    fontSize: {
      type: Number,
      default: 13
    },
    // 字体颜色
    fontColor: {
      type: String,
      default: '#757575'
    },
    // 图表数据源
    dataProvider: {
      type: Array,
      default: function () {
        return [];
      }
    },
    // *横坐标字段
    categoryField: {
      type: String,
      required: true
    },
    // *纵坐标字段
    valueField: {
      type: String,
      required: true
    },
    // 列填充颜色字段
    fillColorsField: {
      type: String,
      default: 'color'
    },
    // 纵坐标值单位
    valueUnit: {
      type: String,
      required: false
    },
    decimalSeparator: {
      type: String,
      default: '.'
    },
    // 千位分隔符
    thousandsSeparator: {
      type: String,
      default: ','
    },
    // 初始化动画的持续时间
    startDuration: {
      type: Number,
      default: 1
    },
    // 是否支持导出
    exportEnabled: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      balloonText: '<b>[[category]]: [[value]]</b>', // balloon 文本
      balloonColor: '#000000', // balloon (border) 颜色
      balloonConf: {
        borderAlpha: 0.1, // 通过 alpha 通道进一步控制 border 的颜色
        borderThickness: 1, // border 宽度为 1px
        color: '#757575', // 字体颜色
        fillAlpha: 1, // 完全不透明
        shadowAlpha: 0 // 去除阴影
      },
      chartBaseConf: {
        type: 'serial',
        theme: this.theme,
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
        color: this.fontColor,
        autoDisplay: true,
        // 参考 http://docs.amcharts.com/3/javascriptcharts/AmSerialChart
        // language: 'amcharts/3.20.13/lang/*.js',
        dataProvider: this.dataProvider,
        categoryField: this.categoryField,
        // 纵坐标配置
        valueAxes: [{
          axisAlpha: 0, // 不显示纵坐标轴
          position: 'left', // 位置
          title: '', // 标题
          type: 'numeric', // 纵坐标值类型（numeric/date，默认为 numeric）
          unit: this.valueUnit ? ' ' + this.valueUnit : '' // 值单位
        }],
        chartCursor: {
          zoomable: false, // 不允许缩放
          cursorAlpha: 0, // 不展示纵向标线
          categoryBalloonEnabled: false // 禁用 Category Balloon
        },
        startDuration: this.startDuration,
        decimalSeparator: this.decimalSeparator,
        thousandsSeparator: this.thousandsSeparator,
        export: {
          enabled: this.exportEnabled
        }
      }
    };
  }
};
module.exports = serialMixin;
