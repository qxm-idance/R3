# Subscription-DropDown组件


# 组件概述

> 定制下拉框组件，用于选择数据项，功能类似于Select-Dropdown组件，区别在于此组件初次加载6条数据，点击showMore加载所有数据


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| response-data | Array| Yes | [] | 组件初始化所需的数据 |
| rename | Object | No  | {value: 'value',icon: 'icon',base: 'baseInfo',detail: 'detailInfo'} | 如果传入的数据中的key与此项参数默认值的key不一致，需要传入一个对象来重命名数据中的key，保持与参数默认值一致。 |
| defaultvalue | Number | No | NULL | 组件初始化时的默认值 |
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
<t-sub-drop-down :responsedata="subDropDownData" :rename="rename" :disabled="false"
defaultvalue="2" @on-value-change="onSubValueChange" @on-show-panel="onSubShowPanel"
 @on-hide-panel="onSubHidePanel" v-ref:my-sub-dropdown></t-sub-drop-down>
```

### js实例组件代码
```
import {TSubDropDown} from 'aii-taurus';

new Vue({
  name: 'dropdown-demo',
  el: 'body',
  //此实例中引入subscription-dropdown组件
  components: {
    TSubDropDown
  },
  data: {
    // 初始化组件数据
    subDropDownData: [
      {
        'baseInfo': 'Jannik Mørch Søndergaard',
        'detailInfo': 'Jannik Mørch Søndergaard (32108000158121)',
        'ico': 'icon-people',
        'id': 1
      },
      {
        'baseInfo': 'Jannik Zhang',
        'detailInfo': 'Jannik Zhang (32108000158122)',
        'ico': 'icon-people',
        'id': 2
      },
      {
        'baseInfo': 'Denamik Mick Segement',
        'detailInfo': 'Denamik Mick Segement (32108000158123)',
        'ico': 'icon-people',
        'id': 3
      },
      {
        'baseInfo': 'Peter Mutomubo James',
        'detailInfo': 'Peter Mutomubo James (32108000158124)',
        'ico': 'icon-people',
        'id': 4
      },
      {
        'baseInfo': 'Søndergaard Anthony Gregory',
        'detailInfo': 'Søndergaard Anthony Gregory (32108000158125)',
        'ico': 'icon-people',
        'id': 5
      },
      {
        'baseInfo': 'Tim Duncan',
        'detailInfo': 'Tim Duncan (32108000158126)',
        'ico': 'icon-people',
        'id': 6
      },
      {
        'baseInfo': 'Zhou Qi',
        'detailInfo': 'Zhou Qi (32108000158127)',
        'ico': 'icon-people',
        'id': 7
      },
      {
        'baseInfo': 'Kevin Durrant',
        'detailInfo': 'Kevin Durrant (32108000158128)',
        'ico': 'icon-people',
        'id': 8
      },
      {
        'baseInfo': 'Paul Gregory',
        'detailInfo': 'Paul Gregory (32108000158129)',
        'ico': 'icon-people',
        'id': 9
      },
      {
        'baseInfo': 'Yi Jian lian',
        'detailInfo': 'Yi Jian lian (321080001581210)',
        'ico': 'icon-people',
        'id': 10
      },
      {
        'baseInfo': 'Lebron James',
        'detailInfo': 'Lebron James (321080001581211)',
        'ico': 'icon-people',
        'id': 11
      }
    ],
    // 重载reload组件数据
    subDropReloadData: [
      {
        'baseInfo': 'Leon Peng',
        'detailInfo': 'Leon Peng (32108000158121)',
        'ico': 'icon-people',
        'id': 1
      },
      {
        'baseInfo': 'Mike Ke',
        'detailInfo': 'Mike Ke (32108000158122)',
        'ico': 'icon-people',
        'id': 2
      },
      {
        'baseInfo': 'Greg Zhang',
        'detailInfo': 'Greg Zhang (32108000158123)',
        'ico': 'icon-people',
        'id': 3
      },
      {
        'baseInfo': 'Raymond Yuan',
        'detailInfo': 'Raymond Yuan (32108000158124)',
        'ico': 'icon-people',
        'id': 4
      },
      {
        'baseInfo': 'Jay Chou',
        'detailInfo': 'Jay Chou (32108000158125)',
        'ico': 'icon-people',
        'id': 5
      },
      {
        'baseInfo': 'Yao Ming',
        'detailInfo': 'Yao Ming (32108000158126)',
        'ico': 'icon-people',
        'id': 6
      },
      {
        'baseInfo': 'Zhou Qi',
        'detailInfo': 'Zhou Qi (32108000158127)',
        'ico': 'icon-people',
        'id': 7
      },
      {
        'baseInfo': 'Kevin Durrant',
        'detailInfo': 'Kevin Durrant (32108000158128)',
        'ico': 'icon-people',
        'id': 8
      },
      {
        'baseInfo': 'Paul Gregory',
        'detailInfo': 'Paul Gregory (32108000158129)',
        'ico': 'icon-people',
        'id': 9
      }
    ],
    // 重命名对应数据中的key值
    rename: {
      icon: 'ico',
      value: 'id'
    }
  },
  methods: {
    // 重载组件方法
    reloadSubDropDown: function () {
      this.$refs.mySubDropdown.reload(this.$data.subDropReloadData);
    },
    // 获取组件当前选择值的方法
    getSubDropDownValue: function () {
      alert(this.$refs.mySubDropdown.getValue());
    },
    // 获取组件当前选中文字的方法
    getSubDropDownText: function () {
      alert(this.$refs.mySubDropdown.getText());
    },
    // 设置组件选中值的方法
    setSubDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySubDropdown.setValue(value);
    },
    // 清除组件选中值的方法
    clearSubDropDown: function () {
      this.$refs.mySubDropdown.clear();
    },
    // 禁用组件的方法
    disableSubDropDown: function () {
      this.$refs.mySubDropdown.disable();
    },
    // 启用组件的方法
    enableSubDropDown: function () {
      this.$refs.mySubDropdown.enable();
    },
    // 组件选中值变化时触发此方法
    onSubValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    // 在显示下拉Panel时触发此方法
    onSubShowPanel: function () {
      console.log('Panel Show');
    },
    // 在隐藏下拉Panel时触发此方法
    onSubHidePanel: function () {
      console.log('Panel Hide');
    }
  }
});
```
