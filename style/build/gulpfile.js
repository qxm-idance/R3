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
    concat = require('gulp-concat');
var DOCUMENT_SRC = '../../taurus/dist',
    ASSEST_SRC = '../../guideline',
    DOCUMENT_DEST = '../../guideline-dist';
var fontName = 'framework-icons';
//eshop style build
gulp.task('shopminifycss', function() {
    return gulp.src('../p-eshop/assets/css/src/*.css')      //压缩的文件
        .pipe(concat('telenor.min.css'))
        .pipe(minifycss())  //执行压缩
        .pipe(gulp.dest('../p-eshop/assets/css'))   //输出文件夹
});
//Task style build
gulp.task('style-sass', function () {
    return gulp.src('../src/main.scss')
        .pipe(sass())
        // .pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1','ios','android 4'))
        .pipe(gulp.dest('../../guideline/assets/css/'))
        .pipe(gulp.dest('../../taurus/src/assets/css/'))
        .pipe(gulp.dest('../../style/p-eshop/assets/css/src/'))
});
gulp.task('style-img', function () {
    return gulp.src('../src/assets/img/*')
        .pipe(gulp.dest('../../guideline/assets/img/'))
        .pipe(gulp.dest('../../taurus/src/assets/img/'))
        .pipe(gulp.dest('../../style/p-eshop/assets/img/'))
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
             normalize:true,
             fontHeight:1001
        }))
        .pipe(gulp.dest('../src/assets/fonts/telenorIcon/'))
});
gulp.task('style-fonts', function () {
    return gulp.src('../src/assets/fonts/*/*')
        .pipe(gulp.dest('../../guideline/assets/fonts/'))
        .pipe(gulp.dest('../../taurus/src/assets/fonts/'))
        .pipe(gulp.dest('../../style/p-eshop/assets/fonts/'))
        .pipe(zip("verisIcon.zip"))
        .pipe(gulp.dest('../../guideline/assets/fonts/'))
});
gulp.task('style-clean', function () {
    return gulp.src('../../taurus/src/assets/css/*', {read: false})
        .pipe(clean());
});
//Task guideline build 不放在这里构建，由Taurus工程构建
/*gulp.task('guide-build', function () {
 exec('cd ../../biz && npm run build', function (err, stdout, stderr) {

 });
 });*/
gulp.task('guide-build', function () {
  // 将guideline中的assest复制到dist中
    gulp.src(ASSEST_SRC + '/assets/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/assets'));
  // 将biz>dist>assest>assest中的文件复制到dist中
  gulp.src(DOCUMENT_SRC + '/assets/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/assets'));
    //将biz>dist>sample中的文件复制到dist中
    gulp.src(DOCUMENT_SRC + '/examples/**/*')
        .pipe(gulp.dest(DOCUMENT_DEST + '/examples'));
    //将guideline>elements中的文件复制到dist中
    gulp.src([ASSEST_SRC + '/elements/*', ASSEST_SRC + '/elements/**/*'])
        .pipe(gulp.dest(DOCUMENT_DEST + '/elements'));
    //将guideline>patterns中的文件复制到dist中
    gulp.src([ASSEST_SRC + '/patterns/*', ASSEST_SRC + '/patterns/**/*'])
        .pipe(gulp.dest(DOCUMENT_DEST + '/patterns'));
    //将guideline>apis中的文件转为html复制到dist中
    gulp.src(ASSEST_SRC + '/document/apis/**/*')
        .pipe(markdown())
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/apis'));
    //将guideline>apis根路径下的html复制到dist中
    gulp.src(ASSEST_SRC + '/document/*.html')
        .pipe(gulp.dest(DOCUMENT_DEST + '/document'));
    //将guideline>sample根路径下的html复制到dist中
    gulp.src(ASSEST_SRC + '/document/examples/*.html')
        .pipe(gulp.dest(DOCUMENT_DEST + '/examples'));
    //将guideline>conventions转为html复制到dist中
    gulp.src(ASSEST_SRC + '/document/conventions/*')
        .pipe(markdown())
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/conventions'));
    //将guideline>faq转为html复制到dist中
    gulp.src(ASSEST_SRC + '/document/faqs/*')
        .pipe(markdown())
        .pipe(gulp.dest(DOCUMENT_DEST + '/document/faqs'))
});
gulp.task('guide-clean', function () {
  rm('-rf', DOCUMENT_DEST)
});
//build style
gulp.task('style', ['style-icons', 'style-sass', 'style-img', 'style-fonts']);
//clean&build veris guideline
gulp.task('guide', ['guide-clean', 'guide-build']);
//build style&guideline
gulp.task('default', ['style', 'guide']);
/*
 gulp.task("watch",function(){
 gulp.watch("../../guideline/!**",['default']);
 //gulp.watch(['../../guideline-dist/!**']).on('change', livereload.changed);
 });*/
