# Box-Group组件


# 组件概述

> \(复选框组，单选框组\)组件, 功能类似html原生的checkbox和radio。


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | String | No | checkbox | 组件类型，类型分为三种(checkbox, radiobox, checkbox-filter) |
| size | String | No  | normal | 组件尺寸，类型分为三种(small，normal，large) |
| disabled | String | No | 0 | 组件禁用选项，如果组内有3个checkbox都设置为禁用状态，那么当前设置的值应该为(1,1,1)，反之启用状态设置每一项为0。注：radiobox和checkbox-filter设置方式与此相同。 |
| mtop | Boolean | No | 0或者false | 设置组件上边距(margin-top)，如果让组件与上方元素有一定的间隔，可以设置此值为1或者true |
| inline | Boolean | No | 0或者false | 设置组件是垂直显示还是水平显示 |
| labels | String | No | Untitled | 组件每一项所显示的文字，如果组内有3个checkbox，那么可以将此值设置为(item1,item2,item3)，radiobox和checkbox-filter以此类推。 |
| values | String | No | - | 组件每一项的值，如果组内有3个checkbox，那么可以将此值设置为(1,2,3)，radiobox和checkbox-filter以此类推。 |
| checked | String | No | 0 | 组件初始化设置默认选中项，如果组内有3个checkbox，第2个设置为选中，那么可以将此值设置为(0,1,0)，radiobox和checkbox-filter以此类推。 |

#### 注：以下参数是checkbox-filter特有参数(参数type设置为checkbox-filter时，以下参数有效，否则无效)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| total | Boolean | No | false | 是否显示total按钮项。 |
| total_checked | Boolean | false | 0或者false | 是否设置total按钮为选中状态 |
| total_label | String | No | All | 设置total按钮上所显示的文字 |
| counts | String | No | 0 | 设置每个按钮项上所显示的数量，如果组内有3个按钮项，每个的显示数量都是60，那么可以将此值设置为(60,60,60)|

## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| changed | \(index, newValue\) | 选中值变化时触发(参数index是当前选中项的下标，newValue是当前选中项的值) |
| checked | \(index, newValue\) | 选中某一项时触发(参数index是当前选中项的下标，newValue是当前选中项的值) |
| unchecked | \(index, newValue\) | 取消选中某一项时触发(参数index是当前选中项的下标，newValue是当前选中项的值) |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| toggle | \(index\) | 反选下标为index的选项，如果参数index不传，则默认为反选所有项 |
| check | \(index\) | 选中下标为index的选项，如果参数index不传，则默认为选中所有项 |
| uncheck | \(index\) | 取消选中下标为index的选项，如果参数index不传，则默认为取消选中所有项|
| enable | \(index\) | 启用下标为index的选项，如果参数index不传，则默认为启用所有项 |
| disable | \(index\) | 禁用下标为index的选项，如果参数index不传，则默认为禁用所有项 |
| value | \(index\) | 获取下标为index的选项的值，如果参数index不传，则默认为获取所有项的值，值类型为Array |
| isChecked | \(index\) | 获取下标为index的选项的选中状态，如果参数index不传，则默认为获取所有项的选中状态，值类型为Array |
| count | \(index, value可选\) |   set或这get总数，仅在checkbox-filter类型时有效 |

#### 注：上述count方法的描述在这里进行补充
1. 当没传任何参数时返回所有复选框总数数组；如：

    this.$refs.myTag.count();

2. 当仅传递index时，如果index是数值，那么返回该索引对应的总数，
如果index是数组，那么返回此数组内每一个有效的索引对应的总数；如：

    this.$refs.myTag.count(1); // 返回第二个复选框对应的总数
    this.$refs.myTag.count([0, 1, 2]); // 返回前三个复选框对应的总数数组

3. 当传递了有效索引index和数值num时，将设置该索引对应复选框的总数；如：

    this.$refs.myTag.count(2, 99); // 将第三个复选框的总数设置为99

4. 当传递了索引数组index和总数数组num时，将设置索引数组内每一个有效索引
对应的总数；如：
分别将第三、四、五个复选框的总数设置为99、98和10
    this.$refs.myTag.count([2, 3, 4], [99, 98, 10]);


# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/sample/box-group-demo/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
#### checkbox
```
<t-box-group labels="选项1,选项2,选项3,选项4"
      checked="0,1,1,0"
      values="This,is,a,test"
      mtop="1"
      size="small"
      v-ref:my-tag1
      v-on:changed="changed"
      v-on:checked="checked"
      v-on:unchecked="unchecked"></t-box-group>
```
#### radiobox
```
<t-box-group type="radiobox" labels="item1,item2,item3,item4" checked="0,1,0,0" mtop="1" size="small"
      v-on:changed="changed"
      v-on:checked="checked"
      v-on:unchecked="unchecked"></t-box-group>
```
#### checkbox-filter
```
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
```

### js实例组件代码
```
import {TBoxGroup} from 'aii-taurus';

const INFO_TITLE = 'BoxGroup事件信息：';
new Vue({
  el: 'body',
  components: {
    't-box-group': TBoxGroup
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
      this.$refs.myTag1.toggle();
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
