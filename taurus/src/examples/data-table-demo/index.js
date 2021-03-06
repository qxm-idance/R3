import {TDataTable, TSearchFilter} from '../../utils/taurus';

// 生成自定义内容模版片段，可以使用的模版变量是entry，它表示每一行对应的数据
function generatePartial () {
  var arr = [];
  arr.push('<div class="container data-table--without-pagination">');
  // arr.push('hello world');
  arr.push('<div class="border--bottom clear padding-whole box--greyed header-grey">');
  arr.push('<div class="grid-row">');
  arr.push('<h2 class="col-md-6 text-size--19 text-light">{{entry.subTableTitle}}</h2>');
  arr.push('<div class="col-md-6 text--right">');
  arr.push('<div class="mobile-trailer--small display--inline-block mobile-display--block">');
  arr.push(''); // 添加search-filter组件
  arr.push('</div> <button class="button button--default button--small stretch-mobile toleft--small mobile-toleft--none" type="button">');
  arr.push('<span class="button__text">Toggle all</span>');
  arr.push('</button> </div>');
  arr.push('</div>');
  arr.push('</div>');
  arr.push('<div class="dataTables_wrapper no-footer">');
  arr.push('<table class="table table--without-hover" role="grid">');
  arr.push('<thead>');
  arr.push('<tr role="row">');
  arr.push('<th>Account</th>');
  arr.push('<th>EAN</th>');
  arr.push('<th>Acc.</th>');
  arr.push('<th>Payer</th>');
  arr.push('<th>Address</th>');
  arr.push('</tr>');
  arr.push('</thead>');
  arr.push('<tbody>');
  arr.push('<tr v-for="item in data">');
  arr.push('<td>{{item.account}}</td>');
  arr.push('<td>{{item.ean}}</td>');
  arr.push('<td>{{item.acc}}</td>');
  arr.push('<td>{{item.payer}}</td>');
  arr.push('<td>{{item.address}}</td>');
  arr.push('</tr>');
  arr.push('</tbody>');
  arr.push('</table>');
  arr.push('</div>');
  arr.push('</div>');
  return arr.join('');
}
// 注册自定义模版片段，请注意，partial是注册到全局的模版，
// 所以请注意partialId不能重复！！
Vue.partial('boxPartialId', generatePartial());
Vue.partial('demoCellPartial', '<p>{{entry.note}}</p><span class="text-size--13"><a href="#">{{entry.phoneNumber}}</a></span>');
Vue.partial('demoCellPartial', '<p>{{entry.note}}</p><span class="text-size--13"><a href="#">{{entry.phoneNumber}}</a></span>');
new Vue({
  el: 'body',
  components: {
    TDataTable,
    TSearchFilter
  },
  data: {
    tableColumns1: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'},
      {field: 'note', name: 'Note', partialId: 'demoCellPartial'}
    ],
    dataTableData1: [
      {name: 'Aaron', age: '17', note: 'This is a note.', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
      {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
      {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
      {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
      {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
      {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
    ],
    tableColumns2: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'},
      {field: 'note', name: 'Note', partialId: 'demoCellPartial'}
    ],
    dataTableData2: [
      {name: 'Aaron', age: '17', note: 'This is a note.', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
      {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
      {name: 'Edison', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
      {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
      {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
      {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
    ]
  },
  methods: {
    sortSecondColumn: function () {
      this.$refs.myDataTable.sortBy('age');
    },
    selectRow: function () {
      this.$refs.myDataTable.selectRow(1);
    },
    unselectRow: function () {
      this.$refs.myDataTable.unselectRow();
    },
    selectedRowId: function () {
      var selectedRowId = this.$refs.myDataTable.selectedRowId();
      if (selectedRowId === -1) {
        alert('没有选中任何行！');
      } else {
        alert('selectedRowId = ' + selectedRowId);
      }
    },
    rowSelected: function (rowId) {
      console.log('dt-select--rowId = ' + rowId);
    },
    rowUnselected: function (rowId) {
      console.log('dt-unselect--rowId = ' + rowId);
    },
    rowChecked: function (rowId) {
      console.log('dt-check--rowId = ' + rowId);
    },
    rowUnchecked: function (rowId) {
      console.log('dt-uncheck--rowId = ' + rowId);
    },
    allRowUnchecked: function () {
      console.log('dt-uncheck-all');
    },
    allRowChecked: function () {
      console.log('dt-check-all');
    },
    pageChanged: function (pageNumber, pageSize) {
      console.log('dt-page-changed--pageNumber = ' + pageNumber + ' ; pageSize = ' + pageSize);
    },
    getChecked: function () {
      var arr = this.$refs.myDataTable.getChecked();
      if (arr.length > 0) {
        alert('第一个勾选行对应的数据中的name属性值为：\n' + arr[0].name);
      } else {
        alert('没有勾选任何行！');
      }
    },
    getSelected: function () {
      var data = this.$refs.myDataTable.getSelected();
      if (data === null) {
        alert('你没有选中任何行！');
      } else {
        alert('当前选中行对应数据的name属性值为：' + data.name);
      }
    },
    // boxExpand: function (rowId, expanded) {
    //   if (expanded) {
    //     console.log('行' + rowId + '已经展开');
    //   } else {
    //     console.log('行' + rowId + '已经折叠');
    //   }
    // },
    removeRow: function () {
      var data = this.$refs.myDataTable.data;
      if (data.length > 0) {
        data.$remove(data[data.length - 1]);
      }
    }
  }
});
