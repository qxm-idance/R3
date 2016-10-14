# checkbox-filter组件


# 组件概述

>单个复选框过滤按钮，仅作为BoxGroup的子组件使用!

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| idx | Number | No   | 0 | 此属性只读|
| checked | Boolean | No  |   | checkbox是否选中|
| label | String | No | ' ' |  显示的文本|
| disabled | Boolean | No | false | 是否禁用|
| count | Number | No | 0 | 。。。。|
| value | String | No | ' ' | checkbox上绑定的值|


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| toggle-check-state |  (children, checked) | checkbox状态发生改变 |
| toggle-usability | (children, disabled) | .... |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| clickMe | (event)  | 点击事件 |
| check |   | 将checkbox置为勾选状态 |
| uncheck |   | 将checkbox置为未勾选状态 |
| toggle |   | 切换checkbox的勾选状态 |
| enable |   | 启用checkbox |
| disable |   | 禁用checkbox | 



# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/box-group-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```html
<div class="container">
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">复选框</h2>
    </div>
    <div class="form-row">
      <button v-on:click="checkAll" class="button button--action">勾选所有</button>
      <button v-on:click="uncheckAll" class="button button--action">取消勾选所有</button>
      <button v-on:click="checkSecondItem" class="button button--action">勾选选项2</button>
      <button v-on:click="uncheckSecondItem" class="button button--action">取消勾选选项2</button>
      <button v-on:click="toggleSecondItem" class="button button--action">反选选项2</button>
      <button v-on:click="disableAll" class="button button--action">禁用所有复选框</button>
      <button v-on:click="enableAll" class="button button--action">启用所有复选框</button>
    </div>
    <div class="form-row">
      <button v-on:click="disableSecondItem" class="button button--action">禁用选项2</button>
      <button v-on:click="enableSecondItem" class="button button--action">启用选项2</button>
      <button v-on:click="getValue" class="button button--action">获取所有项的值</button>
      <button v-on:click="getSecondItemValue" class="button button--action">获取选项2的值</button>
      <button v-on:click="getIsChecked" class="button button--action">获取所有勾选状态</button>
      <button v-on:click="getSecondIsChecked" class="button button--action">获取选项2勾选状态</button>
    </div>
    <t-box-group labels="选项1,选项2,选项3,选项4"
      checked="0,1,1,0"
      values="This,is,a,test"
      mtop="1"
      size="small"
      v-ref:my-tag1
      v-on:changed="changed"
      v-on:checked="checked"
      v-on:unchecked="unchecked"></t-box-group>
    <t-box-group labels="item1,item2,item3,item4" checked="0,1,0,0" mtop="1"></t-box-group>
    <t-box-group labels="item1,item2,item3,item4" checked="0,1,0,0" disabled="0,1,0,1" mtop="1" size="large"></t-box-group>
    <t-box-group labels="item1,item2,item3,item4" checked="false,false,false,true" inline="true" mtop="true" size="small"></t-box-group>
    <t-box-group labels="item1,item2,item3,item4" inline="1" mtop="1"></t-box-group>
    <t-box-group labels="item1,item2,item3,item4" checked="0,0,0,1" inline="1" mtop="1" size="large"></t-box-group>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">单选框</h2>
    </div>
    <t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="0,1,0,0" mtop="1" size="small"
      v-on:changed="changed"
      v-on:checked="checked"
      v-on:unchecked="unchecked"></t-box-group>
    <t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="0,1,0,0" mtop="1"></t-box-group>
    <t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="0,1,0,0" disabled="0,1,0,1" mtop="1" size="large"></t-box-group>
    <t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="false,false,false,true" inline="true" mtop="true" size="small"></t-box-group>
    <t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="0,0,0,1" inline="1" mtop="1"></t-box-group>
    <t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="0,0,0,1" inline="1" mtop="1" size="large"></t-box-group>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">复选按钮框</h2>
    </div>
    <div class="form-row">
      <button v-on:click="getValues" class="button button--action">获得值</button>
      <button v-on:click="getAllCount" class="button button--action">获得所有总数</button>
      <button v-on:click="setAllCount" class="button button--action">设置所有总数</button>
      <button v-on:click="getSecondCount" class="button button--action">获得选项2总数</button>
      <button v-on:click="setSecondCount" class="button button--action">设置选项2总数</button>
      <button v-on:click="setSomeCount" class="button button--action">设置选项2和选项3总数</button>
    </div>
    <t-box-group type="checkbox-filter"
      labels="选项1,选项2,选项3,选项4"
      counts="31,10,5,1"
      checked="0,1,0,0"
      mtop="1"
      total="true"
      values="This,is,a,test"
      total_checked="true"
      total_label="All"
      size="small"
      v-ref:my-tag2
      v-on:changed="changed"
      v-on:checked="checked"
      v-on:unchecked="unchecked"></t-box-group>
    <t-box-group type="checkbox-filter" labels="item1,item2,item3,item4" counts="71,90,55,1" checked="0,1,0,0" mtop="1"></t-box-group>
    <t-box-group type="checkbox-filter" labels="item1,item2,item3,item4" checked="0,1,0,0" disabled="0,1,0,1" mtop="1" size="large"></t-box-group>
    <t-box-group type="checkbox-filter" labels="item1,item2,item3,item4" checked="false,false,false,true" inline="true" mtop="true" size="small"></t-box-group>
    <t-box-group type="checkbox-filter" labels="item1,item2,item3,item4" checked="0,0,0,1" inline="1" mtop="1"></t-box-group>
    <t-box-group type="checkbox-filter" labels="item1,item2,item3,item4" checked="0,0,0,1" inline="1" mtop="1" size="large"></t-box-group>
  </div>
```

### js实例组件代码
```javascript
import Vue from 'vue';
import BoxGroup from '../../components/box-group/box-group';

const INFO_TITLE = 'BoxGroup事件信息：';

new Vue({
  el: 'body',
  components: {
    't-box-group': BoxGroup
  },
  methods: {
    checkAll: function (event) {
      this.$refs.myTag1.check();
    },
    uncheckAll: function (event) {
      this.$refs.myTag1.uncheck();
    },
    checkSecondItem: function (event) {
      this.$refs.myTag1.check(1);
    },
    uncheckSecondItem: function (event) {
      this.$refs.myTag1.uncheck(1);
    },
    toggleSecondItem: function (event) {
      this.$refs.myTag1.toggle(1);
    },
    disableAll: function (event) {
      this.$refs.myTag1.disable();
    },
    enableAll: function (event) {
      this.$refs.myTag1.enable();
    },
    disableSecondItem: function (event) {
      this.$refs.myTag1.disable(1);
    },
    enableSecondItem: function (event) {
      this.$refs.myTag1.enable();
    },
    getValue: function (event) {
      var arr = this.$refs.myTag1.value();
      alert('返回值：' + arr);
    },
    getValues: function (event) {
      var arr = this.$refs.myTag2.value();
      alert('返回值：' + arr);
    },
    getSecondItemValue: function (event) {
      var arr = this.$refs.myTag1.value(1);
      alert('返回值：' + arr);
    },
    getIsChecked: function (event) {
      var arr = this.$refs.myTag1.isChecked();
      alert('返回值：' + arr);
    },
    getSecondIsChecked: function (event) {
      var arr = this.$refs.myTag1.isChecked(1);
      alert('返回值：' + arr);
    },
    getAllCount: function (event) {
      var arr = this.$refs.myTag2.count();
      alert('返回值：' + arr);
    },
    setAllCount: function (event) {
      this.$refs.myTag2.count([0, 1, 2, 3], [991, 46, 1, 9]);
    },
    getSecondCount: function (event) {
      var arr = this.$refs.myTag2.count(1);
      alert('返回值：' + arr);
    },
    setSecondCount: function (event) {
      this.$refs.myTag2.count(1, 21);
    },
    setSomeCount: function (event) {
      this.$refs.myTag2.count([1, 2], [11, 25]);
    },
    warn$1: function (msg1, msg2) {
      if (typeof console !== 'undefined') {
        console.error('[' + msg1 + '] ' + msg2);
      }
    },
    changed: function (index, newValue) {
      this.warn$1('changed', INFO_TITLE + 'index = ' + index + '；newVaue = ' + newValue);
    },
    checked: function (index, newValue) {
      this.warn$1('checked', INFO_TITLE + 'index = ' + index);
    },
    unchecked: function (index, newValue) {
      this.warn$1('unchecked', INFO_TITLE + 'index = ' + index);
    }
  }
});

```
