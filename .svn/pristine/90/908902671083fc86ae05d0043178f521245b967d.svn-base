# Speech-Bubble组件


# 组件概述

> 带标题栏的提示框


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean| Yes |  | 显示或隐藏提示框 |
| target | String | Yes  |  | 调用speech-bubble的组件id|
| size | String | No | large | 组件尺寸，small或者large|
| title | String | No | Speech Bubble | 标题名称 |
## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| speech-bubble-opend | | 显示提示框时触发|
| speech-bubble-closed |  | 关闭提示框时触发 |

## 3.Methods \(方法\)

无

# 组件Demo示例

## 1.组件Demo示例链接

<a target="_blank" href="/examples/speech-bubble-demo/index.html">组件Demo示例链接</a>

## 2.组件Demo代码示例
### html代码
```
<!--When Speech-Bubble's attribute showSpeechBubble value is large -->
<div id = "speechBubbleDivLarge">
    <button id="showSpeechBubbleBtnLarge" @click="showSpeechBubble = true">Show Speech Bubble Large</button>
    <t-speech-bubble :show.sync="showSpeechBubble" :size="sizeSpeechBubble" :title="titleSpeechBubble" :target="showSpeechBubbleBtnId">
      <h2>Some html content</h2>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
    </t-speech-bubble>
</div>

<!--When Speech-Bubble's attribute showSpeechBubble value is small -->
<div id = "speechBubbleDivSmall">
    <button id="showSpeechBubbleBtnSmall" @click="showSpeechBubble = true">Show Speech Bubble Small</button>
    <t-speech-bubble :show.sync="showSpeechBubble" :size="sizeSpeechBubble" :title="titleSpeechBubble" :target="showSpeechBubbleBtnId">
      <h2>Some html content</h2>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
      <p>Some paregraph bla bla..</p>
    </t-speech-bubble>
</div>
```

### js实例组件代码
```
import Vue from 'vue';
import SpeechBubble from '../../components/speech-bubble/speech-bubble';

//When Speech-Bubble's attribute showSpeechBubble value is large.
new Vue({
  el: '#speechBubbleDivLarge',
  components: {
    't-speech-bubble': SpeechBubble
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleBtnLarge',
      sizeSpeechBubble: 'large',
      titleSpeechBubble: '1112'
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    }
  }
});

//When Speech-Bubble's attribute showSpeechBubble value is small.
new Vue({
  el: '#speechBubbleDivSmall',
  components: {
    't-speech-bubble': SpeechBubble
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleBtnSmall',
      sizeSpeechBubble: 'small',
      titleSpeechBubble: '1112'
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    }
  }
});

```
