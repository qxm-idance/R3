[TOC]

# Taurus业务开发快速上手指南

## 工程环境搭建

### 安装 NodeJS

到[官网][nodejs]下载安装最新版本NodeJS。

> 注意：
> 1. 请安装LTS版本的NodeJS，Current版本是尝鲜版本，不稳定，所以不要装这个版本！
> 2. NodeJS版本必须是`v4.4.7`及以上版本！由于前端相关生态环境更新比较快，因此，NodeJS后续可能会升级。

### 安装编译所需的依赖包
  
在业务工程跟目录中执行以下命令安装编译前端代码所需的依赖包：

```bash
npm install
```

> 注意：因为之后的编译动作都将依赖这些NPM包，所以请保证这个安装过程是正常完成的，否则编译很可能不能正常进行。

### 构建工程

  工程构建分为开发和产品两种模式。

#### 开发模式构建

  ```bash
  npm run dev
  ```

  默认情况下，执行以上命令成功后，默认在`8080`端口将启动一个web server（你可以浏览到工程自带的页面，如：`http://localhost:8080/sample/page-demo/index.html`），此时，工程源码是支持热加载的（即：当修改了源码后浏览器将立即自动刷新页面展现结果）！

  > 注意：如果你需要修改默认端口号，请修改工程目录的`config/index.js`文件内的端口定义。

#### 产品模式构建

  ```bash
  npm run build
  ```

## 工程目录说明

工程目录结构如下：

```text
./
└── biz  <业务模块工程>
    ├── README.md  <工程描述文件>
    ├── build  <工程构建脚本目录>
    ├── config  <工程构建配置目录>
    ├── dist  <工程发布目录，里面放置工程编译后的内容>
    ├── package.json  <npm包配置文件>
    └── src  <源码目录>
        ├── assets  <静态资源目录>
        │   ├── amcharts  <amcharts开源库目录>
        │   ├── img  <图片目录>
        │   ├── css  <样式目录>
        │   └── fonts  <字体目录>
        ├── i18n  <国际化资源文件目录>
        │   ├── agent  <agent-view业务模块语言资源文件目录>
        │   ├── eshop  <eshop业务模块语言资源文件目录>
        │   ├── self  <self-care业务模块语言资源文件目录>
        │   └── <其他业务模块语言资源文件目录... ...>
        ├── common  <业务组件目录>
        ├── agent-view  <agent-view业务模块源码目录>
        ├── eshop  <eshop业务模块源码目录>
        ├── self-care  <self-care业务模块源码目录>
        └── <其他业务模块目录... ...>
```

## 开发流程

1. 在`src`目录对应业务模块目录内创建一个子目录，如：`src/eshop/abc`；

  > 注意：业务模块目录名称为各业务模块编码，此编码是预先定义好的！

2. 在`src/eshop/abc`内创建`index.js`和`index.html`两个文件；

    在`index.js`里必须首先引入Taurus相关的模块。如：

    ```js
    import {taurus, TSwitcher, TDoughnut} from 'aii-taurus';
    ```

    > 注意：`index.js`和`index.html`两个文件是此页面入口，编译脚本依赖了这两个名称，所以不能将这两个文件改名！

3. 在命令行控制台进入工程根目录，输入以下命令启动开发环境：

    ```bash
    npm run dev
    ```

    打开浏览器访问此页面对应的地址。开发过程中，只要代码变更(进行保存操作)，浏览器对应页面里的内容将自动刷新。

4. 页面开发完成后，输入下面的命令进行发布：

    ```bash
    npm run build
    ```

    构建完成后，发布内容将全部生成在`dist`目录内。

## 国际化

Taurus使用[vue-i18n][vue-i18n]进行国际化处理。

### 语言资源文件和目录

在工程`src`目录下有一个`i18n`目录(此`i18n`目录在编译发布后将放置在`dist`目录下)，此目录内放置国际化语言资源文件。

> 注意：在`i18n`目录中，各模块的语言文件将被放置在各模块对应的子目录内，这些子目录与工程根目录下的模块子目录名称应该保持一致！

所有语言资源文件都为json格式，使用以下格式命名：

```text
[ISO 3166-2][iso_3166-2]两位小写国家代码.json
```

如：`cn.json`、`en.json`等。以下是两个资源文件的例子：

**cn.json**

```json
{
  "shoppingcart": "购物车",
  "insuranse": "保险",
  "instalment": "分期付款",
  "stock": "股票",
  "demo": {
    "hello": "你好",
    "world": "世界",
    "hi": "@:demo.hello @:demo.world !!"
  }
}
```

**en.json**

```json
{
  "shoppingcart": "Shoppingcart",
  "insuranse": "Insuranse",
  "instalment": "Instalment",
  "stock": "Stock",
  "demo": {
    "hello": "Hello",
    "world": "World",
    "hi": "@:demo.hello @:demo.world !!"
  }
}
```

### 资源加载方式

在语言资源文件配置好后，可以以两种方式使用国际化资源。

假设当前语言为英语：

*方式一：*在HTML模版代码里可以使用`$t`函数来加载国际化资源。

  ```html
  <!-- 输出 <div>Shoppingcart</div> -->
  <div>{{ $t("shoppingcart") }}</div>

  <!-- 输出 <div>Hello</div> -->
  <div>{{ $t("demo.hello") }}</div>

  <!-- 输出 <div>Hello World !!</div> -->
  <div>{{ $t("demo.hi") }}</div>
  ```

*方式二：*在组件实例里可以使用`this.$t`函数加载国际化资源，非组件实例内可以使用`Vue.$t`函数加载国际化资源。

  ```js
  var shoppingcart = this.$t('shoppingcart');
  var hi = this.$t('demo.hi');
  ```

  ```js
  var shoppingcart = Vue.$t('shoppingcart');
  var hi = Vue.$t('demo.hi');
  ```

### 语言切换

如果需要动态切换当前语言，首先需要引入`taurus`模块：

```js
import {taurus} from 'aii-taurus';

//获取当前语言
console.log(taurus.lang);

//切换当前语言为中文
taurus.changeLang('eshop','cn');
```

## 开发规范（初稿）

### index.html和index.js

新开发的页面推荐基于下面的模版来创建：

index.html文件模版

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- content请填写业务模块编码，此编码与i18n目录下的对应模块的子目录名称保持一致 -->
  <meta name="biz-code" content="eshop">
  <title>Title</title>
  <link rel="icon" href="/assets/img/favicon.ico" type="image/x-icon">
  <link href="/assets/css/main.css" rel="stylesheet">
</head>
<body>
</body>
</html>
```

> 注意：`name`为`biz-code`的`meta`标记是必须定义的，否则，此页面的国际化内容将失效！

业务模块编码如下：

|业务模块|编码|
|-------|---|
|eshop|eshop|
|self care|self|
|agent view|agent|
|resource management|res|

index.js文件模版

```js
import {TRangeSlider} from 'aii-taurus';
new Vue({
  el: 'body', // the template entry,you can also select id (#id)
  components: {// register component
    TRangeSlider // this is a demo,select the component you wish to use
  },
  data: function() {
    return {}; // store data
  },
  events: { // event
  },
  methods: { // methods
  },
  ready: function () { // init entry
  }
});
```

### 代码书写风格

所有javascript脚本书写风格按照ESLint静态检查规则实现（不同的编辑器需要安装不同的ESLint插件，参见附录）。

> 注意：由于工程编译脚本已经整合ESLint进行代码静态检查，因此，如果在开发时手动禁用了ESLint插件进行静态代码检查，那么可能在编译时不能通过代码静态检查环节导致编译失败!

### 文件和目录

所有文件名使用全小写命名，单词之间使用`-`号分割，如：

```text
box-group.vue
service.js
main.css
```

开发一个新页面时，你需要在`src`目录对应业务模块的目录里创建一个子目录，然后把该页面的源码放到此子目录中。例如：新写一个eshop业务模块的页面family时，你需要将这个页面的源码放到`src/eshop/family`目录内。

### Vue组件

所有Vue组件注册的自定义标记都需要带上`t-`前缀。如：

```js
import {TBizComp} from 'common/biz-comp';
Vue.component('t-biz-comp', TBizComp);
```

```js
import {TBizComp} from 'common/biz-comp';
new Vue({
  el: 'body',
  components: {
    TBizComp
  }
});
```

```js
import {TBizComp} from 'common/biz-comp';
new Vue({
  el: 'body',
  components: {
    't-box-group': TBizComp
  }
});
```

## FAQs

### Q-001：Taurus是什么？

**A：**

Taurus是基于[Vue][vue]扩展的前端框架，它基于Veris前端框架(veris 7.x使用的前端框架)进化而来。

### Q-002：Taurus对浏览器兼容性怎么样？

**A：**

Taurus支持IE 9+以及所有主流现代浏览器，包括：Chrome 53+、Firefox 45+、Edge 13、Safari 8+ (Mac)。

### Q-003：安装工程构建依赖包的时候为什么非常慢？

**A：**

NPM的仓库服务器设在国外，所以视网络状况而定有些时候访问它会比较慢，有两种方法解决。

*方法一：*通过`npm i cnpm -g`命令安装淘宝的cnpm命令行工具，安装好后可以使用`cnpm`命令来替换npm做日常包管理操作，由于cnpm会连接淘宝的npm仓库镜像服务器（国内服务器），因此下载速度会大幅提升。

*方法二：*可以使用下面的命令切换NPM的源到淘宝的源，切换源成功后依旧使用`npm`命令进行包管理，这样也能提升下载速度。

  ```bash
  npm config set registry http://registry.npm.taobao.org/
  ```

  使用下面的命令验证是否切换成功：

  ```bash
  npm config get registry
  ```

  如果输出`http://registry.npm.taobao.org/`则表示源切换成功。

### Q-004：没有jQuery怎样获取DOM实例？

**A：**

*方法一：*通过Vue的指令`v-el`在DOM元素上定义一个标识，然后在组件里使用`this.$els`访问这个元素。如：

  在HTML元素上定义一个元素标识

  ```html
  <div v-el:my-tag><div>
  ```

  在组件内部使用下面的方式访问该DIV元素实例

  ```js
  this.$els.myTag
  ```

  > 注意：
  > 1. `v-el`如果定义在table标记的子标记上无效(如：THEAD标记，另外，包括TD元素内定义的HTML元素也是无效的)！
  > 2. 特别的，如果定义了相同的标识，那么，通过`this.$els.myTag`获取的是一个实例数组，此数组的顺序是DOM元素在DOM树上的先后顺序。

*方法二：*使用浏览器提供的原生DOM方法来获得DOM实例对象，以下是一些例子：

  > 注意：以下例子中的`document`都可以替换为某个DOM元素实例对象！

  1. 根据ID查找：

    ```js
    // jQuery
    $('#myElement');

    // DOM API
    document.getElementById('myElement');
    // 或者
    document.querySelector('#myElement');
    ```

  2. 根据CSS类查找：

    ```js
    // jQuery
    $('.myClass');

    // DOM API
    document.getElementsByClassName('myClass');
    // 或者
    document.querySelectorAll('.myClass');
    ```

  3. 根据标记名称查找：

    ```js
    // jQuery
    $('div');

    //DOM API
    document.getElementsByTagName('div');
    // 或者
    document.querySelectorAll('div');
    ```

  4. 根据属性查找：

    ```js
    // jQuery
    $('[data-group="admin"]');

    // DOM API
    document.querySelectorAll('[data-group="admin"]');
    ```

  5. 子元素查找：

    ```js
    // jQuery
    $('#myElementId').children();

    // DOM API
    document.getElementById('myElementId').childNodes; //包括注释和文本节点
    // 或者
    document.getElementById('myElementId').children; //忽略注释和文本节点

    // jQuery
    $('#myElementId').children('[data-group]');

    // DOM API
    document.querySelector('#myElementId > [data-group]');
    ```

  6. 后代元素查找：

    ```js
    // jQuery
    $('#myElementId A');

    // DOM API
    document.querySelectorAll('#myElementId A');
    ```

  7. 排除元素：

    ```js
    // jQuery
    $('DIV').not('.ignore');
    // 或者
    $('DIV:not(.ignore)');

    // DOM API
    document.querySelectorAll('DIV:not(.ignore)');
    ```

  8. 多重选择：

    ```js
    // jQuery
    $('DIV, A, SCRIPT');

    // DOM API
    document.querySelectorAll('DIV, A, SCRIPT');
    ```

### Q-005：安装依赖包时出现"Error: Cannot find module 'xxxx'"错误怎么办？

**A：**

这是因为缺少依赖包xxxx导致的问题，解决方法是执行`npm i xxxx`命令安装此依赖包。

### Q-006：node_modules目录能从其他地方复制过来使用吗？

**A：**

NodeJS版本必须是`v4.4.7`及以上版本

### Q-007：编译时出现"Module build failed: Error: No ESLint configuration found."错误怎么办？

**A：**

这个错误是编译脚本没有找到ESLint对应的配置文件导致，请检查工程根目录下是否有以下文件：

```text
.babelrc
.editorconfig
.eslintignore
.eslintrc.js
.gitignore
```

> 注意：以上文件都是编译过程依赖的配置文件，请勿修改或删除！

## 附录

### 推荐编辑器及其插件

1. WebStorm

    安装以下插件：

      * ESLint

      * Vue.js

2. Atom

    安装以下插件：

      * linter-eslint

      * language-vue

3. VSCode

    安装以下插件：

      * ESLint (vue文件貌似失效)

      * Babel ES6/ES7

      * vue

4. Sublime Text

    安装以下插件：

      * ESLint

      * Vue Syntax Highlight

### 相关学习网站

[NodeJS官网][nodejs]

[webpack官网][webpack]

[vue中文官网][vue]

[vue官方脚手架工具][vue-cli]

[vue 1.x github仓库][vue-github]

[vuex github仓库][vuex-github]

[vue-router github仓库][vue-router-github]

[vue-resource github仓库][vue-resource-github]

[vue-i18n 官方文档][vue-i18n-doc]

[vuex 官方中文文档][vuex]

[vue-router 官方中文文档][vue-router]

[vue 资源列表][awesome-vue]

[nodejs]: https://nodejs.org/en/
[webpack]: http://webpack.github.io/
[vue]: http://vuejs.org.cn/
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-github]: https://github.com/vuejs/vue/
[vuex-github]: https://github.com/vuejs/vuex
[vue-router-github]: https://github.com/vuejs/vue-router
[vue-resource-github]: https://github.com/vuejs/vue-resource
[vuex]: http://vuex.vuejs.org/zh-cn/index.html
[vue-router]: http://router.vuejs.org/zh-cn/index.html
[awesome-vue]: https://github.com/vuejs/awesome-vue
[iso_3166-2]: https://en.wikipedia.org/wiki/ISO_3166-2
[vue-i18n-doc]: https://kazupon.github.io/vue-i18n/
[vue-i18n]: https://github.com/kazupon/vue-i18n