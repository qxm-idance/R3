## Q-001：Taurus是什么？

**A：**

Taurus是基于MVVM框架[Vue][vue]的前端集成解决方案，提供了前端开发所需的基础架构、安全管理、会话管理及一套面向管理及门户类的UI组件库。

## Q-002：Taurus对浏览器兼容性怎么样？

**A：**

Taurus支持IE 9+以及所有主流现代浏览器，包括：Chrome 53+、Firefox 45+、Edge 13、Safari 8+ (Mac)。

## Q-003：安装工程构建依赖包的时候为什么非常慢？

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

## Q-004：没有jQuery怎样获取DOM实例？

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

## Q-005：安装依赖包时出现"Error: Cannot find module 'xxxx'"错误怎么办？

**A：**

这是因为缺少依赖包xxxx导致的问题，解决方法是执行`npm i xxxx`命令安装此依赖包。

## Q-006：node_modules目录能从其他地方复制过来使用吗？

**A：**

不推荐这样做，因为不同的操作系统及不同的系统架构（如：x86和amd64）依赖的包可能存在差异，所以请使用`npm`命令行包管理器来安装依赖包。

## Q-007：编译时出现"Module build failed: Error: No ESLint configuration found."错误怎么办？

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

## Q-008：我用`vue`命令行脚手架工具创建的新工程为什么是依赖vue2.0版本的？

**A：**

这是因为你的`vue`命令行升级造成的，使用新的2.x.x版本的`vue init`命令行创建新工程的时候默认会创建基于vue2.x版本的工程，如果你想创建基于vue1.x的工程，在模版名后带上`#1.0`后缀即可，如：

```bash
sudo vue init webpack#1.0 my-project
```

## Q-009: WebStorm开发时不能识别ES6语法？

**A：**

调整javascript的语言版本,点击`Preferences`菜单，选择`languages & Frameworks > JavaScript`选项卡，将`Javascript language version`下拉框的值改为`ECMAScript6`。

## Q-010: WebStorm本地开发时候ESLint没有报错但是发布的时候ESLINT却检查报错了?

**A：**
这是因为本地WebStorm下设置的ESLINT版本和工程里依赖的eslint版本不一致，需要把WebStorm下的eslint的package位置调整为node_modules下的eslint
在WebStorm的设置>languages & Frameworks>JavaScript 下选择 language version 为ECMAScript6

## Q-011: WebStorm打开工程为什么那么卡顿？

**A：**
使用npm2.x安装依赖包后生成的`node_modules`下存在大量文件，这会引发WebStorm做重建文件建索操作，这会造成WebStorm进程阻塞。请升级npm到3.x，重新下载依赖包，这样能够解决这个问题。

a. 使用`npm -v`命令检查是否是3的版本,如3.10.8版本；

b. 如果还是3以下的版本请使用`sudo npm update npm -g`命令（windows环境请使用`npm update npm -g`命令）升级npm版本；

c. 如果使用`npm install -g cnpm`的方式安装了cnpm，请先使用`sudo npm uninstall cnpm -g`（windows使用`npm uninstall cnpm`）命令卸裁它；

d. 进入工程的`package.json`所在目录，以alias的方式使用cnpm（此方式将临时切换到淘宝的NPM仓库源）

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"
```

e. 把工程下的node_modules文件夹删除，并使用`cnpm i`重新安装依赖包

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
