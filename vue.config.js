// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// vue.config.js
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all', // 對所有文件啟用代碼拆分，包括動態加載的模組
        minSize: 20000, // 拆分模塊的最小尺寸，設為 20KB
        maxSize: 200000, // 拆分模塊的最大尺寸，設為 200KB
        minChunks: 1, // 模塊被至少多少次引用才會進行拆分
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all'
          },
          common: {
            name: 'common',
            minChunks: 2, // 被至少兩個模塊引用的代碼才會進行拆分
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://backend.api.url',
  //       changeOrigin: true,
  //     },
  //   },
  // },
  devServer: {
    host: '0.0.0.0',  // 設定為所有可用的 IP 地址，方便外部訪問
    // port: 8080,       // 設定開發伺服器的埠號
    open: false,       // 啟動後不自動打開瀏覽器
    proxy: {          // 配置代理
      '/api': {
        target: 'http://localhost:3000', // 代理目標
        changeOrigin: false, // 將主機標頭的來源更改為目標 URL
      },
    },
  },
};
