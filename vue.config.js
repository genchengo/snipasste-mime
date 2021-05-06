const path = require('path'); // 引入path模块
function resolve(dir){
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
    // set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('src'))
      .set('css', resolve('src/assets/css'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
  },
  lintOnSave: false,
  // 开发时
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': 'mock'
        }
      }
    }
  },
  // 调试用
  configureWebpack: {
    devtool: 'source-map'
  }
}
