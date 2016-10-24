# 第三方插件FineUpload


# 插件概述

>FineUpload插件,用于大文件上传,该组件支持分片上传,断点续传,多文件,跨域等功能。

# 组件API

## 1.Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
|onSubmit|id:文件唯一标识Id;name:上传文件名称;|当文件被选中时触发 |
| onUpload | id:文件唯一标识Id;name:上传文件名称; | 当文件开始上传时触发 |
| onError | id:文件唯一标识Id;name:上传文件名称;errorReason:发生错误原因；xhr请求对象 | 上传发生错误时触发 |
|onComplete|id:文件唯一标识Id;name:上传文件名称;responseJson:服务端响应JSON；xhr请求对象|上传完成时触发|
[更多事件请参考官方API文档](http://docs.fineuploader.com/branch/master/api/events.html#totalProgress)



## 2.Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| getInProgress | 当前正在上传或排队的文件的数量。  | 获得文件上传进度 |
| cancel | id:文件的唯一标识ID | 取消正在上传或已经在对列里的文件 |
| getSize | id:文件的唯一标识ID | 通过文件id获得上传文件大小 |
| setName | id:文件的唯一标识ID;name:文件名称 | 自定义上传文件名 |
[更多方法请参考官方API文档](http://docs.fineuploader.com/branch/master/api/methods.html)


# 组件Demo示例

## 1.组件Demo代码示例
### html代码
```
<div class="form-row">
  <div id="fine-uploader-gallery" class="button button--action">文件上传</div>
</div>
```

### js实例组件代码
```
import {FineUploader} from 'aii-taurus';
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
    new FineUploader.FineUploaderBasic({
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
          console.log('文件被提交');
        },
        onUpload: function (id, name) {
          console.log('文件开始上传');
        },
        onError: function (id, name, errorReason, xhr) {
          console.log('文件上传发生错误');
        },
        onComplete: function (id, name, responseJson, xhr) {
          console.log('文件上传完成');
        }
      }
    });
  }
});

```
