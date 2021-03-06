# Modal 组件


# 组件概述

> 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal  在当前页面正中打开一个浮层，承载相应的操作。基于这个Modal组件封装了一个Confirm组件。


# 组件API

## 1.Props \(参数\)->[Modal]

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean| Yes | false | 对话框是否可见，异步的 |
| title | String | No  |  | 标题，常用于confirm配置|
| msg | String | No |  |详细描述，可以是字符串或者模板字符串，常用于confirm配置 |
| clickOverlayClose | Boolean | No | false |点击遮罩层是否关闭弹框 |
| hideIconClose | Boolean | No | false |是否显示 'x' 关闭按钮 |
| type | String | No  |  | 标题，常用于confirm配置|

## 1.Props \(参数\)->[Confirm]

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean| Yes | false | 对话框是否可见，异步的 |
| title | String | No  |  | 标题，常用于confirm配置|
| msg | String | No |  |详细描述，可以是字符串或者模板字符串，常用于confirm配置 |
| type | String | Yes  |  | confirm类型，[info,success,error]三类|
| @sure/on-sure | Function | No  |  | confirm非自定义的时候，点击Sure触发|
| @cancel/on-cancel | Function | No  |  |  confirm非自定义的时候，点击Cancel触发|




## 2.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| close |  | 点击遮罩层或右上角叉或取消按钮的回调 |



# 组件Demo示例

## 1.组件Demo示例链接

[组件Demo示例链接](http://localhost:8080/examples/modal-demo/index.html)

## 2.组件Demo代码示例
### html代码
```
  <div class="container">
    <h1>Default modal</h1>
    <div style="margin-bottom:40px">
      <button @click="showMoal0" class="button button--action">Click on the modal</button>
      <t-modal title="" :show.sync="showMoal0State" :hide-close="true" :hide-icon-close="false" class="modal-box--size-large">
        <div>modal content</div>
      </t-modal>
    </div>
    <h1>Action buttons modal</h1>

    <button @click="showConfirm" class="button button--action">Confirm</button>
    <!--
       type: 'info', 'success', 'error'
    -->
    <t-confirm :title="confirm.title" @sure="handlerSure" @cancel="handlerCancel" type="info" :show.sync="confirm.show" :msg="confirm.msg">
    </t-confirm>

    <button @click="showConfirm2" class="button button--action" >Confirm2</button>
    <t-confirm :title="confirm2.title" type="success" :show.sync="confirm2.show" :msg="confirm2.msg" >
      <div slot="body">
        自定义自定义{{confirm2.msg}}
      </div>
      <button class="button button--default button-flex" slot="footer" @click="act1">btn-1</button>
      <button class="button button--default button-flex" slot="footer" @click="act2">btn-2</button>
      <button class="button button--action  button-flex" slot="footer">确定</button>
    </t-confirm>

    <button @click="customShow" class="button button--action">Custom Modal</button>
    <t-modal title="Login Modal" :show.sync="loginModal" :click-overlay-close="false">
      <div class="login-modal">
        <div class="form-item--multi form-row">
          <div class="form-item form-col--med">
              <input label="用户名" type="text" placeholder="User name" v-model="loginModel.username">
          </div>
          <div class="form-item">
              <input label="密码" type="text" placeholder="Password" v-model="loginModel.password" type="password">
          </div>
        </div>
      </div>
      <div class="block--col">
        <div class="float--right row">
          <button text="取消" slot="footer" class="button button--action" @click="this.loginModal = false">取消</button>
          <button text="登录" slot="footer" class="button button--action" @click="loginHandler" color="red">登录</button>
        </div>
      </div>
    </t-modal>
  </div>
```

### js实例组件代码
```
import { TAlert, TConfirm, TModal } from '../../utils/taurus';

new Vue({
  el: document.body,
  components: {
    TAlert,
    TConfirm,
    TModal
  },
  data () {
    return {
      showMoal0State: false,
      showMoal1State: false,
      alert: {
        show: false
      },
      confirm: {
        show: false
      },
      confirm2: {
        show: false
      },
      loginModal: false,
      loginModel: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    showMoal0 () {
      this.showMoal0State = true;
    },
    showMoal1 () {
      this.showMoal1State = true;
    },
    showAlert () {
      this.alert = {
        title: '提示',
        msg: '这是普通提示信息',
        show: true
      };
    },
    showConfirm (type) {
      this.confirm = {
        title: 'Remove Agreement',
        msg: '<p class="text--center">Are you sure you want to remove the agreement from your cart? <br> The atreement cleared</p>',
        show: true
      };
    },
    handlerSure () {
      alert('点了确定');
      this.alert.show = false;
    },
    handlerCancel () {
      alert('点了取消');
      this.alert.show = false;
    },
    showConfirm2 (type) {
      this.confirm2 = {
        title: 'Remove Agreement',
        msg: 'Are you sure you want to remove the agreement from your cart',
        show: true
      };
    },
    act1 () {
      this.confirm2.show = false;
      alert('点了btn1');
    },
    act2 () {
      this.confirm2.show = false;
      alert('点了btn2');
    },
    customShow () {
      this.loginModal = true;
    },
    loginHandler () {
      alert(JSON.stringify(this.loginModel));
      this.loginModal = false;
    }
  }
});

```
