// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
const SRC = __dirname + '/../src/'
const DEST = __dirname + '/../dist/'
console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)
cp('-R', SRC + 'assets', DEST + 'assets')
var spinner = ora('building for production...')
spinner.start()
webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})