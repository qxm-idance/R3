import {TVideoPlayer} from '../../utils/taurus';

new Vue({
  el: '#videoPlayerDiv',
  components: {
    TVideoPlayer
  },
  data: {
    width: 640,
    height: 390,
    videoid: 'M7lc1UVf-VE',
    done: false
  },
  events: {
    'video-play-ready': function () {
      this.$refs.myPlayer.playVideo();
    },
    'video-play-state-change': function (event) {
      if (event.data === YT.PlayerState.PLAYING && !this.done) {
        setTimeout(this.$refs.myPlayer.stopVideo, 6000);
        this.done = true;
      }
    }

  }
});
