# Simple-Table组件


# 组件概述

> 简单表格组件


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| data | Array | Yes  |  | 表格数据实例数组|
| columns | Array | Yes |  | 表格列名数组|
| dropItemPartialId | String| No |  | 自定义Partial的id |
| title | String | No |  | 标题名称 |
| zebra | Boolean | No | false | 是否需要表格内容有条纹间隔显示 |
| line | Boolean | No | false | 表格每一行底部是否显示横线 |
| size | String | No | default | 组件尺寸，small或者default |
| type | String | No | default | 表格类型，settings或者default |
| expandable | Boolean | No | false | 表格的每一行是否可以展开 |

## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| state-changed | | switcher组件发生变化时触发 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| toggleStorageBox | index| 展开或者收起表格的行,index为行数|
| sortBy | key | 按照某一字断重新对表格排序,key为字段名 |

# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/examples/simple-table-demo/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
	<h3 class="title--xsmall trailer--small trailing-border form-row">Default Table</h3>
	<t-simple-table
      v-ref:my-table
      :data="defaultTableData"
      :columns="tableColumns">
    </t-simple-table>
    <h3 class="title--xsmall trailer--small trailing-border form-row">Default Table Small</h3>
    <t-simple-table
      :data="defaultTableData"
      :columns="tableColumns"
      size="small">
    </t-simple-table>
    <h3 class="title--xsmall trailer--small trailing-border form-row">Zebra Table</h3>
    <t-simple-table
      :data="defaultTableData"
      :columns="tableColumns"
      zebra="true">
    </t-simple-table>
    <h3 class="title--xsmall trailer--small trailing-border form-row">Zebra Table Small</h3>
    <t-simple-table
      :data="defaultTableData"
      :columns="tableColumns"
      size="small"
      zebra="true">
    </t-simple-table>
    <h3 class="title--xsmall trailer--small trailing-border form-row">Settings Table</h3>
    <t-simple-table
      :data="settingsTableData"
      type='settings'>
    </t-simple-table>
    <h3 class="title--xsmall trailer--small trailing-border form-row">Settings Table</h3>
    <div class="form-row">
      <button v-on:click="changeText" class="button button--action">改变第二行文本</button>
    </div>
    <t-simple-table
      drop-item-partial-id="boxPartial"
      :data="settingsTableData"
      expandable="true"
      type="settings"
      @state-changed="stateChanged">
    </t-simple-table>
```

### js实例组件代码
```
import {TSimpleTable} from '../../utils/taurus';

// 生成自定义内容模版片段，可以使用的模版变量是entry，它表示每一行对应的数据
function generatePartial () {
  var arr = [];
  arr.push('<h3 class="title--xsmall trailing-border trailer">{{entry.boxTitle}}</h3>');
  arr.push('<div class="grid-row">');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('<span class="padding-leader--small">{{entry.boxLabel1}}</span>');
  arr.push('<div class="form-checkbox form-checkbox--small">');
  arr.push('<input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-0" value="--some-value--">');
  arr.push('<label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText1}}</label>');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('<div class="form-item ">');
  arr.push('<input id="form-field-simple-with-label-0" type="text" value="{{entry.boxInputValue1}}">');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('{{entry.boxLabel2}}');
  arr.push('<div class="form-checkbox form-checkbox--small">');
  arr.push('<input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-1" value="--some-value--">');
  arr.push('<label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText2}}</label>');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('<div class="form-item ">');
  arr.push('<input id="form-field-simple-with-label-1" type="text" value="{{entry.boxInputValue2}}">');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('</div>');
  return arr.join('');
}
// 注册自定义模版片段
Vue.partial('boxPartial', generatePartial());
new Vue({
  el: 'body',
  components: {
    TSimpleTable
  },
  data: {
    tableColumns: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'}
    ],
    defaultTableData: [
      {name: 'Aaron', age: '17'},
      {name: 'Marcus', age: '25'},
      {name: 'Edison', age: '38'},
      {name: 'Hiram', age: '41'},
      {name: 'Aaron', age: '16'},
      {name: 'Carter', age: '99'}
    ],
    settingsTableData: [
      {
        item: 'Add child protection',
        state: false,
        reading: '(4,40 kr/mo)',
        tip: 'Click on the switch',
        expanded: false,
        // 以下是自定义数据
        boxTitle: 'Forward calls when1',
        boxLabel1: 'Mobile is off1',
        boxLabel2: 'Pad is off1',
        boxCheckText1: 'Forward to voice mail1',
        boxCheckText2: 'Forward to voice mail21',
        boxInputValue1: 'john1',
        boxInputValue2: 'john21'
      },
      {
        item: 'Pay via mobile',
        state: true,
        reading: '(6,80 kr/mo)',
        tip: 'Click on the switch',
        expanded: true,
        // 以下是自定义数据
        boxTitle: 'Forward calls when2',
        boxLabel1: 'Mobile is off2',
        boxLabel2: 'Pad is off2',
        boxCheckText1: 'Forward to voice mail2',
        boxCheckText2: 'Forward to voice mail22',
        boxInputValue1: 'john2',
        boxInputValue2: 'john22'
      },
      {
        item: 'Buy physical goods',
        state: false,
        reading: '',
        tip: 'Click on the switch',
        expanded: false,
        // 以下是自定义数据
        boxTitle: 'Forward calls when3',
        boxLabel1: 'Mobile is off3',
        boxLabel2: 'Pad is off3',
        boxCheckText1: 'Forward to voice mail3',
        boxCheckText2: 'Forward to voice mail23',
        boxInputValue1: 'john3',
        boxInputValue2: 'john23'
      }
    ]
  },
  methods: {
    sortSecondColumn: function () {
      this.$refs.myTable.sortBy('age');
    },
    changeText: function () {
      this.settingsTableData[1].item = 'Hello';
    },
    stateChanged: function (value, index) {
      console.log('value = ' + value + ' ; index = ' + index);
      // 输出当前行数据
      console.log(this.settingsTableData[index].item);
    }
  }
});


```
