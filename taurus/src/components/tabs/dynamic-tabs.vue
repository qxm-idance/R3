<template>
  <div class="tabpanel">
    <!-- 消息提示 -->
    <t-status-message
        :content="option.content"
        :type="option.type"
        :visible="option.visible">
    </t-status-message>
    <nav class="trailer">
      <ul class="tabpanel__list tabpanel__manage trailer">
        <!--tabs-->
        <li class="tabpanel__tab"
            v-for="tab in showTabs"
            track-by="$index"
            :class="{'is-active': tab.name === currentTab}">
          <a href="#nogo" class="tabpanel__link icon" :class="{'icon-search': tab.source === 'query'}" @click="changeTab(tab)">{{ tab.name }}</a>
          <a class="icon icon-remove tabpanel__closed" @click="closeTab(tab)"></a>
        </li>

        <!--more tabs-->
        <li class="tabpanel__tab flexnav" :class="{'is-open': isMoreOpen}"
            v-if="shouldShowMore" :style="{width: moreWidth + 'px'}">
          <a href="#nogo" class="tabpanel__link flexnav__toggler" @click.stop.prevent="toggleMore">More</a>
          <ul class="flexnav__subnav">
            <li class="tabpanel__tab flexnav--invisible flexnav--active-tab" v-for="moreTab in moreTabs">
              <a href="#nogo" class="tabpanel__link" @click="replaceTab(moreTab, $index)">{{ moreTab.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
  import {TStatusMessage} from '../../utils/taurus';
  const DEFAULT_TAB = {name: 'index'};
  const DEFAULT_TAB_WIDTH = 184;
  const MORE_WIDTH = 100;
  export default {
    props: {
      tabs: {
        type: Array,
        required: true
      },
      tabActive: {
        type: String,
        required: false
      }
    },

    data: function () {
      return {
        moreTabs: [],
        showTabs: [],
        currentTab: '',
        isMoreOpen: false,
        shouldShowMore: false,
        containerWidth: 0,
        option: {
          content: '',
          type: 'info',
          visible: false
        }
      };
    },

    components: {
      TStatusMessage
    },

    watch: {
      currentTab: function (val, oldVal) {
        if (!oldVal) {
          return;
        }
        this.$dispatch('tab-change', val, oldVal);
      }
    },

    methods: {
      _closeMessage: function () {
        this.option.visible = false;
      },

      _showMessage: function (option) {
        option.content && (this.option.content = option.content);
        option.type && (this.option.type = option.type);
        this.option.visible = true;
      },
      /**
       * 计算可以容纳的tab个数以及是否需要显示more
       * @returns {number}
       * @private
       */
      _maxLayoutTabs: function () {
        let showCount = 0;
        let width = 0;

        this.shouldShowMore = false;

        for (let i = 0, len = this.tabs.length; i < len; i++) {
          width += DEFAULT_TAB_WIDTH;
          if (width <= this.containerWidth) {
            showCount++;
            continue;
          }
          if (width - DEFAULT_TAB_WIDTH + MORE_WIDTH <= this.containerWidth) {
            this.shouldShowMore = true;
          }
        }

        return showCount;
      },

      /**
       * 根据计算结果来控制显示tab个数
       * @private
       */
      _retractTabs: function () {
        let showCount = this._maxLayoutTabs();

        // TODO 优化
        if (this.shouldShowMore) {
          this.showTabs = this.tabs.slice(0, showCount);
          this.moreTabs = this.tabs.slice(showCount);
        } else {
          this.showTabs = this.tabs.slice(0, showCount);
        }
      },

      /**
       * 搜寻某个item在数组中的位置，依据是name
       * @private
       */
      _tabIndexOf: function (item, arr) {
        for (let i = 0, len = arr.length; i < len; i++) {
          if (typeof arr[i] === 'object' && typeof item === 'object' && arr[i].name === item.name) {
            return i;
          }
        }
        return -1;
      },

      /**
       * 关闭某个tab，第一个tab不可以关闭
       * @param tab
       */
      closeTab: function (tab) {
        // 第一个页签不可关闭
        let index = this._tabIndexOf(tab, this.tabs);
        if (index === 0) {
          this._showMessage({type: 'error', content: 'The first tab can not be closed!'});
          return;
        }
        this.tabs.splice(index, 1);
        this.$dispatch('tab-close', tab.name);
        this._retractTabs();

        // 关闭之后激活当前位置上的页签，如果已经是最后一个，则激活前一个
        this.changeTab(this.showTabs[index] || this.showTabs[index - 1]);
      },

      /**
       * 新增一个tab
       * @param tab为一个字符串，即tab的名字，如果已经有了同名的tab，则让该同名tab激活，不再新增同名tab
       */
      addTab: function (tab) {
        let index = this._tabIndexOf(tab, this.tabs);
        if (index < 0) {
          if (this.tabs.length >= 15) {
            this._showMessage({type: 'alert', content: 'The number of tabs can not be more than 15!'});
            return;
          }
          this.tabs.push(tab);
          this.$dispatch('tab-add', tab.name);
          this._retractTabs();
        }
        this.changeTab(tab);
      },

      /**
       * 切换激活的tab
       * @param tab
       */
      changeTab: function (tab) {
        this.currentTab = tab.name;
      },

      /**
       * 从more中拿出tab来替换显示的tab，显示的tab中最后一个被收起，显示的最后一个tab激活
       * @param tab
       * @param index
       */
      replaceTab: function (tab, index) {
        this.changeTab(tab);
        let newMoreTab = this.showTabs.pop();
        this.showTabs.push(tab);
        this.moreTabs.splice(index, 1);
        this.moreTabs.push(newMoreTab);
        this.closeMore();
      },

      /**
       * 隐藏more菜单
       */
      closeMore: function () {
        this.isMoreOpen = false;
      },

      /**
       * 切换more菜单的显示隐藏
       */
      toggleMore: function () {
        this.isMoreOpen = !this.isMoreOpen;
      }
    },

    created: function () {
      // 默认必须有一个tab，如果不传入的话，默认页签为index
      if (!this.tabs.length) {
        this.tabs.push(DEFAULT_TAB);
      }
    },

    ready: function () {
      this.currentTab = this.tabActive;
      if (!this.currentTab) {
        this.currentTab = this.tabs[0].name;
      }

      // 计算容器宽度
      this.containerWidth = this.$el.clientWidth;
      // retract tabs on small scrren
      this._retractTabs();

      // more tabs 失焦时隐藏
      document.addEventListener('click', this.closeMore);
    }
  };
</script>

