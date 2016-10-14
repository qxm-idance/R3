<style>
  .range-slider.range-slider--select .range-slider__points {
    background: linear-gradient(180deg, #02a962, #008e52);
  }
</style>
<template>
  <div class="range-slider leader"
       :class="{'range-slider--single': rangeOptions.type=='single','range-slider--select': rangeOptions.type=='select'}"
       data-component="range-slider" data-to="1" data-single="False">
    <div class="range-slider__line" v-el:slider-line>
      <div class="range-slider__container mobile-hidden">
        <div class="range-slider__points" v-el:slider-points :style="{width: sliderWidth + '%',left: sliderLeft + '%'}">
          <div class="range-slider__point range-slider__point--from tooltip__trigger"
               v-tooltip:blue="{text: rangeOptions.start}"
               data-component="range-slider/point" data-alias="from" @mousedown="mouseDownHandler" v-el:rangeStart>
            <!--<div class="tooltip tooltip&#45;&#45;blue" data-component="tooltip" role="tooltip" style="left: -20px;top: -46px;">-->
            <!--<p>3</p>-->
            <!--</div>-->
          </div>

          <div class="range-slider__point range-slider__point--to tooltip__trigger"
               v-tooltip:blue="{text: rangeOptions.end}"
               data-component="range-slider/point" data-alias="to" @mousedown="mouseDownHandler" v-el:rangeEnd>
            <!--<div class="tooltip tooltip&#45;&#45;blue" data-component="tooltip" role="tooltip">-->
              <!--<p></p>-->
            <!--</div>-->
          </div>
        </div>
      </div>

      <template v-if="rangeOptions.type=='select'">
        <div class="layout-slider-label">
          <span class="slider-label-from text--small text--muted" id="sliderLabelFrom-Slider3">{{rangeOptions.min}} {{rangeOptions.rangeLabel}}</span>
          <span class="slider-label-to text--small text--muted" id="sliderLabelTo-Slider3">{{rangeOptions.max}} {{rangeOptions.rangeLabel}}</span>
        </div>
      </template>
      <template v-else>
        <ul class="range-slider__values mobile-hidden" aaa="1">
          <li v-for="_range in rangeArr">
            <template v-if="$index==0">
              <span class="range-slider__value-label">{{rangeOptions.rangeLabel}}</span>
              <span class="range-slider__value">{{_range}}</span>
            </template>
            <template v-else>
              <span class="range-slider__value range-slider__value--empty">{{_range}}</span>
            </template>
          </li>

        </ul>
      </template>

    </div>
  </div>
</template>

<script>
  // 构建range-slide组件
  module.exports = {
    data: function () {
      return {
        stopWatch: false,
        sliderWidth: 0, // 范围条的宽度，单位为%
        sliderLeft: 0, // 范围条的left，单位为%
        dragObj: {
          pageX: 0,
          offsetLeft: 0
        },
        precision: 1, // 精度:0 保留0位小数;1 保留1位小数
        rangeArr: []
      };
    },
    props: { // 从外部传入渲染所依赖数据
      rangeOptions: {
        type: Object,
        validator: function (value) {
          var _valid = true;
          if (!value.rangeLabel) { // rangeLabel require
            _valid = false;
          }
          if (value.min === undefined || value.max === undefined || value.step === undefined || value.start === undefined || value.end === undefined) { // start require ,end require
            _valid = false;
          }
          if (isNaN(value.min) || isNaN(value.max) || isNaN(value.step) || isNaN(value.start) || isNaN(value.end)) { // start 和 end 必须是数字
            _valid = false;
          }

          if (value.min > value.max) { // min 不能大于 max
            _valid = false;
          }
          if (!value.step) { // step不能为0
            _valid = false;
          }
          if (value.start > value.end) { // start 不能大于 end
            _valid = false;
          }
          if (value.start < value.min) { // start 不能大于 min
            _valid = false;
          }
          return _valid;
        }
      }
    },
    watch: {
      'rangeOptions.start': 'renderStart',
      'rangeOptions.end': 'renderEnd'
    },
    methods: {
      /**
       * 注册拖动事件
       */
      mouseDownHandler: function (e) {
        var vm = this;
        var _type = e.target.getAttribute('data-alias');
        var _x = e.clientX;
        if (vm.rangeOptions.isDrag === false) { // 配置不允许拖拽就不绑定事件
          return;
        }
        vm.dragObj.max = vm.$els.sliderLine.offsetWidth;
        vm.dragObj.pageX = _x;
        vm.dragObj.offsetWidth = vm.sliderWidth;
        vm.dragObj.offsetLeft = vm.sliderLeft;
        if (_type === 'to') {
          document.addEventListener('mousemove', vm.endPointMouseMoveHandler);
          document.addEventListener('mouseup', function (e) {
            vm.stopWatch = false;
            document.removeEventListener('mousemove', vm.endPointMouseMoveHandler);
          });
        } else if (_type === 'from') {
          document.addEventListener('mousemove', vm.startPointMouseMoveHandler);
          document.addEventListener('mouseup', function (e) {
            vm.stopWatch = false;
            document.removeEventListener('mousemove', vm.startPointMouseMoveHandler);
          });
        }
      },
      /**
       * 拖动起始点的回调
       */
      startPointMouseMoveHandler: function (e) {
        var _x = e.clientX;
        var _gap = _x - this.dragObj.pageX;
        if (this.$els.sliderPoints.offsetWidth === 0 && _gap > 0) {
          return;
        }
        _gap = (_gap / this.dragObj.max) * 100;
        var _left = _gap;
        if (this.dragObj.offsetLeft) {
          _left = _left + Number(this.dragObj.offsetLeft);
        }
        this.sliderLeft = Math.max(0, _left.toFixed(this.precision));
        // 处理width
        var _width = Math.max(0, Number(this.dragObj.offsetWidth) - Number(_gap));
        this.sliderWidth = Math.min(100, _width.toFixed(this.precision));
        this.setStart();
      },
      /**
       * 拖动结束点的回调
       */
      endPointMouseMoveHandler: function (e) {
        var _x = e.clientX;
        var _gap = _x - this.dragObj.pageX;
        var _pointW = (_gap / this.dragObj.max) * 100;
        _pointW = _pointW + Number(this.dragObj.offsetWidth);
        this.sliderWidth = Math.min(100, _pointW.toFixed(this.precision));
        this.setEnd();
      },
      /**
       * 设置起始值
       */
      setStart: function () {
        var _start = ((this.rangeOptions.max * this.sliderLeft) / 100).toFixed(this.precision);
        this.rangeOptions.start = Number(_start) + Number(this.rangeOptions.min);
        this.stopWatch = true;
      },
      /**
       * 设置结束值
       */
      setEnd: function () {
        var _w = Number(this.sliderLeft) + Number(this.sliderWidth);
        var _end = ((this.rangeOptions.max * _w) / 100).toFixed(this.precision);
        this.rangeOptions.end = Number(_end) + Number(this.rangeOptions.min);
        this.stopWatch = true;
      },
      /**
       * 渲染起始点
       */
      renderStart: function (startValue) {
        if (this.stopWatch === true) {
          return;
        }
        if (startValue < this.rangeOptions.min) {
          return;
        }
        if (startValue > this.rangeOptions.end) {
          return;
        }
        startValue = startValue - this.rangeOptions.min;
        var _left = 0;
        var _w = 0;
        _left = ((startValue / this.rangeOptions.max) * 100).toFixed(this.precision);
        if (_left < this.sliderLeft) {
          _w = Number(this.sliderWidth) + Number(_left);
        } else {
          _w = Number(this.sliderWidth) - Number(_left);
        }
        this.sliderLeft = _left;
        this.sliderWidth = _w;
      },
      /**
       * 渲染结束点
       */
      renderEnd: function (endValue) {
        endValue = endValue - this.rangeOptions.start;
        this.sliderWidth = ((endValue / this.rangeOptions.max) * 100).toFixed(this.precision);
      },
      /**
       * 初始化
       */
      init: function () {
        var vm = this;
        var _min = vm.rangeOptions.min;
        var _max = vm.rangeOptions.max;
        var _start = vm.rangeOptions.start;
        var _end = vm.rangeOptions.end;
        var _step = vm.rangeOptions.step;
        // 1. 生成range line
        for (var i = _min; i <= _max; i += _step) {
          vm.rangeArr.push(i);
        }
        // 2. 设置精度
        if (_step >= 1) { // 10以上的精度为0位小数
          vm.precision = 0;
        } else {
          vm.precision = 1;
        }
        // 3. 设置起点
        vm.renderStart(_start);
        // 4. set end
        vm.renderEnd(_end);
      }
    },
    ready: function () { // 初始化视图
      this.init();
    }
  };
</script>
