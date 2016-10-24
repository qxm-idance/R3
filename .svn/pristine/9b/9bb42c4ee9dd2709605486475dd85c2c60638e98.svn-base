/**
 * Created with taurus.
 * User: zhanghg7/zhanghg7@asiainfo.com
 * Date: 2016/10/11
 * Time: 14:40
 */
import FineUploder from 'fine-uploader';
import Vue from 'vue';
new Vue({
  el: 'body',
  data () {
    return {
      uploader: null
    };
  },
  methods: {
  },
  events: {

  },
  created () {
    new FineUploder.FineUploaderBasic({
      button: document.getElementById('fine-uploader-gallery'),
      request: {
        endpoint: 'http://localhost:8080'
      },
      thumbnails: {
        placeholders: {
          waitingPath: '/examples/file-upload-demo/placeholders/waiting-generic.png',
          notAvailablePath: '/examples/file-upload-demo/placeholders/not_available-generic.png'
        }
      },
      validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
      },
      callbacks: {
        onSubmit: function (id, name) {
          console.log('文件开始上传Id:' + id + '+++++name:' + name);
        }
      },
      debug: true
    });
  }
});
