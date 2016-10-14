import Vue from 'vue';
import SpeechBubble from '../../components/speech-bubble/speech-bubble';
import SpeechBubbleFilter from '../../components/speech-bubble/speech-bubble-filter';
import SpeechBubbleFilterTree from '../../components/speech-bubble/speech-bubble-filter-tree';

new Vue({
  el: '#speechBubbleDivLarge',
  components: {
    't-speech-bubble': SpeechBubble
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleBtnLarge',
      sizeSpeechBubble: 'large',
      titleSpeechBubble: '1112'
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    }
  }
});

new Vue({
  el: '#speechBubbleDivSmall',
  components: {
    't-speech-bubble': SpeechBubble
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleBtnSmall',
      sizeSpeechBubble: 'small',
      titleSpeechBubble: '1112'
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    }
  }
});

new Vue({
  el: '#speechBubbleFilterDivLarge',
  components: {
    't-speech-bubble-filter': SpeechBubbleFilter
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleFilterBtnLarge',
      sizeSpeechBubble: 'large',
      titleSpeechBubble: 'Select columns',
      labels: 'item1,item2,item3,item4',
      checked: '0,1,0,0',
      disabled: '0,1,0,1',
      values: 'This,is,a,test',
      buttonName: 'Update table'
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    },
    'speech-bubble-button-click': function () {
      this.$refs.largeSpeechBubble.getCheckItem();
      console.log('speech bubble button click');
    }
  }
});

new Vue({
  el: '#speechBubbleFilterDivSmall',
  components: {
    't-speech-bubble-filter': SpeechBubbleFilter
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleFilterBtnSmall',
      sizeSpeechBubble: 'small',
      titleSpeechBubble: 'Select columns',
      labels: 'item1,item2,item3,item4',
      checked: '0,1,0,0',
      disabled: '0,1,0,1',
      values: 'This,is,a,test',
      buttonName: 'Update table'
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    },
    'speech-bubble-button-click': function () {
      var checkedItem = this.$refs.smallSpeechBubble.getCheckItem();
      for (var i in checkedItem) {
        console.log('check item value:' + checkedItem[i].value);
      }
      console.log('speech bubble button click');
    }
  }
});

new Vue({
  el: '#speechBubbleDivLargeTree',
  components: {
    't-speech-bubble-filter-tree': SpeechBubbleFilterTree
  },
  data: function () {
    return {
      showSpeechBubble: false,
      showSpeechBubbleBtnId: 'showSpeechBubbleBtnLargeTree',
      sizeSpeechBubble: 'large',
      titleSpeechBubble: 'Select columns',
      buttonName: 'Update filter',
      items: [
        {
          label: 'item1',
          checked: true,
          value: 'value1',
          pid: '',
          id: 1
        },
        {
          label: 'item2',
          checked: false,
          value: 'value2',
          pid: 1,
          id: 2,
          count: 7
        },
        {
          label: 'item3',
          checked: false,
          value: 'value3',
          pid: 1,
          id: 3,
          count: 7
        },
        {
          label: 'item4',
          checked: true,
          value: 'value4',
          pid: '',
          id: 4,
          count: 0
        },
        {
          label: 'item5',
          checked: true,
          value: 'value5',
          pid: '',
          id: 5,
          count: 7
        },
        {
          label: 'item6',
          checked: true,
          value: 'value6',
          pid: 4,
          id: 6,
          count: 7
        },
        {
          label: 'item7',
          checked: true,
          value: 'value7',
          pid: 4,
          id: 7,
          count: 7
        }
      ]
    };
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    },
    'speech-bubble-button-click': function () {
      var items = this.$refs.largeSpeechBubbleTree.getCheckItem();
      console.log('speech bubble button click:' + items);
    }
  }
});
