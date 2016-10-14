<template>
  <div :id="id" :style="{width: width, height: height}"></div>
</template>

<script>
  import { serialMixin } from './mixins';

  export default {
    name: 'amcharts-bars',

    mixins: [serialMixin],

    props: {
      // 由 Category 生成 Legend Data
      enableCategoryLegend: {
        type: Boolean,
        default: false
      },
      legendData: {
        type: Array,
        required: false
      },
      // Legend 位置，暂不支持 'absolute'
      legendPosition: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['bottom', 'top', 'left', 'right'].indexOf(value) >= 0;
        }
      },
      // Legend Item 对齐方式
      legendAlign: {
        type: String,
        default: 'right',
        validator: function (value) {
          return ['left', 'center', 'right'].indexOf(value) >= 0;
        }
      },
      // Legend Item 行最大列数
      legendMaxColumns: {
        type: Number,
        default: 3
      },
      // 当上面提供的 Legend 可选项无法满足要求时，请传递完整的 legendConf 信息（将忽略上述所有的可选项）
      legendConf: {
        type: Object,
        required: false
      }
    },

    created () {
      // 当未显式设置 legendData、同时启用了 CategoryLegend 时，由 Category 生成 Legend Data
      if (!this.legendData && this.enableCategoryLegend) {
        this.legendData = [];
        for (let i = 0; i < this.dataProvider.length; i++) {
          let item = this.dataProvider[i];
          this.legendData.push({ title: item[this.categoryField], color: item[this.fillColorsField] });
        }
      }
      // 当提供了完整的 legendConf 但并未提供 data 信息时，使用 legendData 填充
      if (this.legendConf && !this.legendConf.data) {
        this.legendConf.data = this.legendData;
      }
    },

    ready () {
      let chartConf = Object.assign({}, this.chartBaseConf, {
        // 横坐标配置
        'categoryAxis': {
          'axisAlpha': 0, // 不显示横向坐标轴
          'gridPosition': 'start', // 网格线相对于 Cell/Bar 的位置
          'labelRotation': 0, // label 旋转角度
          'gridThickness': 0 // （纵向）网格线宽度
        },
        'graphs': [{
          'balloonText': this.balloonText,
          'balloonColor': this.balloonColor,
          'balloon': this.balloonConf,
          'fillColorsField': this.fillColorsField,
          'fillAlphas': 0.9,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': this.valueField,
          'cornerRadiusTop': 2 // Bars 角度
        }]
      });

      // 设置 Legend Container (legendDiv/divId) 可以更灵活的控制 Legend 的边距、间距等
      if (this.legendConf) {
        chartConf.legend = this.legendConf;
      } else if (this.legendData) {
        chartConf.legend = {
          'color': this.fontColor, // 字体颜色
          'position': this.legendPosition, // 位置
          'align': this.legendAlign, // 对齐方式
          'maxColumns': this.legendMaxColumns, // 行最大列数
          'markerType': 'circle', // 图标类型
          'markerSize': 6, // 图标大小,
          'markerLabelGap': 5, // marker 与 text 间距
          'switchable': false, // disable 点击 legend marker 进行切换图表
          // 'equalWidths': false, // 宽度是否一致，false 会导致多行的列无法对齐
          // 'useGraphSettings': true, // 当在 dataProvider 设置 color 时，该属性不生效
          'data': this.legendData
        };
      }

      AmCharts.makeChart(this.id, chartConf);
    }
  };
</script>

<style>
</style>
