<template>
<table class="table--default"
  :class="{'table--zebra':(this.type === 'settings' || this.zebra) , 'table--small':(this.size === 'small'), 'table--lines': (this.line === true)}">
  <thead v-if="type === 'default'">
    <tr>
      <th v-for="col in columns"
        @click="sortBy(col.field)">
        <span class="arrow"
          :class="type !== 'default' ? (sortOrders[col.field] > 0 ? 'sorting_asc' : 'sorting_desc') : ''">
          {{col.name}}
        </span>
      </th>
    </tr>
  </thead>
  <tbody v-if="type === 'settings'">
    <tr v-if="title !== ''"><td>{{title}}</td></tr>
    <tr v-for="entry in data">
      <td class="col--expand">
        <form class="clear padding-whole--small">
          <fieldset class="clear">
            <div class="float--left col-md-7">
              <legend v-if="expandable === true" :class="entry.expanded === true ? 'col--expander is-expanded' : 'col--expander'" v-on:click="toggleStorageBox($index)">{{entry.item}}</legend>
              <label v-else>{{entry.item}}</label>
            </div>
            <div class="float--right">
              <span class="text--small color-gray toright--small">{{entry.reading}}</span>
              <div class="float--right">
                <t-switcher
                  v-ref:switcher
                  :seq="$index"
                  :on-text="onText"
                  :off-text="offText"
                  :value.sync="entry.state"
                  @on-change="stateChanged">
                </t-switcher>
                <div v-tooltip="{text: entry.tip}" class="icon-questionmark tablet-pull-right toleft--small"></div>
              </div>
            </div>
          </fieldset>
          <input class="button button--action button--small js-hidden" type="submit" value="Save changes"></input>
        </form>
        <form v-if="expandable === true" class="clear">
          <div :class="entry.expanded === true ? 'is-open' : 'is-collapsed'" data-expanded="0" data-role="storage-box{{$index}}">
            <div class="padding-whole--small">
              <div class="table-wrapper">
                <div class="padding-whole">
                  <partial :name="dropItemPartialId"></partial>
                </div>
              </div>
            </div>
          </div>
        </form>
      </td>
    </tr>
  </tbody>
  <tbody v-else>
    <tr v-for="entry in data
      | filterBy filterKey
      | orderBy sortKey sortOrders[sortKey]">
      <td v-for="col in columns">
        {{entry[col.field]}}
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
import Vue from 'vue';
import Switcher from '../switcher/switcher.vue';
import Tooltip from '../../directives/tooltips/tooltip';
const SIZE_DEFAULT = 'default';
const SIZE_SMALL = 'small';
const TYPE_DEFAULT = 'default';
const TYPE_SETTINGS = 'settings';
var SimpleTable = Vue.extend({
  name: 'taurus-simple-table',
  components: {
    't-switcher': Switcher,
    't-tooltip': Tooltip
  },
  props: {
    dropItemPartialId: String,
    data: {
      type: Array,
      default: function () {
        return [];
      },
      towWay: true
    },
    columns: {
      type: Array,
      default: function () {
        return [];
      }
    },
    filterKey: String,
    title: {
      default: '',
      type: String
    },
    zebra: {
      type: Boolean,
      default: false,
      coerce: function (value) {
        return (value === 'true' || value === '1');
      }
    },
    line: {
      type: Boolean,
      default: false,
      coerce: function (value) {
        return (value === 'true' || value === '1');
      }
    },
    size: {
      type: String,
      default: SIZE_DEFAULT
    },
    type: {
      type: String,
      default: TYPE_DEFAULT
    },
    expandable: {
      type: Boolean,
      default: false,
      coerce: function (value) {
        return (value === 'true' || value === '1');
      }
    }
  },
  data: function () {
    var sortOrders = {};
    this.columns.forEach(function (key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: '',
      sortOrders: sortOrders,
      onText: 'Yes',
      offText: 'No'
    };
  },
  methods: {
    toggleStorageBox: function (index) {
      this.data[index].expanded = !this.data[index].expanded;
    },
    sortBy: function (key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    stateChanged: function (value, index) {
      this.$emit('state-changed', value, index);
    }
  }
});

SimpleTable.SIZE_DEFAULT = SIZE_DEFAULT;
SimpleTable.SIZE_SMALL = SIZE_SMALL;
SimpleTable.TYPE_DEFAULT = TYPE_DEFAULT;
SimpleTable.TYPE_SETTINGS = TYPE_SETTINGS;

export default SimpleTable;
</script>
