<template>
  <div id="taurus-video-player"></div>
</template>
<script>
  import Vue from 'vue';

  const DEFAULT_WIDTH = 800;
  const DEFAULT_HEIGHT = 600;
  var player;
  var done = false;

  var VideoPlayer = Vue.extend({
    name: 'taurus-video-player',
    props: {
      //播放器宽度
      width : {
        default: DEFAULT_WIDTH,
        type: Number,
        required: true
      },
      //播放器宽度
      height : {
        default: DEFAULT_HEIGHT,
        type: Number,
        required: true
      },
      // 用于标识播放器将加载的视频的YouTube视频ID
      videoid : {
        default: '',
        type: String
      }
    },
    created: function () {
      var _this = this;
      //YT为youtube插件的公共变量，YT加载完成后初始化player
      YT.ready(function(){
        _this.onYouTubeIframeAPIReady();
      });
    },
    computed: {},
    methods: {
      onYouTubeIframeAPIReady: function () {
        player = new YT.Player('taurus-video-player', {
          height: this.height,
          width: this.width,
          videoId: this.videoid,
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
        });
      },
      /**
       * 播放组件加载就绪之后调用video-play-ready事件
       * @param event
       */
      onPlayerReady: function(event) {
        this.$dispatch('video-play-ready',event);
      },
      /**
       * 播放组件的播放状态变更之后调用video-play-state-change事件
       * @param event
       */
      onPlayerStateChange: function(event) {
        this.$dispatch('video-play-state-change', event);
      },
      /**
       * 播放
       */
      playVideo: function() {
        player.playVideo();
      },
      /**
       * 暂停
       */
      stopVideo: function() {
        player.stopVideo();
      }
    }
  });

  Vue.component('t-video-player', VideoPlayer);

  module.exports = VideoPlayer;
</script>
