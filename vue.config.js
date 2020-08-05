module.exports = {
  // 在 prodution 下, 不要為 .js 產生 .map 檔, 才不會把註解都輸出出去
  //productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/PhysicalExam/app/' : '/',
  devServer: {
    proxy: 'http://192.168.1.200/',
    port: 9981,
    open: process.platform === 'darwin'
    //proxy: 'http://localhost:14722'
  },
  // outputDir: "../RIS_WF/app",
  //
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  }
}
