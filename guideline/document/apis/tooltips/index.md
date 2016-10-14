# Tooltips指令


# 组件概述

> tips提示指令，当鼠标滑过时显示tips内容，鼠标移出时隐藏tips,指令初始化时在body中插入tips的dom结构，当指令所在的组件销毁时清除body中的tips内容。指令id为v-tooltip


# 组件API

## 1.指令参数

| 参数名 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| arg | | No | normal | 指令类型，可选error,blue,normal |
| value | Object | Yes |  | tips中的提示内容，其中title字段为tip标题，text为tip内容，传入字面量字符串，则当成text解析 |
| modifiers | | No |  | 是否传入literal以字面量形式传入参数 |

## 2.Events \(事件\)

无

## 3.Methods \(方法\)

无

# 组件Demo示例

## 1.组件Demo示例链接

[组件Demo示例链接](/examples/tooltips-demo/index.html)

## 2.组件Demo代码示例
### html代码
```
<div class="sg-component__label">Normal tip</div>
<p class="icon-error tooltip__trigger"
        v-tooltip:blue.literal="value by straight string"
        v-if="isDestroy">
</p>

<div class="sg-component__label">Normal tip with title</div>
<p class="icon-error tooltip__trigger" v-tooltip="{title: tipTitle, text: tipText}"></p>

<div class="sg-component__label">Error tip with title</div>
<div class="icon-error tooltip__trigger" v-tooltip:error="{title: errorTitle, text: errorText}">
</div>

```

### js实例组件代码
```JavaScript
import Vue from 'vue';
import Tooltip from 'taurus/directives/tooltips/tooltip';

Vue.use(Tooltip);
new Vue({
  el: 'body',
  data: {
    tipTitle: 'tipTitle',
    tipText: 'this is  tipText!',
    errorTitle: 'error title',
    errorText: 'this is error text',
    longTipMessage: 'this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message',
    formTipTitle: 'form-tipTitle',
    formTipText: 'form-tipText',
    isDestroy: false
  }
});
```
