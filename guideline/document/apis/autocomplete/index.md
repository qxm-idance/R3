# autocomplete组件


# 组件概述

>autocomplete组件，根据用户输入值进行搜索和过滤，让用户快速找到并从预设值列表中选择。

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| source | String, Array, Function| Yes |  | 定义要使用的数据，必须指定 |
| delay | Number | No  | 0 or 300 | 键和执行搜索之间的延迟，以毫秒计。默认远程调用300，本地0|
| resultLimit | Number | No | 10 | 显示结果的条数限制 |
| autoFocus | Boolean | No | false | 如果设置为 true，当菜单显示时，第一个条目将自动获得焦点|
| disabled | Boolean | No | false | 如果设置为 true，则该 autocomplete不会弹出搜索结果框，仅作为普通输入框 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| change |  \({oldValue: '改变前值', newValue: '改变后的值'}\) | 搜索值发生了改变 |
| close |  | 关闭搜索结果列表菜单 |
| open |  | 打开搜索结果列表菜单 |
| select | value | 选择搜索结果,参数为选择的内容 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| set-disabled |  | 设置组件是否可用 |


# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/autocomplete-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```html
<div class="sg-component ml20 mt20">
  <div class="sg-component__header">
    <h2 class="title--medium-small trailer--small">Autocomplete</h2>
  </div>
  <div id="autocomplete-wrap" class="sg-component__markup">
    <div class="mb20">
      <button class="button button--action" @click="setDisabled" data-action="disable">disable</button>
      <button class="button button--action ml20" @click="setDisabled" data-action="enable">enable</button>
    </div>
    <t-autocomplete :source="source" :disabled.sync="disabled" :auto-focus="autoFocus"></t-autocomplete>
    <label class="mt20">disabled-status:{{disabled}}</label>
  </div>
</div>
```

### js实例组件代码
```js
new Vue({
  el: '#autocomplete-wrap',
  components: {
    't-autocomplete': AutoComplete
  },
  data: {
    // delay: 1000,
    disabled: false,
    autoFocus: true,
    source: [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
    ]
    // source: 'fakeData.json' 服务调用暂时不支持
  },
  events: {
    'change': function (value) {
      console.log('change:' + value);
    },
    'close': function () {
      console.log('close dropdown menu');
    },
    'open': function () {
      console.log('open dropdown menu');
    },
    'select': function (selected) {
      console.log(selected);
    }
  },
  methods: {
    setDisabled: function (e) {
      var _action = e.target.getAttribute('data-action');
      if (_action === 'enable') {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
      this.$broadcast('set-disabled', this.disabled);
      console.log(this.disabled);
    }
  }
});

```
