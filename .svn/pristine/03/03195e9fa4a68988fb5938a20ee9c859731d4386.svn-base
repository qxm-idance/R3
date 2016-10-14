<template>
  <label v-if="label">{{ label }}</label>
  <div class="form-item {{ smallSize }}">
    <div class="form-item__number-wrapper">
      <input data-module="element.number" type="number"
             v-model="value" number
             :disabled="disabled"
             v-on:blur="enterValidate">
      <button class="button--default number__control number__control--decrease" v-on:click="substract"></button>
      <button class="button--default number__control number__control--increase" v-on:click="increase"></button>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  const DEFAULT_VALUE = 0;
  const DEFAULT_MIN = 0;
  const DEFAULT_STEP = 1;
  const SIZE_NORMAL = 'normal';
  const SIZE_SMALL = 'small';
  const CSS_SMALL = 'form-item--small';

  let NumberStepper = Vue.extend({
    name: 'taurus-number-stepper',
    props: {
      // 最大值
      max: {
        type: Number,
        default: undefined,
        coerce: function (max) {
          return isNaN(parseInt(max)) ? undefined : parseInt(max);
        }
      },
      // 最小值
      min: {
        type: Number,
        default: DEFAULT_MIN,
        coerce: function (min) {
          return isNaN(parseInt(min)) ? DEFAULT_MIN : parseInt(min);
        }
      },
      // 步长
      step: {
        type: Number,
        default: DEFAULT_STEP,
        coerce: function (step) {
          return parseInt(step) > 1 ? parseInt(step) : 1;
        }
      },
      // 初始值
      defaultValue: {
        type: Number,
        default: DEFAULT_VALUE,
        coerce: function (value) {
          return isNaN(parseInt(value)) ? DEFAULT_MIN : parseInt(value);
        }
      },
      // 输入框大小
      size: {
        type: String,
        default: SIZE_NORMAL,
        coerce: function (size) {
          return size === SIZE_SMALL ? SIZE_SMALL : SIZE_NORMAL;
        }
      },
      // 输入框label
      label: {
        type: String,
        default: ''
      },
      // 是否禁用组件
      disabled: {
        type: Boolean,
        default: false,
        coerce: function (disabled) {
          return disabled === 'true';
        }
      }
    },
    data: function () {
      // 组件默认值
      return {
        value: DEFAULT_VALUE
      };
    },
    computed: {
      smallSize: function () {
        return this.size === SIZE_SMALL ? CSS_SMALL : '';
      }
    },
    created: function () {
      // max必须大于min
      if (this.max < this.min) {
        this.max = undefined;
      }
      // 设置初始值，初始值必须在取值区间
      this._setValue(this.defaultValue);
    },
    methods: {
      /**
       * 递增函数
       */
      increase: function () {
        this._setValue(this.value + this.step);
      },
      /**
       * 递减函数
       */
      substract: function () {
        this._setValue(this.value - this.step);
      },
      /**
       * 手动输入失焦验证
       */
      enterValidate: function () {
        this._setValue(this.value);
      },
      /**
       * 解除禁用
       */
      enable: function () {
        this.disabled = false;
      },
      /**
       * 禁用输入框
       *
       */
      disable: function () {
        this.disabled = true;
      },
      /**
       * 组件值的变化都通过这个方法来实现
       * @param newValue
       */
      _setValue: function (newValue) {
        if (['string', 'number'].indexOf(typeof newValue) < 0) {
          return;
        }
        let value = parseInt(newValue);
        if (value <= this.min) {
          this.value = this.min;
        } else if (this.max && value > this.max) {
          this.value = this.max;
        } else {
          this.value = value;
        }
      },
      /**
       * 设置输入框的值
       * @param newValue
       */
      setValue: function (newValue) {
        this._setValue(newValue);
      },
      /**
       * 获取组件的值
       * @returns {Number|*|value|number}
       */
      getValue: function () {
        return this.value;
      }
    }
  });
  export default NumberStepper;
</script>
