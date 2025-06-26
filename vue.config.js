// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')

module.exports = {
  publicPath: '',
  outputDir: './docs',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@assets', path.resolve(__dirname, 'src/assets/'))
      .set('@img', path.resolve(__dirname, 'src/assets/img/'))
      .set('@views', path.resolve(__dirname, 'src/views/'))
      .set('@pages', path.resolve(__dirname, 'src/views/pages/'))
  }
}
