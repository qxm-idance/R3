# Cookie-Helper


# 概述

> cookie-helper 封装了cookie的读写等操作


# API

## Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| writeCookie |  (key, value, options) | 写cookie |
| readCookie |  (key, value) | 读取cookie |
| removeCookie | (key, options) | 删除cookie |

# 使用示例

## 1.示例链接

<a href="/examples/cookie-helper-demo/index.html" target="_blank">[示例链接]</a>

## 2.Demo代码示例
### html代码
```html
<div class="container">
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Cookie操作演示</h2>
    </div>
    <div class="form-row">
      <button class="button button--action" v-on:click="writeCookie">write cookie</button>
      <button class="button button--action" v-on:click="readCookie">read cookie</button>
      <button class="button button--action" v-on:click="removeCookie">remove cookie</button>
    </div>
    <div class="form-row">
      <h2 class="title--small">Cookie信息：</h2>
    </div>
    <div>
      <div><strong>SEC_AUTH_TOKEN_KEY: </strong>{{ sec_auth_token_key }}</div>
      <div><strong>SEC_AUTH_TENANT_KEY: </strong>{{ sec_auth_tenant_key }}</div>
      <div><strong>SEC_AUTH_ROLETYPE_KEY: </strong>{{ sec_auth_roletype_key }}</div>
      <div><strong>SEC_AUTH_ZONE_KEY: </strong>{{ sec_auth_zone_key }}</div>
    </div>
  </div>
```

### js实例代码
```javascript
import Vue from 'vue';
import cookieHelper from '../../utils/cookie-helper';
import appConfig from '../../config/app-config.json';

new Vue({
  el: 'body',
  data: function () {
    return {
      sec_auth_token_key: '--',
      sec_auth_tenant_key: '--',
      sec_auth_roletype_key: '--',
      sec_auth_zone_key: '--'
    };
  },
  methods: {
    writeCookie: function () {
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TENANT_KEY, '10');
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ROLETYPE_KEY, 'Operator');
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ZONE_KEY, '+0900');
      this.readCookie();
    },
    readCookie: function () {
      this.sec_auth_token_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_TOKEN_KEY);
      this.sec_auth_tenant_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_TENANT_KEY);
      this.sec_auth_roletype_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_ROLETYPE_KEY);
      this.sec_auth_zone_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_ZONE_KEY);
    },
    removeCookie: function () {
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TOKEN_KEY);
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TENANT_KEY);
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ROLETYPE_KEY);
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ZONE_KEY);
      this.sec_auth_token_key = '--';
      this.sec_auth_tenant_key = '--';
      this.sec_auth_roletype_key = '--';
      this.sec_auth_zone_key = '--';
    }
  }
});
```
