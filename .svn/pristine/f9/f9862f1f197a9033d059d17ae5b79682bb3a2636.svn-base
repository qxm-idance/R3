import {taurus, TSelectDropdown, TDatePicker, TDataTable} from 'aii-taurus';
import selectUser from './common/select-user';
import agentForm from './common/agent-form';
import constant from './common/constant';
import service from './common/interface';
import utils from './common/utils';

new Vue({
  el: 'body', // the template entry,you can also select id (#id)
  components: {// register component
    't-select-user': selectUser,
    't-agent-form': agentForm,
    't-dropdown': TSelectDropdown,
    't-date-picker': TDatePicker,
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
      entity: {},
      operator: {
        state: 'create',
        showTabBtn: false,
        showForm: false,
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
        url: service.getEntitys
      }).then(function (response) {
        response.data.forEach((value, index) => {
          value.id = index;
          vm.transferData(value);
          vm.entitytable.data.push(value);
          vm.entitytable.sourceData.push(value);
        });
      }).catch(function (response) {
        console.error('getEntitys callServer error:');
        console.error(response.status);
        console.error(response.statusText);
      });
    },
    saveEntity: function (entity) {
      var vm = this;
      if (entity.id !== undefined) { // modify
        for (let i = 0; i < vm.entitytable.data.length; i++) {
          if (entity.id === vm.entitytable.data[i].id) {
            vm.$refs.entityTable.data.$set(i, Object.assign({}, entity));
            break;
          }
        }
      } else { // create
        entity.id = vm.entitytable.sourceData.length;
        entity.agentId = 2;
        entity.createTime = utils.getCurrentTime();
        vm.transferData(entity);
        vm.entitytable.data.unshift(entity);
        vm.entitytable.sourceData.unshift(entity);
      }
      vm.operator.showForm = false;
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
    deleteEntity: function () {
      var vm = this;
      var checkedArr = vm.getChecked();
      for (let value of checkedArr) {
        console.log('delete:');
        for (let i = 0; i < vm.entitytable.data.length; i++) {
          if (value.id === vm.entitytable.data[i].id) {
            vm.entitytable.data.splice(i, 1);
            break;
          }
        }
      }
    },
    modifyEntity: function () {
      var checkedArr = this.getChecked();
      if (checkedArr.length === 1) {
        this.operator.state = 'modify';
        this.operator.showForm = true;
        this.entity = Object.assign({}, checkedArr[0]);
      } else {
        alert(this.$t('edit-entity-alert'));
      }
    },
    toggleCreateWrap: function () {
      this.operator.state = 'create';
      this.operator.showForm = this.operator.showForm === false || false;
    },
    toggleLang: function () {
      taurus.lang = taurus.lang === 'cn' ? 'en' : 'cn';
    },
    rowChecked: function (rowId) {
      console.log('dt-check--rowId = ' + rowId);
      this.operator.showTabBtn = true;
    },
    rowUnchecked: function (rowId) {
      console.log('dt-uncheck--rowId = ' + rowId);
      this.operator.showTabBtn = !!(this.getChecked().length);
    },
    getChecked: function () {
      return this.$refs.entityTable.getChecked();
    },
    getStatus: function () {
      var vm = this;
      for (let key in constant.Status) {
        vm.statusOptions.push({
          label: constant.Status[key],
          value: Number(key)
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
