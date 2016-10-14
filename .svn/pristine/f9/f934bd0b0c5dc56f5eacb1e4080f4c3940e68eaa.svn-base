# Speech-Bubble-Filter-Tree组件


# 组件概述

> 带标题栏的提示框（带有复选框以及树结构）


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean| Yes |  | 显示或隐藏提示框 |
| target | String | Yes  |  | 调用speech-bubble的组件id|
| size | String | No | large | 组件尺寸，small或者large|
| title | String | No | Speech Bubble | 标题名称 |
| itemName | String | No |  | 多选框的name属性 |
| buttonName | String | No | Update | 按钮名称 |
| items | Array | No |  | 数据列表，示例为 |

#### 注：items数据示例
```
 [
     {
         label: 'item4',  展示字段
         checked: true,   是否选中
         disabled: false, 是否可选
         value: 'value4', 值
         pid: '',         父节点ID
         id: 4,           节点ID
         count: 7         数量
     }
 ]
```

## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| speech-bubble-opend | | 显示提示框时触发|
| speech-bubble-closed |  | 关闭提示框时触发 |
| speech-bubble-button-click |  | 提示框按钮单击时触发 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | ---| --- |
| getCheckItem | | 获取复选框为选中的数据label和value值 |

# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/examples/speech-bubble-demo/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<div class="form-row" id = "speechBubbleDivLargeTree">
    <button id="showSpeechBubbleBtnLargeTree" @click="showSpeechBubble = true">Show Speech Bubble Filter Tree Large</button>
    <t-speech-bubble-filter-tree :show.sync="showSpeechBubble" :size="sizeSpeechBubble" :title="titleSpeechBubble" :target="showSpeechBubbleBtnId"
                            item-name="SpeechBubbleCheck" :button-name="buttonName" :items="items" v-ref:large-speech-bubble-tree>
    </t-speech-bubble-filter-tree>
</div>
```

### js实例组件代码
```
import Vue from 'vue';
import SpeechBubbleFilterTree from '../../components/speech-bubble/speech-bubble-filter-tree';

new Vue({
  el: '#speechBubbleDivLargeTree',
  components: {
    't-speech-bubble-filter-tree': SpeechBubbleFilterTree
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleBtnLargeTree',
      sizeSpeechBubble: 'large',
      titleSpeechBubble: 'Select columns',
      buttonName: 'Update filter',
      items: [
        {
          label: 'item1',
          checked: true,
          value: 'value1',
          pid: '',
          id: 1
        },
        {
          label: 'item2',
          checked: false,
          value: 'value2',
          pid: 1,
          id: 2,
          count: 7
        },
        {
          label: 'item3',
          checked: false,
          value: 'value3',
          pid: 1,
          id: 3,
          count: 7
        },
        {
          label: 'item4',
          checked: true,
          value: 'value4',
          pid: '',
          id: 4,
          count: 0
        },
        {
          label: 'item5',
          checked: true,
          value: 'value5',
          pid: '',
          id: 5,
          count: 7
        },
        {
          label: 'item6',
          checked: true,
          value: 'value6',
          pid: 4,
          id: 6,
          count: 7
        },
        {
          label: 'item7',
          checked: true,
          value: 'value7',
          pid: 4,
          id: 7,
          count: 7
        }
      ]
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    },
    'speech-bubble-button-click': function () {
      var items = this.$refs.largeSpeechBubbleTree.getCheckItem();
      console.log('speech bubble button click:' + items);
    }
  }
});

```
