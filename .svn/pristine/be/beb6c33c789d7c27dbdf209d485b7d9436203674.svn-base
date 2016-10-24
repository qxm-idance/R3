# Dynamic-Tab组件


# 组件概述

> 动态tab组件，支持新增和关闭页签，关闭或新增页签会触发相应的事件。页签总数不能超过15个


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| tabs | Array| Yes | [{name:'index'}] | 组件初始化所需的数据,name字段是必要属性，且不可重复，source字段为可选属性，表示页签打开来源 |



## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| tab-change | \(newValue, oldValue\) | 当激活的页签由一个变为另一个的时候触发，关闭和打开新的页签都会触发此事件 |
| tab-add | \(name\) | 页签新增时触发，name参数为新页签的名字,打开的新页签处于立即激活状态 |
| tab-close | \(name\) | 页签关闭时触发，name参数为关闭的页签的名字 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| addTab | \(data\) | 新增一个页签，data为新页签数据，Object类型，必须有name属性，且name不可与其他页签相同 |
| closeTab | \(data\) | 关闭一个页签，data为要关闭的 页签数据，Object类型，必须有name属性 |



# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/tabs-demo/index.html" target="_blank">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<t-d-tabs
  :tabs="tabs"
  v-on:tab-change="onChange"
  v-on:tab-add="onAdd"
  v-on:tab-close="onClose"
  v-ref:td-tab>
</t-d-tabs>
<div class="form-row">
  <button @click="addOneTab({name: 'newTab1'})" class="button button--action">add new1</button>
  <button @click="closeOneTab({name: 'newTab1'})" class="button button--action">close new 1</button>
  <button @click="addOneTab({name: 'query tab', source: 'query'})" class="button button--action">add query tab</button>
  <button @click="addMoreTab" class="button button--action">add more</button>
</div>
```

### js实例组件代码
```
import Vue from 'vue';

import TDTabs from '../../components/tabs/dynamic-tabs';

new Vue({
  name: 'Dynamic tab demo',

  el: 'body',

  components: {
    TDTabs
  },

  data () {
    return {
      tabs: [{name: 'Panel_1'}, {name: 'Panel_2'}, {name: 'Panel_3'}]
    };
  },

  methods: {
    addOneTab (tab) {
      this.$refs.tdTab.addTab(tab);
    },
    addMoreTab () {
      this.$refs.tdTab.addTab({name: 'tab' + (Math.random() + '').substr(2)});
    },
    closeOneTab (tab) {
      this.$refs.tdTab.closeTab(tab);
    },
    onChange (val, oldVal) {
      alert(oldVal + '--->' + val);
    },
    onAdd (tab) {
      alert('tab ' + tab + 'was added!');
    },
    onClose (tab) {
      alert('tab ' + tab + 'was closed!');
    }
  },

  events: {
    'tab-change' () {},
    'tab-add' () {},
    'tab-close' () {}
  }

});
```
