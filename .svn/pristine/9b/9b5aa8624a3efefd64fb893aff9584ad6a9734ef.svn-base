# Modal Box组件


# 组件概述

> 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal Box 在当前页面正中打开一个浮层，承载相应的操作。


# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean| Yes | false | 对话框是否可见 |
| size | String | No  | samll | 组件初始化所需的数据，描述弹框的大小samll，large配置项|
| backdrop | Boolean | No | false |点击遮罩层是否关闭弹框 |



## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| modal-open | | 事件监听，弹框打开的时候触发 |
| modal-closed |  | 事件监听，弹框关闭的时候触发 |


## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| close |  | 点击遮罩层或右上角叉或取消按钮的回调 |



# 组件Demo示例

## 1.组件Demo示例链接

[组件Demo示例链接](/examples/modal-box-demo/index.html)

## 2.组件Demo代码示例
### html代码
```
<div id="defaultModal" style="margin-bottom:50px;">
    <button id="show-modal" @click="showModal= true">Default Modal</button>
    <!-- backdrop:true 点击空表处关闭,默认不关闭 -->
    <t-modal-box :show.sync="showModal" :size="sizeModal" :backdrop="true">
        <div>
            <p>i`m a default modal</p>
            <p>i`m a default modal</p>
        </div>
    </t-modal-box>
</div>
<div id="actionButtonModal">
    <button id="show-modal" @click="showActionModal= true">Action Button Modal</button>
    <!-- v-ref:modal 这种是通过父子组件通信，拿到子组件的方法 -->
    <t-modal-box :show.sync="showActionModal" :size="sizeModal"  v-ref:modal>
        <div>
            <p>i`m a action-button-modal </p>
            <p>i`m a action-button-modal </p>
            <t-button text="Ok" class="button--action" v-on:btn-click="onOk"></t-button>
            <t-button text="Cancel" class="button--action" v-on:btn-click="onCancel"></t-button>
        </div>
    </t-modal-box>
</div>
```

### js实例组件代码
```
import Vue from 'vue';
import ModalBox from 'taurus/components/modal-box/modal-box';
import Button from 'taurus/components/button/button';
new Vue({
  el: '#defaultModal',
  components: {
    't-modal-box': ModalBox
  },
  data: {
    showModal: false,
    sizeModal: 'large'
    // 默认是'samll',对应的样式是modal-box--size-small
  },
  events: {
    'modal-opend': function () {
      console.log('modal-box is opend');
    },
    'modal-closed': function () {
      console.log('modal-box is closed');
    }
  }
});

new Vue({
  el: '#actionButtonModal',
  components: {
    't-modal-box': ModalBox,
    't-button': Button
  },
  data: {
    showActionModal: false,
    sizeModal: 'large'
  },
  methods: {
    close: function () {
      // 通过子组件的props里面的属性来关闭
      this.showActionModal = false;
    },
    onOk: function () {
      this.close();
    },
    onCancel: function () {
      // 通过v-ref通信来访问子组件的方法
      this.$refs.modal.close();
    }
  },
  events: {
    // 事件监听
    'modal-opend': function () {
      console.log('modal-box is opend');
    },
    'modal-closed': function () {
      console.log('modal-box is closed');
    }
  }
});

```
