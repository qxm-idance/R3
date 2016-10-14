# Speech-Bubble-Filter组件


# 组件概述

> 带标题栏的提示框（带有复选框）


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
| labels | Array | No | Untitled | 设置checkbox的label（支持传入'item,item1,item2'格式字符串） |
| disabled | Array | No | '0' |  checkbox的disabled属性设置（支持传入'0,1,2'格式字符串）|
| values | Array | No | - | checkbox的value （支持传入'0,1,2'格式字符串） |
| checked | Array | No | '0' | checkbox的checked属性设置 （支持传入'0,1,2'格式字符串）|
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
<!--When Speech-Bubble's attribute showSpeechBubble value is large -->
<div class="form-row" id = "speechBubbleFilterDivLarge">
    <button id="showSpeechBubbleFilterBtnLarge" @click="showSpeechBubble = true">Show Speech Bubble Filter Large</button>
    <t-speech-bubble-filter :show.sync="showSpeechBubble" :size="sizeSpeechBubble" :title="titleSpeechBubble" :target="showSpeechBubbleBtnId"
                            :labels="labels" item-name="SpeechBubbleCheck" :checked="checked" :disabled="disabled" :values="values"
                            :button-name="buttonName" v-ref:large-speech-bubble>
    </t-speech-bubble-filter>
</div>

<!--When Speech-Bubble's attribute showSpeechBubble value is small -->
<div class="form-row" id = "speechBubbleFilterDivSmall">
    <button id="showSpeechBubbleFilterBtnSmall" @click="showSpeechBubble = true">Show Speech Bubble Filter Small</button>
    <t-speech-bubble-filter :show.sync="showSpeechBubble" :size="sizeSpeechBubble" :title="titleSpeechBubble" :target="showSpeechBubbleBtnId"
                            :labels="labels" item-name="SpeechBubbleCheck" :checked="checked" :disabled="disabled" :values="values"
                            :button-name="buttonName" v-ref:small-speech-bubble>
    </t-speech-bubble-filter>
</div>
```

### js实例组件代码
```
import Vue from 'vue';
import SpeechBubbleFilter from '../../components/speech-bubble/speech-bubble-filter';

//When Speech-Bubble's attribute showSpeechBubble value is large.
new Vue({
  el: '#speechBubbleFilterDivLarge',
  components: {
    't-speech-bubble-filter': SpeechBubbleFilter
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleFilterBtnLarge',
      sizeSpeechBubble: 'large',
      titleSpeechBubble: 'Select columns',
      labels: 'item1,item2,item3,item4',
      checked: '0,1,0,0',
      disabled: '0,1,0,1',
      values: 'This,is,a,test',
      buttonName: 'Update table'
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
      this.$refs.largeSpeechBubble.getCheckItem();
      console.log('speech bubble button click');
    }
  }
});

//When Speech-Bubble's attribute showSpeechBubble value is small.
new Vue({
  el: '#speechBubbleFilterDivSmall',
  components: {
    't-speech-bubble-filter': SpeechBubbleFilter
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleFilterBtnSmall',
      sizeSpeechBubble: 'small',
      titleSpeechBubble: 'Select columns',
      labels: 'item1,item2,item3,item4',
      checked: '0,1,0,0',
      disabled: '0,1,0,1',
      values: 'This,is,a,test',
      buttonName: 'Update table'
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
      var checkedItem = this.$refs.smallSpeechBubble.getCheckItem();
      for (var i in checkedItem) {
        console.log('check item value:' + checkedItem[i].value);
      }
      console.log('speech bubble button click');
    }
  }
});

```
