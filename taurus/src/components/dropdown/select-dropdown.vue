<template>
  <div id="{{nextId}}" class="dropdown select--dropdown stretch-mobile" :class="[this.isOpen ? 'is-open' : '', this.disabled ? 'disabled' : '', {'dropdown--small': this.size === 'small'}]" @click.stop.prevent="showDropList">
    <div class="dropdown__label">
      <div class="text-truncate" data-value="{{selectedValue}}">
        {{selectedLabel}}
      </div>
    </div>
    <div class="dropdown__content">
      <div class="dropdown__scroll">
        <!--loading-->
        <div class="js-hidden padding-leader--small padding-trailer--small">
          <span class="load-tester">
            <span class="spinner"></span>
          </span>
        </div>
        <!--loading-end-->
        <!-- message error-->
        <div class="message message--error" :class="this.isError ? '' : 'is-hidden'">
          <div class="message__inner">
            <span class="message__icon icon icon-reject"></span>
            <div class="text-size--13 message__text">
              <p>An error happened. Please try again later.</p>
            </div>
          </div>
        </div>
        <!-- message error-end-->
        <ul class="dropdown__list">
          <li data-value="{{listItem.value}}" v-for="listItem in list" @click.stop="echoSelectedValue(listItem.value)">
            <a :class="['media', 'media--small', {'active':listItem.active}]" href="#nogo">
              <div class="media__body">
                <div class="text-truncate">
                  {{listItem.label}}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

const EMPTY_VALUE = -1;
const EMPTY_STRING = '';
const DEFAULT_PLACEHOLDER = 'Please select!';

var seed = 0;

var selectDropDown = Vue.component('taurus-select-dropdown', {
  data: function () {
    return {
      isOpen: false,
      isError: false
    };
  },
  props: {
    list: {
      default: function () {
        return [];
      },
      required: true,
      type: Array
    },
    rename: {
      default: function () {
        return {
          label: 'label',
          value: 'value'
        };
      },
      type: Object
    },
    bmValue: {
      type: [String, Number],
      twoWay: true
    },
    defaultValue: {
      type: [String, Number],
      default: EMPTY_STRING
    },
    emptylabel: {
      default: EMPTY_STRING,
      type: String
    },
    placeholder: {
      default: DEFAULT_PLACEHOLDER,
      type: String
    },
    size: {
      default: EMPTY_STRING,
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  created: function () {
    var processedData = this._processResponseData(this.list, 'init');
    this.list = processedData;
    // 给document绑定click事件关闭dropList
    document.addEventListener('click', function () {
      if (this.isOpen) {
        // 列表关闭同时触发on-hide-panel的回调,处理相关操作
        this.$dispatch('on-hide-panel');
        this.isOpen = false;
      }
    }.bind(this), false);
  },
  computed: {
    selectedLabel: function () {
      var selectedObj = this._getSelectedData();
      return selectedObj ? selectedObj.label : this.emptylabel ? this.emptylabel : this.placeholder;
    },
    selectedValue: function () {
      var selectedObj = this._getSelectedData();
      return selectedObj ? selectedObj.value : this.emptylabel ? EMPTY_VALUE : 0;
    },
    nextId: function () {
      return 'tau_sel_dd_' + seed++;
    }
  },
  methods: {
    reload: function (data) {
      if (data instanceof Array && data.length > 0) {
        this.list = this._processResponseData(data, 'reload');
      }
    },
    getValue: function () {
      return this.selectedValue;
    },
    getText: function () {
      return this.selectedLabel;
    },
    setValue: function (value) {
      this._setSelectedData(value);
    },
    clear: function () {
      if (this.isOpen) {
        this.isOpen = false;
        // 列表关闭同时触发on-hide-panel的回调,处理相关操作
        this.$dispatch('on-hide-panel');
      }
      this._clearData();
    },
    enable: function () {
      this.disabled = false;
    },
    disable: function () {
      if (this.isOpen) {
        this.isOpen = false;
        // 列表关闭同时触发on-hide-panel的回调,处理相关操作
        this.$dispatch('on-hide-panel');
      }
      this.disabled = true;
    },
    showDropList: function () {
      // 如果是禁用状态，禁止点击并且不展示DropList(为了兼容IE9,10)
      if (this.disabled) {
        return;
      }
      if (this.isOpen) {
        this.isOpen = false;
        // 列表关闭同时触发on-hide-panel的回调,处理相关操作
        this.$dispatch('on-hide-panel');
      } else {
        this.isOpen = true;
        // 列表展示同时触发on-show-panel的回调,处理相关操作
        this.$dispatch('on-show-panel');
      }
    },
    echoSelectedValue: function (currentValue) {
      for (var i = 0; i < this.list.length; i++) {
        var listItem = this.list[i];
        if (currentValue === listItem['value']) {
          listItem['active'] = true;
          // $set方法设置激活项实时更新DOM
          this.list.$set(i, Object.assign({}, listItem));
        } else {
          listItem['active'] = false;
          // $set方法设置未激活项实时更新DOM
          this.list.$set(i, Object.assign({}, listItem));
        }
      }
      // 标志isOpen为false，关闭dropList
      this.isOpen = false;
      // 列表关闭同时触发on-hide-panel的回调,处理相关操作
      this.$dispatch('on-hide-panel');
    },
    _processResponseData: function (data, status) {
      var tempArr = [];
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          var tempObj = {};
          tempObj['label'] = data[i][this.rename.label];
          tempObj['value'] = data[i][this.rename.value];
          // 判断状态，当状态为init时默认值有效，当状态为reload时默认值无效
          switch (status) {
            case 'init':
              if (data[i][this.rename.value] === this.defaultValue) {
                tempObj['active'] = true;
              } else {
                tempObj['active'] = false;
              }
              break;
            case 'reload':
              tempObj['active'] = false;
              break;
          }
          tempArr.push(tempObj);
        }
        if (this.emptylabel) {
          if (this.defaultValue) {
            tempArr.unshift({
              label: this.emptylabel,
              value: EMPTY_VALUE,
              active: false
            });
          } else {
            tempArr.unshift({
              label: this.emptylabel,
              value: EMPTY_VALUE,
              active: true
            });
          }
        }
        this.isError = false;
      } else {
        this.isError = true;
        return;
      }
      return tempArr;
    },
    _getSelectedData: function () {
      var selectedObj;
      if (this.list && this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]['active']) {
            selectedObj = this.list[i];
          }
        }
      }
      return selectedObj;
    },
    _setSelectedData: function (value) {
      var selectedObj;
      if (this.list && this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          if (Number(this.list[i]['value']) === Number(value)) {
            this.list[i]['active'] = true;
            // $set方法设置激活项实时更新DOM
            this.list.$set(i, Object.assign({}, this.list[i]));
            selectedObj = this.list[i];
          } else {
            this.list[i]['active'] = false;
            // $set方法设置未激活项实时更新DOM
            this.list.$set(i, Object.assign({}, this.list[i]));
          }
        }
      } else {
        return;
      }
      return selectedObj;
    },
    _clearData: function () {
      if (this.list && this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]['value'] === EMPTY_VALUE) {
            this.list[i]['active'] = true;
            // $set方法设置激活项实时更新DOM
            this.list.$set(i, Object.assign({}, this.list[i]));
          } else {
            this.list[i]['active'] = false;
            // $set方法设置未激活项实时更新DOM
            this.list.$set(i, Object.assign({}, this.list[i]));
          }
        }
      }
    }
  },
  watch: {
    selectedValue: function (newValue, oldValue) {
      this.bmValue = newValue;
      this.$dispatch('on-value-change', newValue, oldValue);
    },
    bmValue: function (newValue, oldValue) {
      this._setSelectedData(newValue);
    }
  }
});

module.exports = selectDropDown;
</script>
