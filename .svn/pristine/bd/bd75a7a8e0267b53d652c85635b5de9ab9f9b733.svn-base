# Flat-Tab组件


# 组件概述

> 扁平页签组件，支持数量较多的页签展示。

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| manyItems | Boolean | No | false | 大量页签展示模式 |
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
<t-flat-tabs :tabs="flatTabs" :content="flatContent" :many-items="true">
    <section id="flat_panel_one" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 1</div>
    </section>
    <section id="flat_panel_two" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 2</div>
    </section>
    <section id="flat_panel_three" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 3</div>
    </section>
    <section id="flat_panel_four" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 4</div>
    </section>
    <section id="flat_panel_five" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 5</div>
    </section>
    <section id="flat_panel_6" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 6</div>
    </section>
    <section id="flat_panel_7" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 7</div>
    </section>
    <section id="flat_panel_8" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 8</div>
    </section>
    <section id="flat_panel_9" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 9</div>
    </section>
    <section id="flat_panel_10" class="tabpanel__panel">
      <div class="sg-component__label">Flat Tab 10</div>
    </section>
</t-flat-tabs>
```

### js实例组件代码
```
import Vue from 'vue';

import TFlatTabs from 'taurus/components/tabs/flat-tabs';

new Vue({
  name: 'TabsDemo',

  el: 'body',

  components: {
    TFlatTabs
  },

  data () {
    return {
      flatTabs: ['LongPanel 1', 'LongPanel 2', 'LongPanel 3', 'LongPanel 4', 'LongPanel 5', 'LongPanel 6', 'LongPanel 7', 'LongPanel 8', 'LongPanel 9', 'LongPanel 10'],
      flatContent: [
        {
          type: 'LongPanel 1',
          id: 'flat_panel_one'
        },
        {
          type: 'LongPanel 2',
          id: 'flat_panel_two'
        },
        {
          type: 'LongPanel 3',
          id: 'flat_panel_three'
        },
        {
          type: 'LongPanel 4',
          id: 'flat_panel_four'
        },
        {
          type: 'LongPanel 5',
          id: 'flat_panel_five'
        },
        {
          type: 'LongPanel 6',
          id: 'flat_panel_6'
        },
        {
          type: 'LongPanel 7',
          id: 'flat_panel_7'
        },
        {
          type: 'LongPanel 8',
          id: 'flat_panel_8'
        },
        {
          type: 'LongPanel 9',
          id: 'flat_panel_9'
        },
        {
          type: 'LongPanel 10',
          id: 'flat_panel_10'
        }
      ]
    };
  }
});
```
