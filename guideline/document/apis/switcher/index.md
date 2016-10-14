# Switcher·组件


# 组件概述

>Switcher组件，用于开关的切换

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| onText | String| No | ON | 打开状态的文字 |
| offText | String | No  | OFF | 关闭状态的文字|
| disabled | Boolean | No | true | 是否不可点击 |
| value | Boolean | No | true | 组件的状态 ，为true时，组件处于激活状态，false时为非激活状态 |
| wide | Boolean | No | false | 组件是否为加宽模式 |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| on-change |  | 组件值改变时触发 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| toggle |  | 切换组件值 |
| setValue | Boolean | 设置组件的值 |
| getValue |  | 获得组件的值 |
| enable |  | 设置组件可用|
| disable |  | 设置组件不可用 |


# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/switcher-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```
<t-switcher v-ref:myswitcher :on-text='switcher.onText' :off-text='switcher.offText' :disabled='switcher.disabled' :value='switcher.value'
			            @on-change="change"></t-switcher>
<t-switcher v-ref:mylongswitcher :on-text='longSwitcher.onText' :off-text='longSwitcher.offText' :disabled='longSwitcher.disabled' :value='longSwitcher.value'
			            @on-change="change" wide></t-switcher>
```

### js实例组件代码
```
new Vue({
  el: '#switcher',
  components: {
    TSwitcher
  },
  data: {
    switcher: {
      onText: 'Yes',
      offText: 'No',
      disabled: false,
      value: false
    },
    longSwitcher: {
      onText: 'Some long',
      offText: 'Other long',
      disabled: false,
      value: false
    }
  },
  methods: {
    change (value) {
      console.info('valueChanged', value);
    },
    toggleIt () {
      this.$refs.myswitcher.toggle();
    },
    setValue (value) {
      this.$refs.myswitcher.setValue(value);
    },
    getValue () {
      let value = this.$refs.myswitcher.getValue();
      console.info('getValue', value);
    },
    enable () {
      this.$refs.myswitcher.enable();
    },
    disable () {
      this.$refs.myswitcher.disable();
    }
  }
});
```