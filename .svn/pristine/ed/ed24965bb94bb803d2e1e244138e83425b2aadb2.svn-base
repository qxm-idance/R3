<template>
  <div :id="id" :style="{width: width, height: height}"></div>
</template>

<script>
  import { serialMixin } from './mixins';

  export default {
    name: 'amcharts-line',

    mixins: [serialMixin],

    props: {
      lineColor: {
        type: String,
        default: '#0278B8'
      },
      lineThickness: {
        type: Number,
        default: 2
      },
      bulletSize: {
        type: Number,
        default: 6
      }
    },

    created () {
    },

    ready () {
      let chartConf = Object.assign({}, this.chartBaseConf, {
        'categoryAxis': {
          'axisAlpha': 0, // 不显示横向坐标轴
          'parseDates': true, // 解析 Date-String
          'boldPeriodBeginning': false, // 禁用起始横坐标值加粗功能
          'minorGridEnabled': true,
          'equalSpacing': true // 当横坐标是 Date 时，此属性让横坐标之间的距离一致（同时首尾会突出去）
        },
        'graphs': [{
          'balloonText': this.balloonText,
          'balloonColor': this.balloonColor,
          'balloon': this.balloonConf,
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletColor': '#FFFFFF',
          'bulletSize': this.bulletSize, // 圆形、白色、带边框的 bullet
          'lineThickness': this.lineThickness, // line 宽度
          'lineColor': this.lineColor, // line 颜色
          'useLineColorForBulletBorder': true, // bullet 的边框颜色与 line 颜色一致
          'valueField': this.valueField,
          'fillAlphas': 0.3,
          'fillColors': [this.lineColor, '#FFFFFF'] // 实现 sgradients 效果
        }]
      });

      let chart = AmCharts.makeChart(this.id, chartConf);

      chart.addListener('rendered', zoomChart);

      zoomChart();

      function zoomChart () {
        chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
      }
    }
  };
</script>

<style>
</style>
