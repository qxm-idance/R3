<template>
  <component :is="compType" :show.sync="show" :size="size" :title="title" :target="target" show-close="false">
    <div class="accordion-filter">
      <ul>
        <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox"
            v-for="item in labels" @click.stop.prevent="itemOnClick($event)">
          <input type="checkbox" id="tau-chk-{{$index}}" name="{{ itemName }}" :checked="checked[$index]" :disabled="disabled[$index]"
                 :value="values[$index]" idx="{{$index}}">
          <label for="tau-chk-{{$index}}">{{ item }}</label>
        </li>
      </ul>
    </div>
    <div class="box--greyed multi-filter__submit-panel">
      <button type="button" class="button button--action button--small" @click="buttonClick">{{buttonName}}</button>
    </div>
  </component>
</template>
<script>
  import SpeechBubble from '../speech-bubble/speech-bubble.vue';

  const DEF_VALUE = '-';

  export default {
    name: 'taurus-speech-bubble-filter',
    components: {
      't-speech-bubble': SpeechBubble
    },
    data: function () {
      return {
        compType: 't-speech-bubble',
        itemsFormat: []
      };
    },
    props: {
      // 显示隐藏参数
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      // 调用speech-bubble的组件id
      target: {
        type: String,
        required: true
      },
      // small或者large
      size: {
        default: 'large',
        type: String
      },
      // 标题名称
      title: {
        default: 'Speech Bubble',
        type: String
      },
      // 多选框的name属性
      itemName: {
        default: '',
        type: String
      },
      // 按钮名称
      buttonName: {
        default: 'Update',
        type: String
      },
      // checkbox的label
      labels: {
        default: 'Untitled',
        type: Array,
        coerce: function (value) {
          if (typeof value === 'string' && value !== '') {
            return value.split(',');
          }
        }
      },
      disabled: {
        default: function () {
          return '0';
        },
        type: Array,
        coerce: function (value) {
          var arr,
            i,
            item;
          if (typeof value === 'string' && value !== '') {
            arr = value.split(',');
            for (i = arr.length - 1; i >= 0; i--) {
              item = arr[i];
              arr[i] = (item === 'false' || item === '0') ? false : !!item;
            }
            return arr;
          }
        }
      },
      values: {
        default: DEF_VALUE,
        type: Array,
        coerce: function (value) {
          if (typeof value === 'string' && value !== '') {
            return value.split(',');
          }
        }
      },
      checked: {
        default: '0',
        type: Array,
        coerce: function (value) {
          var arr,
            i,
            item;
          if (typeof value === 'string' && value !== '') {
            arr = value.split(',');
            for (i = arr.length - 1; i >= 0; i--) {
              item = arr[i];
              arr[i] = (item === 'false' || item === '0') ? false : !!item;
            }
            return arr;
          }
        }
      }
    },
    created: function () {
    },
    computed: {
    },
    methods: {
      itemOnClick: function (event) {
        if (!event.currentTarget.firstElementChild.disabled) {
          var idx = event.currentTarget.firstElementChild.getAttribute('idx');
          if (!event.currentTarget.firstElementChild.checked) {
            event.currentTarget.firstElementChild.checked = true;
          } else {
            event.currentTarget.firstElementChild.checked = false;
          }
          if (idx < this.checked.length) {
            this.checked[idx] = event.currentTarget.firstElementChild.checked;
          }
        }
      },
      buttonClick: function (e) {
        this.$dispatch('speech-bubble-button-click');
      },
      getCheckItem: function () {
        var itemArr = [];
        for (var i = 0; i < this.labels.length; i++) {
          if (this.checked[i]) {
            var itemObj = {};
            itemObj.label = this.labels[i];
            itemObj.value = this.values[i];
            itemArr.push(itemObj);
          }
        }
        return itemArr;
      }
    }
  };
</script>
