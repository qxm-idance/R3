import {cookieHelper, taurus, localStorage} from '../../utils/taurus';

new Vue({
  el: 'body',
  ready () {
    this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
    this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
  },
  data: function () {
    return {
      sec_auth_token_key: '--',
      sec_auth_tenant_key: '--',
      sec_auth_roletype_key: '--',
      sec_auth_zone_key: '--',
      bizInfoKey: {
        customer_id: 'CUSTOMER_ID',
        org_id: 'ORG_ID',
        role_type: 'ROLE_TYPE',
        product_type: 'PRODUCT_TYPE',
        customer_name: 'CUSTOMER_NAME',
        address: 'ADDRESS'
      },
      bizInfoValue: {
        customer_id: '',
        org_id: '',
        role_type: '',
        product_type: '',
        customer_name: '',
        address: ''
      }
    };
  },
  methods: {
    writeCookie: function () {
      cookieHelper.writeCookie(taurus.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
      cookieHelper.writeCookie(taurus.SEC_AUTH_TENANT_KEY, '10');
      cookieHelper.writeCookie(taurus.SEC_AUTH_ROLETYPE_KEY, 'Operator');
      cookieHelper.writeCookie(taurus.SEC_AUTH_ZONE_KEY, '+0900');
      this.readCookie();
    },
    readCookie: function () {
      this.sec_auth_token_key = cookieHelper.readCookie(taurus.SEC_AUTH_TOKEN_KEY);
      this.sec_auth_tenant_key = cookieHelper.readCookie(taurus.SEC_AUTH_TENANT_KEY);
      this.sec_auth_roletype_key = cookieHelper.readCookie(taurus.SEC_AUTH_ROLETYPE_KEY);
      this.sec_auth_zone_key = cookieHelper.readCookie(taurus.SEC_AUTH_ZONE_KEY);
    },
    removeCookie: function () {
      cookieHelper.writeCookie(taurus.SEC_AUTH_TOKEN_KEY);
      cookieHelper.writeCookie(taurus.SEC_AUTH_TENANT_KEY);
      cookieHelper.writeCookie(taurus.SEC_AUTH_ROLETYPE_KEY);
      cookieHelper.writeCookie(taurus.SEC_AUTH_ZONE_KEY);
      this.sec_auth_token_key = '--';
      this.sec_auth_tenant_key = '--';
      this.sec_auth_roletype_key = '--';
      this.sec_auth_zone_key = '--';
    },
    writeBizCookie: function () {
      taurus.setBizInfo(this.bizInfoKey.customer_id, '201610178909');
      taurus.setBizInfo(this.bizInfoKey.org_id, '876829');
      taurus.setBizInfo(this.bizInfoKey.role_type, '1');
      taurus.setBizInfo(this.bizInfoKey.product_type, '21000');
      this.readBizCookie();
    },
    rewriteBizCookie: function () {
      taurus.setBizInfo(this.bizInfoKey.customer_id, '9999999999');
      taurus.setBizInfo(this.bizInfoKey.org_id, '88888');
      taurus.setBizInfo(this.bizInfoKey.role_type, '2');
      taurus.setBizInfo(this.bizInfoKey.product_type, '99000');
      this.readBizCookie();
    },
    readBizCookie: function () {
      this.bizInfoValue.customer_id = taurus.getBizInfo(this.bizInfoKey.customer_id);
      this.bizInfoValue.org_id = taurus.getBizInfo(this.bizInfoKey.org_id);
      this.bizInfoValue.role_type = taurus.getBizInfo(this.bizInfoKey.role_type);
      this.bizInfoValue.product_type = taurus.getBizInfo(this.bizInfoKey.product_type);
    },
    removeBizCookie: function () {
      taurus.removeBizInfo(this.bizInfoKey.customer_id);
      taurus.removeBizInfo(this.bizInfoKey.org_id);
      taurus.removeBizInfo(this.bizInfoKey.role_type);
      taurus.removeBizInfo(this.bizInfoKey.product_type);
      this.readBizCookie();
    },
    writeLocalStorage () {
      localStorage.set(this.bizInfoKey.customer_name, 'Wendy');
      localStorage.set(this.bizInfoKey.address, 'Nanjing');
      this.readLocalStorage();
    },
    rewriteLocalStorage () {
      localStorage.set(this.bizInfoKey.customer_name, 'Teemo');
      localStorage.set(this.bizInfoKey.address, 'Home');
      this.readLocalStorage();
    },
    readLocalStorage () {
      this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
      this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
    },
    removeLocalStorage () {
      localStorage.remove(this.bizInfoKey.customer_name);
      localStorage.remove(this.bizInfoKey.address);
      this.readLocalStorage();
    }
  }
});
