# Select-DropDown组件


# 组件概述

> 选择下拉框组件，用于选择数据项，功能类似于Select组件， 区别在于相比后者样式上做了优化


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| list | Array| Yes | [] | 组件初始化所需的数据 |
| label | String | No  | label | 组件显示的数据名称，如果传入的数据response-data中的数据名称与参数label的默认值不匹配，就需要设置label为传入数据中对应项。|
| value | String | No | value | 组件显示的数据值，如果传入的数据response-data中的数据名称与参数value的默认值不匹配，就需要设置value为传入数据中对应项。 |
| placeholder | String | No | Please select! | 组件初始化时默认显示文字\(功能类似Input中的placeholder\) |
| defaultvalue | String | No | NULL | 组件初始化时的默认值 |
| disabled | Boolean | No | false | 组件是否禁用 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| on-value-change | \(newValue, oldValue\) | 选中值变化时触发 |
| on-show-panel |  | 显示下拉Panel时触发 |
| on-hide-panel |  | 隐藏下拉Panel时触发 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| reload | \(data\) | 重载组件数据\(数据结构需与初始化数据保持一致\) |
| setValue | \(value\) | 设置组件的值 |
| getValue |  | 获取组件的值 |
| getText |  | 获取组件的显示文本 |
| clear |  | 清除组件选中项，恢复初始化状态 |
| enable |  | 启用组件 |
| disable |  | 禁用组件 |


# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/examples/dropdown-demo/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<t-sel-drop-down :list="selDropDownData" label="text" value="id" defaultvalue="2" :disabled="false"
@on-value-change="onSelectValueChange" @on-show-panel="onSelectShowPanel"
 @on-hide-panel="onSelectHidePanel" v-ref:my-select-dropdown></t-sel-drop-down>
```

### js实例组件代码
```
import {TSelDropDown} from 'aii-taurus';

new Vue({
  name: 'dropdown-demo',
  el: 'body',
  //此实例中引入select-dropdown组件
  components: {
    TSelDropDown
  },
  data: {
    // 初始化组件数据
    selDropDownData: [
      {
        'text': 'Push-Communication',
        'id': 1
      },
      {
        'text': 'Trouble-Ticket',
        'id': 2
      },
      {
        'text': 'Campaign',
        'id': 3
      },
      {
        'text': 'Customer-Management',
        'id': 4
      },
      {
        'text': 'C3',
        'id': 5
      }
    ],
    // 重载reload组件数据
    selDropReloadData: [
      {
        'text': 'Greg Zhang',
        'id': 1
      },
      {
        'text': 'Mike Bibby',
        'id': 2
      },
      {
        'text': 'Jay Chou',
        'id': 3
      },
      {
        'text': 'Amy Sun',
        'id': 4
      },
      {
        'text': 'Paul Gregory',
        'id': 5
      },
      {
        'text': 'Joan Wu',
        'id': 6
      },
      {
        'text': 'Lebron James',
        'id': 7
      }
    ]
  },
  methods: {
    // 重载组件方法
    reloadSelDropDown: function () {
      this.$refs.mySelectDropdown.reload(this.$data.selDropReloadData);
    },
    // 获取组件当前选择值的方法
    getSelDropDownValue: function () {
      alert(this.$refs.mySelectDropdown.getValue());
    },
    // 获取组件当前选中文字的方法
    getSelDropDownText: function () {
      alert(this.$refs.mySelectDropdown.getText());
    },
    // 设置组件选中值的方法
    setSelDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySelectDropdown.setValue(value);
    },
    // 清除组件选中值的方法
    clearDropDown: function () {
      this.$refs.mySelectDropdown.clear();
    },
    // 启用组件的方法
    enableDropDown: function () {
      this.$refs.mySelectDropdown.enable();
    },
    // 禁用组件的方法
    disableDropDown: function () {
      this.$refs.mySelectDropdown.disable();
    },
    // 组件选中值变化时触发此方法
    onSelectValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    // 在显示下拉Panel时触发此方法
    onSelectShowPanel: function () {
      console.log('Panel Show');
    },
    // 在隐藏下拉Panel时触发此方法
    onSelectHidePanel: function () {
      console.log('Panel Hide');
    }
  }
});
```
