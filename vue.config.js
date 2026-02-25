const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave: false,
  //项目打包后，设置绝对路径
  publicPath: '/shopping-project-lcr/'
})
