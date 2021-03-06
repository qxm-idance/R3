import {TSimpleTable} from '../../utils/taurus';

// 生成自定义内容模版片段，可以使用的模版变量是entry，它表示每一行对应的数据
function generatePartial () {
  var arr = [];
  arr.push('<h3 class="title--xsmall trailing-border trailer">{{entry.boxTitle}}</h3>');
  arr.push('<div class="grid-row">');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('<span class="padding-leader--small">{{entry.boxLabel1}}</span>');
  arr.push('<div class="form-checkbox form-checkbox--small">');
  arr.push('<input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-0" value="--some-value--">');
  arr.push('<label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText1}}</label>');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('<div class="form-item ">');
  arr.push('<input id="form-field-simple-with-label-0" type="text" value="{{entry.boxInputValue1}}">');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('{{entry.boxLabel2}}');
  arr.push('<div class="form-checkbox form-checkbox--small">');
  arr.push('<input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-1" value="--some-value--">');
  arr.push('<label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText2}}</label>');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="col-md-6 trailer">');
  arr.push('<div class="form-item ">');
  arr.push('<input id="form-field-simple-with-label-1" type="text" value="{{entry.boxInputValue2}}">');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('</div>');
  return arr.join('');
}
// 注册自定义模版片段
Vue.partial('boxPartial', generatePartial());
new Vue({
  el: 'body',
  components: {
    TSimpleTable
  },
  data: {
    searchQuery: '',
    tableColumns: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'}
    ],
    defaultTableData: [
      {name: 'Aaron', age: '17'},
      {name: 'Marcus', age: '25'},
      {name: 'Edison', age: '38'},
      {name: 'Hiram', age: '41'},
      {name: 'Aaron', age: '16'},
      {name: 'Carter', age: '99'}
    ],
    settingsTableData: [
      {
        item: 'Add child protection',
        state: false,
        reading: '(4,40 kr/mo)',
        tip: 'Click on the switch',
        expanded: false,
        // 以下是自定义数据
        boxTitle: 'Forward calls when1',
        boxLabel1: 'Mobile is off1',
        boxLabel2: 'Pad is off1',
        boxCheckText1: 'Forward to voice mail1',
        boxCheckText2: 'Forward to voice mail21',
        boxInputValue1: 'john1',
        boxInputValue2: 'john21'
      },
      {
        item: 'Pay via mobile',
        state: true,
        reading: '(6,80 kr/mo)',
        tip: 'Click on the switch',
        expanded: true,
        // 以下是自定义数据
        boxTitle: 'Forward calls when2',
        boxLabel1: 'Mobile is off2',
        boxLabel2: 'Pad is off2',
        boxCheckText1: 'Forward to voice mail2',
        boxCheckText2: 'Forward to voice mail22',
        boxInputValue1: 'john2',
        boxInputValue2: 'john22'
      },
      {
        item: 'Buy physical goods',
        state: false,
        reading: '',
        tip: 'Click on the switch',
        expanded: false,
        // 以下是自定义数据
        boxTitle: 'Forward calls when3',
        boxLabel1: 'Mobile is off3',
        boxLabel2: 'Pad is off3',
        boxCheckText1: 'Forward to voice mail3',
        boxCheckText2: 'Forward to voice mail23',
        boxInputValue1: 'john3',
        boxInputValue2: 'john23'
      }
    ]
  },
  methods: {
    sortSecondColumn: function () {
      this.$refs.myTable.sortBy('age');
    },
    changeText: function () {
      this.settingsTableData[1].item = 'Hello';
    },
    stateChanged: function (value, index) {
      console.log('value = ' + value + ' ; index = ' + index);
      // 输出当前行数据
      console.log(this.settingsTableData[index].item);
    }
  }
});
