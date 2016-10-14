<template>
  <div v-show="visible" transition="expand" class="message {{msgBoxClass}} {{classPosition}}">
    <div class="message__inner">
      <span v-show="{{icon}}" class="message__icon icon {{msgIconClass}}"></span>
      <div class="text--small message__text">
        <p>{{content}}</p>
      </div>
      <button v-show="{{close}}" v-on:click.stop.prevent="closeMsg($event)" class="message__close no-js--hidden"><span class="icon-remove"></span></button>
    </div>
  </div>
</template>

<script>
  const CSS_INFO = 'message--info';
  const CSS_SUCCESS = 'message--success';
  const CSS_ALERT = 'message--alert';
  const CSS_ERROR = 'message--error';
  const ICON_INFO = 'icon-notification';
  const ICON_SUCCESS = 'icon-check-grey';
  const ICON_ALERT = 'icon-error-no-bg';
  const ICON_ERROR = 'icon-reject';

  export default {
    name: 'taurus-status-message',
    props: {
      type: {
        type: String,
        default: 'info',
        coerce: function (type) {
          return (['info', 'success', 'alert', 'error'].indexOf(type) === -1) ? 'info' : type;
        }
      },
      icon: {
        type: Boolean,
        default: true
      },
      close: {
        type: Boolean,
        default: true
      },
      content: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'bottom',
        coerce: function (position) {
          return (['top', 'bottom'].indexOf(position) === -1) ? 'bottom' : position;
        }
      }
    },
    data: function () {
      return {
        visible: false,
        classObject: {
          boxClass: CSS_INFO,
          iconClass: ICON_INFO
        },
        position: 'bottom',
        type: 'info',
        icon: true,
        close: true,
        content: ''
      };
    },

    computed: {
      msgBoxClass () {
        let classForType = CSS_INFO;
        this.classObject.iconClass = ICON_INFO;
        switch (this.type) {
          case 'success' :
            classForType = CSS_SUCCESS;
            this.classObject.iconClass = ICON_SUCCESS;
            break;
          case 'alert' :
            classForType = CSS_ALERT;
            this.classObject.iconClass = ICON_ALERT;
            break;
          case 'error' :
            classForType = CSS_ERROR;
            this.classObject.iconClass = ICON_ERROR;
            break;
          default : // 所有不合法的输入按照默认值info来处理
            break;
        }
        return classForType;
      },
      msgIconClass () {
        return this.classObject.iconClass;
      },
      classPosition () {
        if (this.position === 'top') {
          return 'topPosition';
        } else {
          return 'bottomPosition';
        }
      }
    },

    methods: {
      closeMsg: function (event) {
        this.visible = false;
      }
    }
  };

</script>

<style>
  .expand-transition {
    transition: all .3s ease;
    overflow: hidden;
  }
  /* .expand-enter 定义进入的开始状态 */
  /* .expand-leave 定义离开的结束状态 */
  .expand-enter, .expand-leave {
    height: 0;
    opacity: 0;
  }
  .topPosition {
    position: fixed;
    top: 0;
  }
  .bottomPosition {
    position: fixed;
    bottom: 0;
  }
</style>
