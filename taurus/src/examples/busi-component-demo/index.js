import {taurus, TSelectDropdown, TDatepicker, TDataTable} from '../../components/main';
import selectUser from './select-user';
import createUser from './create-user';
import constant from './constant';

new Vue({
  el: 'body', // the template entry,you can also select id (#id)
  components: {// register component
    't-select-user': selectUser,
    't-create-user': createUser,
    't-dropdown': TSelectDropdown,
    't-date-picker': TDatepicker,
    't-date-table': TDataTable
  },
  data: function () {
    return {
      queryCondition: {
        status: '',
        agentId: '',
        createTime: ''
      },
      entitytable: {
        columns: [
          {field: 'statusName', name: 'Status'},
          {field: 'agentName', name: 'Agent ID'},
          {field: 'phone', name: 'Phone Number'},
          {field: 'email', name: 'Email'},
          {field: 'customer', name: 'Customer Name'},
          {field: 'createTime', name: 'Given'}
        ],
        sourceData: [],
        data: []
      },
      operator: {
        btnDisabled: false,
        showCreate: false,
        isReset: false
      },
      statusOptions: []
    }; // store data
  },
  watch: {
    'queryCondition.status': 'searchEntity',
    'queryCondition.agentId': 'searchEntity',
    'queryCondition.createTime': 'searchEntity'
  },
  events: { // event
  },
  methods: { // methods
    getEntitys: function () {
      var vm = this;
      vm.operator.isReset = false;
      vm.$restfulService.get({
        url: 'fakeData.json'
      }).then(function (response) {
        for (var value of response.data) {
          vm.transferData(value);
          vm.entitytable.data.push(value);
          vm.entitytable.sourceData.push(value);
        }
      }).catch(function (response) {
        console.error('getEntitys callServer error:');
        console.error(response.status);
        console.error(response.statusText);
      });
    },
    createEntity: function (entity) {
      entity.agentId = 2;
      entity.createTime = this.getCurrentTime();
      this.transferData(entity);
      this.entitytable.data.unshift(entity);
      this.entitytable.sourceData.unshift(entity);
      this.operator.showCreate = false;
    },
    setAgent: function (agent) {
      this.queryCondition.agentId = agent.id;
    },
    reset: function () {
      this.queryCondition = {
        status: 0,
        agentId: '',
        userName: ''
      };
      this.$refs.userSelector.clear();
      this.operator.isReset = true;
      this.getEntitys();
    },
    transferData: function (data) {
      var vm = this;
      if (data.agentId) {
        data.agentName = vm.$refs.userSelector.getNameById(data.agentId);
      }
      if (data.status) {
        data.statusName = constant.Status[data.status];
      }
    },
    getCurrentTime: function () {
      var date = new Date();
      var o = {
        'Y': date.getFullYear(),                 // 年份
        'M': date.getMonth() + 1,                 // 月份
        'd': date.getDate(),                    // 日
        'h': date.getHours(),                   // 小时
        'm': date.getMinutes(),                 // 分
        's': date.getSeconds()                 // 秒
      };
      return o.Y + '-' + o.M + '-' + o.d;
    },
    searchEntity: function () {
      var vm = this;
      if (vm.operator.isReset === true) {
        return;
      }
      console.log('search ...');
      vm.operator.isReset = false;
      vm.entitytable.data = vm.filter();
    },
    filter: function () {
      var vm = this;
      return vm.entitytable.sourceData.filter(function (value) {
        let isPatch = true;
        for (let key in vm.queryCondition) {
          if (!vm.queryCondition[key]) {
            continue;
          }
          isPatch = !!(value[key] === vm.queryCondition[key]);
          if (isPatch === false) {
            break;
          }
        }
        if (isPatch === true) {
          return value;
        }
      });
    },
    toggleCreateWrap: function () {
      this.operator.showCreate = this.operator.showCreate === false || false;
    },
    toggleLang: function () {
      taurus.lang = taurus.lang === 'cn' ? 'en' : 'cn';
    },
    rowSelected: function (rowId) {
      console.log('dt-select--rowId = ' + rowId);
    },
    rowUnselected: function (rowId) {
      console.log('dt-unselect--rowId = ' + rowId);
    },
    rowChecked: function (rowId) {
      // this.operator.btnDisabled =
      this.selectedData.push(this.entitytable.data[rowId]);
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
    getStatus: function () {
      var vm = this;
      for (let key in constant.Status) {
        vm.statusOptions.push({
          label: constant.Status[key],
          value: key
        });
      }
    }
  },
  created: function () {
    this.getStatus();
  },
  ready: function () { // init entry
    this.getEntitys();
  }
});
