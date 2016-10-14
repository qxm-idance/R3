# video·组件


# 组件概述

> video组件，播放视频组件

# 组件API

## 1.Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| width | Number| No | 800 | 播放器宽度 |
| Height | Number| No | 600 | 播放器高度 |
| videoid | String| No | '' | 用于标识播放器将加载的视频的YouTube视频ID |


## 2.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| video-play-ready |  | 播放组件加载就绪之后调用video-play-ready事件 |
| video-play-state-change |  | 播放组件的播放状态变更之后调用video-play-state-change事件 |

## 3.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| playVideo |  | 播放视频 |
| stopVideo |  | 暂停视频 |


# 组件Demo示例

## 1.组件Demo示例链接

<a href="/examples/video-player-demo/index.html" target="_blank">[组件Demo示例链接]</a>

## 2.组件Demo代码示例
### html代码
```
<div class="container">
  <div class="block__header leader--large trailer--large">
    <h2 class="title--medium">video player</h2>
  </div>
  <div class="form-row" id = "videoPlayerDiv">
    <t-video-player :height="height" :width="width" :videoid="videoid" v-ref:my-player></t-video-player>
  </div>

</div>
```

### js实例组件代码
```
new Vue({
  el: '#videoPlayerDiv',
  components: {
    't-video-player': VideoPlayer
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

```
