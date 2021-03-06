# Tab组件


# 组件概述

> 通用页签组件，支持设置页签展示大小，适配不同终端。

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| small | Boolean | No | false | 组件显示尺寸 |
| tabs | Array | Yes  | [] | 页签头标题名。|
| content | Array | Yes | [] | 页签内容（标题名和内容区域建立连接）。 |
| tabActive | String | No | $index_0 | 组件初始化默认展示的页签（此处填写页签标题名） |

## 2.Events \(事件\)

无

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| changeTab | TabName | 切换到指定页签项（入参为指定页签的标题名） |


# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/tabs-demo/index.html" target="_blank">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<t-tabs :tabs="tabs" :content="content" tab-active="Panel 2">
  <section id="panel_one" class="tabpanel__panel">
    <div class="sg-component__label">Tab content 1</div>
  </section>
  <section id="panel_two" class="tabpanel__panel">
    <div class="sg-component__label">Tab content 2</div>
  </section>
  <section id="panel_three" class="tabpanel__panel is-active">
    <div class="sg-component__label">Tab content 3</div>
  </section>
</t-tabs>
```

### js实例组件代码
```
import Vue from 'vue';

import TTabs from 'taurus/components/tabs/tabs';

new Vue({
  name: 'TabsDemo',

  el: 'body',

  components: {
    TTabs
  },

  data () {
    return {
      tabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      content: [
        {
          type: 'Panel 1',
          id: 'panel_one'
        },
        {
          type: 'Panel 2',
          id: 'panel_two'
        },
        {
          type: 'Panel 3',
          id: 'panel_three'
        }
      ]
    };
  }
});
```
