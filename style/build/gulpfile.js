require('shelljs/global')
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    fs = require('fs'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    exec = require('child_process').exec,
    markdown = require('gulp-markdown'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    zip = require('gulp-zip');

// 将md文档里等链接改为在新页签或新窗口内弹出
var renderer = new markdown.marked.Renderer();
renderer.link = function (href, title, text) {
  var s = '<a href="'+ href +'" title="' + title;
  if (href.indexOf("#") !== 0) {
    s += '" target="_blank';
  }
  s += '">' + text + '</a>';
  return s;
};

concat = require('gulp-concat');
var DOCUMENT_SRC = '../../taurus/dist',
    ASSEST_SRC = '../../guideline',
    SVG_SRC = '../src/core/icons'
DOCUMENT_DEST = '../../guideline-dist';
var fontName = 'framework-icons';
//eshop style build
gulp.task('style-eshop', function () {
    return gulp.src('../src/telenor.scss')
        .pipe(sass())
        .pipe(minifycss())  //执行压缩
        .pipe(rename({suffix: '.min'}))
        // .pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1','ios','android 4'))
        .pipe(gulp.dest('../../guideline/elements/fe-static/p-eshop/assets/css/'))
});
//Task style-agent build
gulp.task('style-agentview', function () {
    return gulp.src('../src/agentview.scss')
        .pipe(sass())
        .pipe(minifycss())  //执行压缩
        .pipe(rename({suffix: '.min'}))
        // .pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1','ios','android 4'))
        .pipe(gulp.dest('../../guideline/elements/fe-static/agent-view/assets/css/'))
});

//Task style build
gulp.task('style-sass', function () {
    return gulp.src('../src/main.scss')
        .pipe(sass())
        // .pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1','ios','android 4'))
        .pipe(gulp.dest('../../guideline/assets/css/'))
        .pipe(gulp.dest('../../taurus/src/assets/css/'))

});
gulp.task('style-img', function () {
    return gulp.src('../src/assets/img/*')
        .pipe(gulp.dest('../../guideline/assets/img/'))
        .pipe(gulp.dest('../../taurus/src/assets/img/'))
        .pipe(gulp.dest('../../guideline/elements/fe-static/agent-view/assets/img/'))

});
gulp.task('style-icons', function () {
    gulp.src(['../src/core/icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: '../src/core/icons/_scss/_icons.scss',
            targetPath: '../../../core/_scss/osef-base/_framework-icons.scss',
            fontPath: '../fonts/telenorIcon/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest('../src/assets/fonts/telenorIcon/'))
});
gulp.task('style-fonts', function () {
    return gulp.src('../src/assets/fonts/*/*')
        .pipe(gulp.dest('../../guideline/assets/fonts/'))
        .pipe(gulp.dest('../../taurus/src/assets/fonts/'))
        .pipe(gulp.dest('../../guideline/elements/fe-static/agent-view/assets/fonts/'))
        .pipe(zip("verisIcon.zip"))

});
gulp.task('style-clean', function () {
    return gulp.src('../../taurus/src/assets/css/*', {read: false})
        .pipe(clean());
});
gulp.task('svg-dom', function () {
    // 以下变量只在这里有用到
    var files = [];
    var reg = /\.svg$/;
    var JSON_DEST = '../../guideline/elements/Atoms/svg.json'
    fs.readdir(SVG_SRC, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            for (var item of data) {
                if (reg.test(item)) {
                    files.push(item.split('.')[0])
                }
            }
            wrtieJson(files, JSON_DEST)
        }
    });
});
// 将json写到文件中
function wrtieJson(data, dest) {
    var obj = {
        svgArray: data
    };
    fs.writeFile(dest, JSON.stringify(obj), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('json file write success')
        }
    })
}
//Task guideline build 不放在这里构建，由Taurus工程构建
/*gulp.task('guide-build', function () {
 exec('cd ../../biz && npm run build', function (err, stdout, stderr) {

 });
 });*/
gulp.task('guide-build', function () {
    // 将guideline中的assest复制到dist中
    gulp.src(ASSEST_SRC + '/index.html')
        .pipe(gulp.dest(DOCUMENT_DEST));
  // 将guideline中的assest复制到dist中
    gulp.src(ASSEST_SRC + '/assets/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/assets'));
    // 将biz>dist>assest>assest中的文件复制到dist中
    gulp.src(DOCUMENT_SRC + '/assets/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/assets'));
    //将biz>dist>sample中的文件复制到dist中
    gulp.src(DOCUMENT_SRC + '/examples/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/examples'));
    //将biz>dist>i18n中的文件复制到dist中
    gulp.src(DOCUMENT_SRC + '/i18n/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/i18n'));
    //将guideline>elements中的文件复制到dist中
    gulp.src([ASSEST_SRC + '/elements/*', ASSEST_SRC + '/elements/**/*'])
        .pipe(gulp.dest(DOCUMENT_DEST + '/elements'));
    //将guideline>patterns中的文件复制到dist中
    gulp.src([ASSEST_SRC + '/patterns/*', ASSEST_SRC + '/patterns/**/*'])
        .pipe(gulp.dest(DOCUMENT_DEST + '/patterns'));
    //将guideline>apis中的文件转为html复制到dist中
    gulp.src(ASSEST_SRC + '/document/apis/**/*')
        .pipe(markdown({renderer: renderer}))
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/apis'));
    //将guideline>apis根路径下的html复制到dist中
    gulp.src(ASSEST_SRC + '/document/*.html')
        .pipe(gulp.dest(DOCUMENT_DEST + '/document'));
    //将guideline>sample根路径下的html复制到dist中
    gulp.src(ASSEST_SRC + '/document/examples/*.html')
        .pipe(gulp.dest(DOCUMENT_DEST + '/examples'));
    //将guideline>conventions转为html复制到dist中
    gulp.src(ASSEST_SRC + '/document/conventions/*')
        .pipe(markdown({renderer: renderer}))
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/conventions'));
    //将guideline>faq转为html复制到dist中
    gulp.src(ASSEST_SRC + '/document/faqs/*')
        .pipe(markdown({renderer: renderer}))
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/faqs'));
    gulp.src(ASSEST_SRC + '/document/guides/*')
        .pipe(markdown({renderer: renderer}))
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/guides'))
});
gulp.task('guide-clean', function () {
    rm('-rf', DOCUMENT_DEST)
});
//build style
gulp.task('style', ['style-icons', 'style-sass', 'style-img', 'style-fonts', 'svg-dom']);
//clean&build veris guideline
gulp.task('guide', ['guide-clean', 'guide-build']);
//build style&guideline
gulp.task('default', ['style', 'guide']);
//build style-agentview
gulp.task('style-agentview-all', ['style-icons', 'style-agentview', 'style-img', 'style-fonts']);
//build style-eshop
gulp.task('style-eshop-all', ['style-icons', 'style-eshop', 'style-img', 'style-fonts']);
/*
 gulp.task("watch",function(){
 gulp.watch("../../guideline/!**",['default']);
 //gulp.watch(['../../guideline-dist/!**']).on('change', livereload.changed);
 });*/
