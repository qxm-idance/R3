<template>
  <div class="doughnut" :style="[styleObj, {width: width, height: height}]"></div>
</template>

<script>
  import Vue from 'vue';
  let Doughnut = Vue.extend({
    name: 'taurus-amcharts-doughnut',
    props: {
      // 数据源
      data: {
        type: Array
      },
      // 标题映射字段
      titleField: {
        type: String
      },
      // 值映射字段
      valueField: {
        type: String
      },
      // 颜色映射字段
      colorField: {
        type: String
      },
      // 表盘下面的为title，中间加粗文字为name，中间不加粗文字为desc
      content: {
        type: Object,
        default: {}
      },
      // 是否显示3d效果
      show3d: {
        type: Boolean,
        default: false,
        coerce: function (show3d) {
          return show3d === 'true';
        }
      },
      // 是否显示每一个slice的label，默认不显示
      labelsEnabled: {
        default: false,
        type: Boolean,
        coerce: function (isEnable) {
          return isEnable === 'true';
        }
      },
      // label重新映射函数
      labelRender: {
        type: Function
      },
      // 是否显示统计数据
      legend: {
        type: Boolean,
        default: false,
        coerce: function (legend) {
          return legend === 'true';
        }
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
    data: function () {
      return {
        styleObj: {
          overFlow: 'hidden',
          fontSize: '14px',
          minHeight: '300px',
          display: 'inline-block'
        }
      };
    },
    ready: function () {
      let chartContainer = this.$el;
      let content = this.content;
      let labels = [{
        'x': '50%',
        'y': '40%',
        'color': '#757575',
        'size': 26,
        'align': 'middle',
        'text': (content.name || content.name === 0) ? content.name : ''
      }, {
        'x': '50%',
        'y': '52%',
        'color': '#757575',
        'size': 14,
        'align': 'middle',
        'text': (content.desc || content.desc === 0) ? content.desc : ''
      }, {
        'x': '50%',
        'y': '90%',
        'color': '#757575',
        'bold': true,
        'size': 16,
        'align': 'middle',
        'text': (content.title || content.title === 0) ? content.title : ''
      }];
      let legend = {
        'position': 'right',
        'markerType': 'circle',
        'markerSize': 5,
        'markerLabelGap': 10,
        'maxColumns': 2,
        'autoMargins': false,
        'valueText': '[[percents]]%'
      };
      let balloon = {
        'adjustBorderColor': false,
        'color': '#FFF',
        'borderThickness': 0,
        'fillAlpha': 1,
        'shadowAlpha': 0,
        'fadeOutDuration': 0,
        'animationDuration': 0
      };
      AmCharts.makeChart(chartContainer, {
        'type': 'pie',
        'dataProvider': this.data,
        'marginBottom': 35,
        'allLabels': labels,
        'legend': this.legend ? legend : undefined,
        'balloon': balloon,
        'labelsEnabled': this.labelsEnabled,   // 是否显示label,默认不显示
        'titleField': this.titleField,         // 饼图的label用哪个源数据哪个字段来映射
        'valueField': this.valueField,         // 饼图的value用哪个源数据哪个字段来映射
        'colorField': this.colorField,         // 饼图的颜色用源数据哪个字段来映射
        'depth3D': this.show3d ? 10 : 1,       // 是否3d显示，对外只提供显示或者不显示，显示为10，否则为1
        'labelRadius': 5,                      // label距离slice的距离
        'radius': '40%',                       // pie 的半径，可用百分比或像素来控制
        'innerRadius': '85%',                  // slice厚度所占半径百分比
        'labelFunction': typeof this.labelRender === 'function' ? this.labelRender : undefined,   // 用于label的映射
        'labelText': '[[title]]',              // label 显示模式，默认为[[title]]: [[percents]]%
        'maxLabelWidth': 200,                  // label的最大宽度，超出此宽度后换行
        'panEventsEnabled': true,              // 防止在pie在移动端占据整个屏幕导致无法滑动
        'pullOutOnlyOne': true,                // 单选（只有一个slice可以被选中）
        'pullOutEffect': 'easeOutSine',
        'pullOutDuration': 0.3,
        'balloonText': '[[title]] [[percents]]%',
        'fillAlpha': 1
      });
    }
  });
  export default Doughnut;
</script>
